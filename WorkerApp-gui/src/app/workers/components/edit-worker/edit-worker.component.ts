import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../worker.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.scss']
})
export class EditWorkerComponent implements OnInit {

  searchName!: string;
  worker!: any;
  newWorker!: FormGroup;

  constructor(private workerService: WorkerService, private activatedRoute: ActivatedRoute, private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.newWorker = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      function: ['', Validators.required],
      age: ['', [Validators.required]]
    });

    this.activatedRoute.params
      .subscribe(params => {
        this.searchName = params['name'];
      });

    this.workerService.getWorker(this.searchName)
      .subscribe(result => {
        this.worker = result;
        this.newWorker.patchValue(result);
      });
  }

  editWorker(worker: FormGroup, workerName: string): void {
    this.workerService.editWorker(worker.value, workerName).subscribe();
    this.router.navigateByUrl('/workers');
  }
}
