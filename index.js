// server/index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import taskRoutes from './routes/tasks.js'; // ✔️ import route

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// 👇 add API routes here
app.use('/api', taskRoutes);  // e.g., /api/tasks

// start server
app.listen(5000, () => console.log(`✅ Server started on port 5000`));
