const express = require('express');
const router = express.Router();
const mappingController = require('../controllers/mappingController');
const { authenticate } = require('../middleware/authMiddleware');

// Assign a doctor to a patient
router.post('/', authenticate, mappingController.assignDoctorToPatient);

// Retrieve all patient-doctor mappings
router.get('/', authenticate, mappingController.getAllMappings);

// Get all doctors assigned to a specific patient
router.get('/:patientId', authenticate, mappingController.getDoctorsByPatientId);

// Remove a doctor from a patient
router.delete('/:id', authenticate, mappingController.removeDoctorFromPatient);

module.exports = router;