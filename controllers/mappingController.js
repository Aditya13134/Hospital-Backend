const Mapping = require('../models/mapping');
const Patient = require('../models/patient');
const Doctor = require('../models/doctor');

// Assign a doctor to a patient
exports.assignDoctorToPatient = async (req, res) => {
  try {
    const { patientId, doctorId } = req.body;

    // Check if patient and doctor exist
    const patient = await Patient.findOne({ where: { id: patientId } });
    const doctor = await Doctor.findOne({ where: { id: doctorId } });

    if (!patient || !doctor) {
      return res.status(404).json({ message: 'Patient or Doctor not found' });
    }

    // Create the mapping
    const mapping = await Mapping.create({ patientId, doctorId });
    res.status(201).json({ message: 'Doctor assigned to patient successfully', mapping });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Retrieve all patient-doctor mappings
exports.getAllMappings = async (req, res) => {
  try {
    const mappings = await Mapping.findAll();
    res.status(200).json(mappings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all doctors assigned to a specific patient
exports.getDoctorsByPatientId = async (req, res) => {
  try {
    const mappings = await Mapping.findAll({ where: { patientId: req.params.patientId } });
    const doctorIds = mappings.map((mapping) => mapping.doctorId);
    const doctors = await Doctor.findAll({ where: { id: doctorIds } });
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove a doctor from a patient
exports.removeDoctorFromPatient = async (req, res) => {
  try {
    const deleted = await Mapping.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(200).json({ message: 'Doctor removed from patient successfully' });
    } else {
      res.status(404).json({ message: 'Mapping not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};