import { Worker } from "src/app/workers/models/worker.model";

export interface TaskList {
  taskList: Task[]
}

export interface Task {
  name: string,
  description: string,
  workerResponsible: Worker,
  dateOfRegistration: Date
}
