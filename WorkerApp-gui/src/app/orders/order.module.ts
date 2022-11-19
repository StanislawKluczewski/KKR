import { NgModule } from "@angular/core";
import { AddOrderComponent } from "./components/add-order/add-order.component";
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownModule } from 'primeng/dropdown';
import { OrderListComponent } from './components/order-list/order-list.component';
import { EditOrderComponent } from './components/edit-order/edit-order.component';

@NgModule({
  declarations: [
    AddOrderComponent,
    OrderListComponent,
    EditOrderComponent
  ],
  imports: [
    TableModule,
    RouterModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    DropdownModule
  ],
  exports: []
})
export class OrderModule {

}
