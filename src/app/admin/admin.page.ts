import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage {

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout(); // Llama al método logout del AuthService
    this.router.navigate(['/login']); // Redirige a la página de login
  }
}
