const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorcontroller');
const { authenticate } = require('../middleware/authMiddleware');

// Add a new doctor (Authenticated users only)
router.post('/', authenticate, doctorController.addDoctor);

// Retrieve all doctors
router.get('/', authenticate, doctorController.getDoctors);

// Get details of a specific doctor
router.get('/:id', authenticate, doctorController.getDoctorById);

// Update doctor details
router.put('/:id', authenticate, doctorController.updateDoctor);

// Delete a doctor record
router.delete('/:id', authenticate, doctorController.deleteDoctor);

module.exports = router;