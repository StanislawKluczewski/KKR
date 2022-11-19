import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { AddTaskComponent } from './tasks/components/add-task/add-task.component';
import { EditTaskComponent } from './tasks/components/edit-task/edit-task.component';
import { TaskListComponent } from './tasks/components/task-list/task-list.component';
import { AddWorkerComponent } from './workers/components/add-worker/add-worker.component';
import { EditWorkerComponent } from './workers/components/edit-worker/edit-worker.component';
import { WorkerListComponent } from './workers/components/worker-list/worker-list.component';
import { AddOrderComponent } from './orders/components/add-order/add-order.component';
import { OrderListComponent } from './orders/components/order-list/order-list.component';
import { EditOrderComponent } from './orders/components/edit-order/edit-order.component';
import { AddReportComponent } from './reports/add-report/add-report.component';

const routes: Routes = [
  { path: '', component: WorkerListComponent },
  { path: 'workers', component: WorkerListComponent },
  { path: 'workers/add-worker', component: AddWorkerComponent },
  { path: 'workers/edit-worker/:name', component: EditWorkerComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/add-task', component: AddTaskComponent },
  { path: 'tasks/edit-task/:name', component: EditTaskComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'orders/add-order', component: AddOrderComponent },
  { path: 'orders/edit-order/:name', component: EditOrderComponent },
  { path: 'reports', component: AddReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
