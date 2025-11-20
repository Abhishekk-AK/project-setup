const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const database = require('./config/database');

const userRoutes = require('./routes/User');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin:'http://localhost:5173',
        credentials:true
    })
)

database.connect();

app.use('/api/v1/user', userRoutes);

app.get('/', (req, res) => {
    return res.json({
        success:true,
        message:'Your server is up and running.'
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})