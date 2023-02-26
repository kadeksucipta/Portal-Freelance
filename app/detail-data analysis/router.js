const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const detaildataanalysisController = require("./controller");

router.get("/detaildataanalysis", 
    detaildataanalysisController.index
);
router.post("/detaildataanalysis",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "Detaildataanalysis"),
    detaildataanalysisController.store
);
router.put("/detaildataanalysis/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "Detaildataanalysis"),
    detaildataanalysisController.update
);
router.delete("/detaildataanalysis/:id",
police_check("delete", "Detaildataanalysis"),
    detaildataanalysisController.destroy
);

module.exports = router;