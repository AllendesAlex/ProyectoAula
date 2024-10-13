import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  isAuthenticated(): boolean {
    // Verifica si hay un token de sesión en localStorage o cualquier método que estés usando
    return !!localStorage.getItem('token');  // Por ejemplo, si guardas un token JWT
  }

  login(token: string) {
    // Lógica para iniciar sesión, probablemente recibirás un token del servidor
    localStorage.setItem('token', token);
  }

  logout() {
    // Lógica para cerrar sesión
    localStorage.removeItem('token');
  }
}
