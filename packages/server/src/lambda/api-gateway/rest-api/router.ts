import serverlessExpress from '@codegenie/serverless-express';
import cors from 'cors';
import express, { Request, Response } from 'express';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (_req: Request, res: Response): Promise<void> => {
  res.status(200).send("Hello serverless express!");
});

export const handler = serverlessExpress({ app });