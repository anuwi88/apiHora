const router = require("express").Router();

const HorarioBrasiliaController = require("../../../controllers/HorarioBrasiliaController");

const horarioBrasiliaController = new HorarioBrasiliaController();

// ADM
router.get('/', horarioBrasiliaController.index);



module.exports = router;