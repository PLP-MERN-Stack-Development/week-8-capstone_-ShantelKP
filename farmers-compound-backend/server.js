const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const farmRoutes = require('./routes/farmRoutes');
const connectDB = require('./config/db'); // If you use MongoDB connection file

require('dotenv').config();
connectDB();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/farms', farmRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
