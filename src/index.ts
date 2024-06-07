import express from 'express';
import taskRoutes from './routes';
import { errorHandler } from './middleware/errorHandler';
import sequelize from "./db/connection";
import { setupSwagger } from './swagger';

const app = express();
const port = parseInt(process.env.PORT || '3001');

app.use(express.json());
app.use(taskRoutes);
app.use(errorHandler);

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  setupSwagger(app, port);
});
