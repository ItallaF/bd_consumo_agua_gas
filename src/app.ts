import express from 'express';
import bodyParser from 'body-parser';
import consumRoutes from './routes/consumRoutes';

const app = express();
app.use(bodyParser.json());
app.use('/consumoaguaegas', consumRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
