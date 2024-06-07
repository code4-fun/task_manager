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
