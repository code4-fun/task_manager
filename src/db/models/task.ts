import {
  Table,
  Column,
  Model,
  DataType,
  Default,
  CreatedAt,
  UpdatedAt
} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import { IsString, Length, IsEnum } from 'class-validator';

enum TaskStatus {
  IN_PROGRESS = 'выполняется',
  COMPLETED = 'выполнено'
}

/**
 * @openapi
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Task unique identifier
 *         title:
 *           type: string
 *           minLength: 3
 *           description: Task title
 *         description:
 *           type: string
 *           description: Task description
 *         status:
 *           type: string
 *           enum: [выполняется, выполнено]
 *           description: Task status
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date and time of task creation
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date and time of task last update
 */
@Table
export class Task extends Model<Task> {
  @Column({
    type: DataType.UUID,
    defaultValue: uuidv4,
    primaryKey: true
  })
  id!: string;

  @Length(3)
  @IsString()
  @Column({
    allowNull: false
  })
  title!: string;

  @IsString()
  @Column
  description?: string;

  @IsEnum(TaskStatus)
  @Default(TaskStatus.IN_PROGRESS)
  @Column({
    type: DataType.ENUM(...Object.values(TaskStatus))
  })
  status!: TaskStatus;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
