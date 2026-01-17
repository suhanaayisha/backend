import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/name', (req: Request, res: Response) => {
  res.json({ name: 'Suhana Ayishaa' });
});

app.get('/api/date', (req: Request, res: Response) => {
  res.json({ date: new Date() });
});

export default app;
