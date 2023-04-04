//Global Imports
import express from 'express';
import dotenv from 'dotenv';
//Internal Imports
import userRouter from './routes/userRoute.js';
import noteRouter from './routes/noteRoute.js';
import connectDB from './Db/connect.js';

// Configaration
dotenv.config();
const app = express();

//Middlewares
app.use('/users', userRouter);
app.use('/note', noteRouter);

//HTTP REQUESTS with EndPoints
app.get('/', (req, res) => {
  res.send('Home Page');
});

//Environmet Variables
const PORT = process.env.PORT || 3000;
let MONGODB_URL = process.env.MONGO_URL;

const start = async () => {
  try {
    await connectDB(MONGODB_URL);
    app.listen(PORT, () => console.log(`Backend Running on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
