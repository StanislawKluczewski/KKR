import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../shared/models/user.model";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: "root"
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('token');
  }

  decodeToken(token: string) {
    const helper = new JwtHelperService();
    let decodedToken = helper.decodeToken(token);
    return decodedToken;
  }

  getAuthStatus(token: string): boolean {
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  signIn(user: User): Observable<void> {
    return this.http.post<void>(environment.url + '/users/sign-up', user);
  }

  login(user: User) {
    return this.http.post<string>(environment.url + '/users/login', user).subscribe(result => {
      localStorage.setItem('token', result);
    });
  }

  logout(): Observable<void> {
    return this.http.get<void>(environment.url + "/users/logout");
  }
}

