const dotenv = require('dotenv');
dotenv.config();

const allowedOrigins = [
    process.env.FRONTEND_URL,
    process.env.LOCALHOST_URL,
//   "https://project-setup-pi.vercel.app",
//   "http://localhost:5173"
].filter(Boolean)

const express = require('express');
const cors = require('cors');
const database = require('./config/database');

const userRoutes = require('./routes/User');

const app = express();
const PORT = process.env.PORT || 4000;
console.log('allowedOrigins ::', allowedOrigins)
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true
  })
);

app.use(express.json());

database.connect();

app.use('/api/v1/user', userRoutes);

app.get('/', (req, res) => {
  return res.json({
    success: true,
    message: 'Your server is up and running.'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
