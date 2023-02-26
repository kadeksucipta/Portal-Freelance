const { subject } = require("@casl/ability");
const Invoice = require ("../invoice/model")
const { policyFor } = require("../../utils")

const show = async (req, res, next) => {
    try {
        let policy = policyFor(req.user);
        console.log("policy:", policy);
        // let subjectInvoice = subject("Invoice", {...invoice, user_id: invoice.user._id});
        // console.log("subjectInvoice :", subjectInvoice);
        // if(!policy.can("read", subjectInvoice)){
        //     return res.json({
        //         error: 1,
        //         message: "Anda tidak memiliki hak akses untuk melihat invoice ini"
        //     });
        // }

        let {order_id} = req.params;
        console.log("order_id: ", order_id);
        let invoice = 
        await Invoice
        .findOne({order: order_id})
        .populate("order")
        .populate("user")
        console.log("invoice:", invoice);

        return res.json(invoice)
    } catch (err) {
        return res.json({
            error: 1,
            message: "Error when getting invoice"
        });
    }
}

module.exports = {
    show
}