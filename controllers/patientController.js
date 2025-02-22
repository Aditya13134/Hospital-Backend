const Patient = require('../models/patient');

// Add a new patient
exports.addPatient = async (req, res) => {
  try {
    const { name, age, gender } = req.body;
    const patient = await Patient.create({ name, age, gender, userId: req.user.id });
    res.status(201).json({ message: 'Patient added successfully', patient });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Retrieve all patients for the authenticated user
exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll({ where: { userId: req.user.id } });
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get details of a specific patient
exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update patient details
exports.updatePatient = async (req, res) => {
  try {
    const { name, age, gender } = req.body;
    const [updated] = await Patient.update(
      { name, age, gender },
      { where: { id: req.params.id, userId: req.user.id } }
    );
    if (updated) {
      const updatedPatient = await Patient.findOne({ where: { id: req.params.id } });
      res.status(200).json({ message: 'Patient updated successfully', patient: updatedPatient });
    } else {
      res.status(404).json({ message: 'Patient not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a patient record
exports.deletePatient = async (req, res) => {
  try {
    const deleted = await Patient.destroy({ where: { id: req.params.id, userId: req.user.id } });
    if (deleted) {
      res.status(200).json({ message: 'Patient deleted successfully' });
    } else {
      res.status(404).json({ message: 'Patient not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};