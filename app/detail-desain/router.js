const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const detaildesainController = require("./controller");

router.get("/detaildesain", 
    detaildesainController.index
);
router.post("/detaildesain",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "Detaildesain"),
    detaildesainController.store
);
router.put("/detaildesain/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "Detaildesain"),
    detaildesainController.update
);
router.delete("/detaildesain/:id",
police_check("delete", "Detaildesain"),
    detaildesainController.destroy
);

module.exports = router;