import { Component } from '@angular/core';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  username: string = '';

  constructor(private authService: AuthService) {
    const usuarioActual = this.authService.getCurrentUser();
    if (usuarioActual) {
      this.username = usuarioActual.nombre; // Obtener el nombre del usuario
    } else {
      this.username = 'Estudiante'; // Valor por defecto si no hay usuario autenticado
    }
  }
}
