let express = require("express");
let router = express.Router();
let bicicletaController = require("../../controllers/api/bicicletaApiController");

router.get("/", bicicletaController.bicicleta_list);
router.post("/create", bicicletaController.bicicleta_create);
router.delete("/delete", bicicletaController.bicicleta_delete);
router.put("/:id/update", bicicletaController.bicicleta_update);
module.exports = router;