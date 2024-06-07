import express from 'express';
import taskRoutes from './routes';
import { errorHandler } from './middleware/errorHandler';
import connection from "./db/connection";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(taskRoutes);
app.use(errorHandler);

connection.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
