import { Router, Request, Response, NextFunction } from 'express';
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask
} from '../controller/taskController';

const router = Router();

/**
 * @openapi
 * /tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       201:
 *         description: The task was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 */
router.post('/tasks', (req: Request, res: Response, next: NextFunction) => {
  createTask(req, res, next);
});

/**
 * @openapi
 * /tasks:
 *   get:
 *     summary: Get all tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: List of tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */
router.get('/tasks', (req: Request, res: Response, next: NextFunction) => {
  getTasks(req, res, next);
});

/**
 * @openapi
 * /tasks/{id}:
 *   get:
 *     summary: Get task by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The task id
 *     responses:
 *       200:
 *         description: The task description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: The task was not found
 */
router.get('/tasks/:id', (req: Request, res: Response, next: NextFunction) => {
  getTaskById(req, res, next);
});

/**
 * @openapi
 * /tasks/{id}:
 *   put:
 *     summary: Update task by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The task id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: The task was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: The task was not found
 */
router.put('/tasks/:id', (req: Request, res: Response, next: NextFunction) => {
  updateTask(req, res, next);
});

/**
 * @openapi
 * /tasks/{id}:
 *   delete:
 *     summary: Delete task by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The task id
 *     responses:
 *       204:
 *         description: The task was deleted
 *       404:
 *         description: The task was not found
 */
router.delete('/tasks/:id', (req: Request, res: Response, next: NextFunction) => {
  deleteTask(req, res, next);
});

export default router;
