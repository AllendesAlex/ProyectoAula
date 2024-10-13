import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email!: string;
  password!: string;
  username: string = '';

  private usuarioPrueba = {
    correo: 'administrador@xmen.com',
    contraseña: 'administrador123'
  }

  constructor(private navCtrl: NavController, private router: Router, private authService: AuthService) {}

  goBack() {
    this.router.navigate(['/login']);
  }

  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    
    if (this.authService.login(this.email, this.password)) {
      console.log('Inicio de sesión exitoso');
      this.router.navigate(['/admin']);
    } else {
      console.log('Credenciales incorrectas');
    }
  }
  
}