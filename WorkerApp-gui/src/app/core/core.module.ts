import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FooterComponent } from './components/footer/footer.component';
import { ButtonModule } from "primeng/button";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    ButtonModule,
    CommonModule
  ],
  exports: [
    NavBarComponent,
    FooterComponent
  ],
  providers: [],
})
export class CoreModule { }
