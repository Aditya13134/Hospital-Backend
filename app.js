require('dotenv').config();
const express = require('express');
const sequelize = require('./config/config');
const authRoutes = require('./routes/authRoutes');
const patientRoutes = require('./routes/patientroutes');
const doctorRoutes = require('./routes/doctorRoutes');
const mappingRoutes = require('./routes/mappingRoutes');
const { authenticate } = require('./middleware/authMiddleware');

const app = express();
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/patients', authenticate, patientRoutes);
app.use('/api/doctors', authenticate, doctorRoutes);
app.use('/api/mappings', authenticate, mappingRoutes);

// Sync database
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to Supabase has been established successfully.');
    return sequelize.sync();
  })
  .then(() => {
    console.log('Database synced');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});