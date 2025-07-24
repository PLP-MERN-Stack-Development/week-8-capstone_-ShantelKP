const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const farmRoutes = require('./routes/farmRoutes');
const cropRoutes = require('./routes/cropRoutes'); // ✅ Add this if not already
const connectDB = require('./config/db');

require('dotenv').config();
connectDB();

app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/farms', farmRoutes);
app.use('/api/crops', cropRoutes); // ✅ REGISTER crop routes here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
