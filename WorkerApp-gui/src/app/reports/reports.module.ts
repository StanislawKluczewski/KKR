import { NgModule } from "@angular/core";
import { AddReportComponent } from "./add-report/add-report.component";
import { ButtonModule } from "primeng/button";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AddReportComponent
  ],
  imports: [
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    BrowserModule
  ],
  exports: []
})
export class ReportsModule {

}
