const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController');

router.post('/', professorController.createProfessor);
router.get('/', professorController.readProfessores);
router.put('/', professorController.updateProfessor);
router.delete('/:professor_id', professorController.deleteProfessor);

module.exports = router;