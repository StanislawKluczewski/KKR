import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { WorkerList } from "../workers/models/worker.model";
import { Task, TaskList } from "./models/task.model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTaskList(): Observable<TaskList> {
    return this.http.get<TaskList>(environment.url + '/tasks');
  }

  getTask(taskName: string): Observable<Task> {
    return this.http.get<Task>(environment.url + '/tasks/' + taskName);
  }

  addTask(task: Task): Observable<void> {
    return this.http.post<void>(environment.url + '/tasks/add-task', task);
  }

  deleteTask(taskName: string): Observable<void> {
    return this.http.delete<void>(environment.url + '/tasks/delete-task/' + taskName);
  }

  editTask(taskName: string, task: Task): Observable<Task> {
    return this.http.put<Task>(environment.url + '/tasks/edit-task/' + taskName, task);
  }

  getWorkerList(): Observable<WorkerList> {
    return this.http.get<WorkerList>(environment.url + '/workers');
  }

}
