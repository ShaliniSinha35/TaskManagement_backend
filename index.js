const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');


dotenv.config();

// Initialize app
const app = express();

// Middleware
app.use(express.json()); 
app.use(cors()); 

// Connect to DB
connectDB();

// Use task routes
app.use('/api', taskRoutes);

// Set up a basic health check route
app.get('/', (req, res) => res.send('API is running'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
