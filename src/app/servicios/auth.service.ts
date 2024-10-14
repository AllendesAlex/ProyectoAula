import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarios = [
    {
      correo: 'administrador@xmen.com',
      contraseña: 'administrador123',
      nombre: 'Administrador',
      rol: 'admin'
    },
    {
      correo: 'alumno@xmen.com',
      contraseña: 'alumno123',
      nombre: 'Alumno',
      rol: 'alumno'
    }
  ];

  private isLoggedIn = false;
  private currentUser: { nombre: string; rol: string } | null = null;

  constructor() {}

  // Método para autenticar el usuario
  login(email: string, password: string): { nombre: string; rol: string } | null {
    const usuario = this.usuarios.find(u => u.correo === email && u.contraseña === password);
    if (usuario) {
      this.isLoggedIn = true;
      this.currentUser = { nombre: usuario.nombre, rol: usuario.rol };
      return this.currentUser; // Devuelve el usuario autenticado
    }
    return null; // Devuelve null si no se encuentra el usuario
  }

  // Método para verificar si está autenticado
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  // Método para cerrar sesión
  logout() {
    this.isLoggedIn = false;
    this.currentUser = null;
  }
  getCurrentUser(): { nombre: string; rol: string } | null {
    return this.currentUser; // Devuelve el usuario actual o null
  }

}
