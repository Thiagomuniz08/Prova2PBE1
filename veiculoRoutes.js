const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculoController');

router.post('/', veiculoController.createVeiculo);
router.get('/', veiculoController.readVeiculos);
router.put('/', veiculoController.updateVeiculo);
router.delete('/:idVeiculo', veiculoController.deleteVeiculo);

module.exports = router;