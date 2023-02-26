const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const detailwebdevController = require("./controller");

router.get("/detailwebdev", 
    detailwebdevController.index
);
router.post("/detailwebdev",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "Detailwebdev"),
    detailwebdevController.store
);
router.put("/detailwebdev/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "Detailwebdev"),
    detailwebdevController.update
);
router.delete("/detailwebdev/:id",
police_check("delete", "Detailwebdev"),
    detailwebdevController.destroy
);

module.exports = router;