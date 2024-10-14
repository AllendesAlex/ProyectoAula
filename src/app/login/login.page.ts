import { Component } from '@angular/core';
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
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 3000,
    },
  };

  constructor(private navCtrl: NavController, private router: Router, private authService: AuthService) {}

  goBack() {
    this.router.navigate(['/login']);
  }

  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    const emailIngresado = this.email.trim().toLowerCase();
    const passwordIngresado = this.password.trim();

    const usuarioAutenticado = this.authService.login(emailIngresado, passwordIngresado);

    if (usuarioAutenticado) {
      this.username = usuarioAutenticado.nombre;
      console.log('Inicio de sesión exitoso -', usuarioAutenticado.rol);
      if (usuarioAutenticado.rol === 'admin') {
        this.router.navigate(['/admin']);
      } else if (usuarioAutenticado.rol === 'alumno') {
        this.router.navigate(['/menu']);
      }
    } else {
      console.log('Credenciales incorrectas');
    }
  }
}
