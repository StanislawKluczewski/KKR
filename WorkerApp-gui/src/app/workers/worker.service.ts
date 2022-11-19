import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { WorkerList } from "./models/worker.model";

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private http: HttpClient) { }

  getWorkerList(): Observable<WorkerList> {
    return this.http.get<WorkerList>(environment.url + '/workers');
  }

  getWorker(workerName: string): Observable<Worker> {
    return this.http.get<Worker>(environment.url + '/workers/' + workerName);
  }

  addWorker(worker: Worker): Observable<void> {
    return this.http.post<void>(environment.url + '/workers/add-worker', worker);
  }

  deleteWorker(name: string): Observable<void> {
    return this.http.delete<void>(environment.url + '/workers/delete-worker/' + name);
  }

  editWorker(worker: Worker, workerName: string): Observable<void> {
    return this.http.put<void>(environment.url + '/workers/edit-worker/' + workerName, worker);
  }
}
