import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WorkerService } from '../../worker.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.scss']
})
export class AddWorkerComponent implements OnInit {

  title: string = 'Dodaj pracownika';
  newWorker = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    function: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required)
  });

  constructor(private workerService: WorkerService, private router: Router) { }

  ngOnInit(): void {

  }

  addWorker(newWorker: FormGroup): void {
    this.workerService.addWorker(newWorker.value).subscribe(result => {
      console.log(result);
    })
    this.router.navigateByUrl('/workers');
  }



}
