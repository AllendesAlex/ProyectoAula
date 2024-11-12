import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;
  private currentUser: { nombre: string; rol: string } | null = null;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<{ nombre: string; rol: string }> {
    return this.http.post<{ nombre: string; rol: string }>('http://localhost:3000/api/login', {email: email, password: password  });
  }

  setCurrentUser(user: { nombre: string; rol: string }) {
    this.isLoggedIn = true;
    this.currentUser = user;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }


  logout() {
    this.isLoggedIn = false;
    this.currentUser = null;
  }
  getCurrentUser(): { nombre: string; rol: string } | null {
    return this.currentUser;
  }
  getUsername(): string {
    return this.currentUser ? this.currentUser.nombre : '';
  }
}
