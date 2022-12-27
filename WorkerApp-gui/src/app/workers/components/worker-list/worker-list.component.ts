import { Component, OnInit } from '@angular/core';
import { Worker } from '../../models/worker.model';
import { WorkerService } from '../../worker.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss']
})
export class WorkerListComponent implements OnInit {

  workers!: Worker[];
  title: string = 'Pracownicy'
  isLogged!: boolean;
  token!: any;

  constructor(private workerService: WorkerService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getWorkers();
    this.token = this.authService.getToken();
    this.isLogged = this.authService.getAuthStatus(this.token);
  }

  deleteWorker(workerName: string): void {
    this.workerService.deleteWorker(workerName).subscribe(result => {
      console.log(result);
      this.getWorkers();
    })
  }

  getWorkers(): void {
    this.workerService.getWorkerList().subscribe(data => {
      this.workers = data.workerList;
    })
  }

}
