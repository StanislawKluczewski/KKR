import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  title: string = 'KKR - obsługa pracownicza';
  token!: any;
  username: string = '';
  isLoggedIn!: boolean;
  authListener!: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getNameOfLoggedUser();
  }

  getNameOfLoggedUser(): void {
    this.token = localStorage.getItem('token');
    let decodedToken = this.authService.decodeToken(this.token);
    this.username = decodedToken.name;
    this.isLoggedIn = this.authService.getAuthStatus(this.token);
  }

  logout(): void {
    this.authService.logout().subscribe(result => {
      console.log(result);
    })
    localStorage.removeItem('token');
    window.location.reload();
  }
}
