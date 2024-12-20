import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = this.authService.isAuthenticated();
    console.log('Usuario autenticado:', isAuthenticated);
    if (!isAuthenticated) {
      this.router.navigate(['/login']); 
    }
    return isAuthenticated;
  }
}
