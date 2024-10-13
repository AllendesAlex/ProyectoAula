import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioPrueba = {
    correo: 'administrador@xmen.com',
    contraseña: 'administrador123',
    nombre: 'Administrador',
  };

  // Simula el estado de autenticación
  private isLoggedIn = false;
  private currentUserName: string | null = null;

  constructor() {}

  // Método para autenticar el usuario
  login(email: string, password: string): boolean {
    if (email === this.usuarioPrueba.correo && password === this.usuarioPrueba.contraseña) {
      this.isLoggedIn = true;
      this.currentUserName = this.usuarioPrueba.nombre;
      return true;
    }
    return false;
  }

  // Método para verificar si está autenticado
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  // Método para cerrar sesión
  logout() {
    this.isLoggedIn = false;
    this.currentUserName = null;
  }

  getCurrentUser(): string {
    return this.isLoggedIn ? this.currentUserName! : 'Estudiante'; // Usar '!' para indicar que no es null
  }
}
