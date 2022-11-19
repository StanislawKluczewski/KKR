import { NgModule } from '@angular/core';
import { WorkerListComponent } from './components/worker-list/worker-list.component';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditWorkerComponent } from './components/edit-worker/edit-worker.component';
import { AddWorkerComponent } from './components/add-worker/add-worker.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    WorkerListComponent,
    AddWorkerComponent,
    EditWorkerComponent
  ],
  imports: [
    TableModule,
    RouterModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class WorkerModule {

}
