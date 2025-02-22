const Doctor = require('../models/doctor');

// Add a new doctor
exports.addDoctor = async (req, res) => {
  try {
    const { name, specialization } = req.body;
    const doctor = await Doctor.create({ name, specialization, userId: req.user.id });
    res.status(201).json({ message: 'Doctor added successfully', doctor });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Retrieve all doctors
exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.findAll();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get details of a specific doctor
exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ where: { id: req.params.id } });
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update doctor details
exports.updateDoctor = async (req, res) => {
  try {
    const { name, specialization } = req.body;
    const [updated] = await Doctor.update(
      { name, specialization },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedDoctor = await Doctor.findOne({ where: { id: req.params.id } });
      res.status(200).json({ message: 'Doctor updated successfully', doctor: updatedDoctor });
    } else {
      res.status(404).json({ message: 'Doctor not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a doctor record
exports.deleteDoctor = async (req, res) => {
  try {
    const deleted = await Doctor.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(200).json({ message: 'Doctor deleted successfully' });
    } else {
      res.status(404).json({ message: 'Doctor not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};