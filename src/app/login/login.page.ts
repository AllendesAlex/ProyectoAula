import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email!: string;
  password!: string;

  constructor(private navCtrl: NavController) {}

  login() {
    // Aquí deberías agregar tu lógica de inicio de sesión
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Ejemplo: Validar el correo y la contraseña y redirigir según el rol
  }
}