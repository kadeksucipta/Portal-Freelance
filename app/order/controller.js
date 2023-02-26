const CartItem = require("../cart-item/model")
const DeliveryAddress = require("../deliveryAddress/model");
const Order = require("../order/model");
const { Types } = require("mongoose");
const OrderItem = require("../order-item/model");
const Invoice = require("../invoice/model")

const store = async (req, res, next) => {

    try {
        let {delivery_fee, delivery_address} = req.body;
        let items = await CartItem.find({user: req.user._id}).populate("product");
        console.log(items);
        if(!items || (items && items.length === 0)) {
            return res.json({
                error: 1,
                message: `You're not create order because you have not items in cart`
            })
        }
        // let address = await DeliveryAddress.findById(delivery_address);
        let order = new Order({
            _id: new Types.ObjectId(),
            status: "waiting_payment",
            delivery_fee: delivery_fee,
            delivery_address: {
                provinsi: delivery_address.provinsi,
                kabupaten: delivery_address.kabupaten,
                kecamatan: delivery_address.kecamatan,
                kelurahan: delivery_address.kelurahan,
                detail: delivery_address.detail,
            },
            user: req.user._id
        });
        console.log(items);
        let orderItems = 
            await OrderItem
            .insertMany(items.map(items => ({
                ...items,
                name: items.product.name,
                qty: parseInt(items.qty),
                price: parseInt(items.product.price),
                order: order._id,
                product: items.product._id,
                // total: parseInt(sub_total + this.delivery_fee)
            })));
        orderItems.forEach(item => order.order_items.push(item));
        order.save();
        await CartItem.deleteMany({user: req.user._id});
        return res.json(order);
    } catch(err) {

        if(err && err.name === "ValidationError"){
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            });
        }

        next(err);
    }
}

const index = async(req, res, next) => {
    try {
        let {skip = 0, limit = 10} = req.query;
        let count = await Order.find({user: req.user._id}).countDocuments();
        let orders = 
            await Order
            .find({user: req.user._id})
            .skip(parseInt(skip))
            .limit(parseInt(limit))
            .populate("order_items")
            .sort("-createAt");
            for (let index = 0; index < orders.length; index++) {
                const invoice = await Invoice.findOne({order: orders[index]._id})
                orders[index] = {
                    ...orders[index]._doc,
                    total: invoice.total
                }
            }
        return res.json({
            data: orders, 
            count
        });
    } catch (err) {
        if(err && err.name === "ValidationError"){
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            });
        }
        next(err);
    }
}

module.exports = {
    store,
    index
}