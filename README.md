# Healthcare Backend System

A backend system for a healthcare application built with **Node.js**, **Express.js**, and **PostgreSQL** (hosted on Supabase). This system allows users to register, log in, and manage patient and doctor records securely using JWT authentication.

---

## Features

- **User Authentication**:
  - Register a new user.
  - Log in and receive a JWT token for authenticated requests.

- **Patient Management**:
  - Add, retrieve, update, and delete patient records.

- **Doctor Management**:
  - Add, retrieve, update, and delete doctor records.

- **Patient-Doctor Mapping**:
  - Assign a doctor to a patient.
  - Retrieve all patient-doctor mappings.
  - Remove a doctor from a patient.

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL (hosted on Supabase)
- **ORM**: Sequelize
- **Authentication**: JSON Web Tokens (JWT)
- **Environment Management**: dotenv

---

## API Endpoints

### Authentication
- **Register a User**: `POST /api/auth/register`
- **Login a User**: `POST /api/auth/login`

### Patient Management
- **Add a Patient**: `POST /api/patients`
- **Retrieve All Patients**: `GET /api/patients`
- **Get Patient Details**: `GET /api/patients/:id`
- **Update Patient Details**: `PUT /api/patients/:id`
- **Delete a Patient**: `DELETE /api/patients/:id`

### Doctor Management
- **Add a Doctor**: `POST /api/doctors`
- **Retrieve All Doctors**: `GET /api/doctors`
- **Get Doctor Details**: `GET /api/doctors/:id`
- **Update Doctor Details**: `PUT /api/doctors/:id`
- **Delete a Doctor**: `DELETE /api/doctors/:id`

### Patient-Doctor Mapping
- **Assign a Doctor to a Patient**: `POST /api/mappings`
- **Retrieve All Mappings**: `GET /api/mappings`
- **Get Doctors for a Patient**: `GET /api/mappings/:patientId`
- **Remove a Doctor from a Patient**: `DELETE /api/mappings/:id`

---

## Setup Instructions

### Prerequisites

1. **Node.js**: Install Node.js from [nodejs.org](https://nodejs.org/).
2. **PostgreSQL**: Use a local PostgreSQL database or a cloud provider like Supabase.
3. **Supabase Account**: Create a free account at [supabase.io](https://supabase.io/).

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/healthcare-backend.git
   cd healthcare-backend
