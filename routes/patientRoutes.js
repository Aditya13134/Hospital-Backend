const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const { authenticate } = require('../middleware/authMiddleware');

// Add a new patient (Authenticated users only)
router.post('/', authenticate, patientController.addPatient);

// Retrieve all patients created by the authenticated user
router.get('/', authenticate, patientController.getPatients);

// Get details of a specific patient
router.get('/:id', authenticate, patientController.getPatientById);

// Update patient details
router.put('/:id', authenticate, patientController.updatePatient);

// Delete a patient record
router.delete('/:id', authenticate, patientController.deletePatient);

module.exports = router;