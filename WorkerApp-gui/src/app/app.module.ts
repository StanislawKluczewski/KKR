import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { WorkerModule } from './workers/worker.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TaskModule } from './tasks/task.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { AuthInterceptor } from './auth/auth.interceptor.service';
import { OrderModule } from './orders/order.module';
import { ReportsModule } from './reports/reports.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    WorkerModule,
    HttpClientModule,
    TaskModule,
    BrowserAnimationsModule,
    AuthModule,
    OrderModule,
    ReportsModule
  ],
  providers:
    [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
