import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import userRoutes from './routes/UserRoutes'
import chatRoutes from './routes/chatOpenAI'
import errorHandler from './middlewares/ErrorHandler';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())

app.get('/', (_req, res) => {
  res.send('Hello World!!!');
});


app.use('/api', userRoutes);
app.use('/api', chatRoutes);
app.use(errorHandler)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
