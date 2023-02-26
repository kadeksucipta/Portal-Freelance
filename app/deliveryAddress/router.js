const deliveryAddressController = require("./controller");
const {police_check} = require("../../middlewares");

const router = require("express").Router();

router.post(
    "/delivery-addresses",
    police_check("create", "DeliveyAddress"),
    deliveryAddressController.store
);

router.put("/delivery-addresses/:id", deliveryAddressController.update);
router.delete("/delivery-addresses/:id", deliveryAddressController.destroy);

router.get(
    "/delivery-addresses",
    police_check("view", "DeliveryAddress"),
    deliveryAddressController.index
);

module.exports = router;