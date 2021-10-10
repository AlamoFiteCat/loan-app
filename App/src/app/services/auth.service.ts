import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  currentUser$ = new Subject<any>();

  registerUser(email: string, password: string) {
    this.http
      .post(
        `${environment.baseUrl}/auth/register`,
        { email, password },
        { withCredentials: true }
      )
      .subscribe(
        (response) => {
          this.currentUser$.next(response);
          this.router.navigate(['loan']);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  loginUser(email: string, password: string) {
    this.http
      .post(
        `${environment.baseUrl}/auth/login`,
        { email, password },
        {
          withCredentials: true,
        }
      )
      .subscribe(
        (response) => {
          console.log(response);
          this.currentUser$.next(response);
          this.router.navigate(['loan']);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  logoutUser() {
    this.http
      .post(
        `${environment.baseUrl}/auth/logout`,
        {},
        {
          withCredentials: true,
        }
      )
      .subscribe(() => {
        this.currentUser$.next(null);
        this.router.navigate(['auth/login']);
      });
  }

  getCurrentUser() {
    this.http
      .get(`${environment.baseUrl}/auth/current`, {
        withCredentials: true,
      })
      .subscribe((response) => {
        this.currentUser$.next(response);
      });
  }
}
