import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { UsuarioService } from '../servicios/usuario.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email!: string;
  password!: string;
  username: string = '';
  errorMessage: string = '';
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 3000,
    },
  };

  constructor(private navCtrl: NavController, private router: Router, private authService: AuthService,private usuarioService: UsuarioService) {}

  goBack() {
    this.router.navigate(['/login']);
  }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (user) => {
        this.authService.setCurrentUser(user); // Guarda el usuario en el servicio
        this.router.navigate(['/menu']); // Redirige a la página de menú
      },
      (error) => {
        this.errorMessage = 'Credenciales inválidas. Intenta de nuevo.'; // Muestra el error si las credenciales son incorrectas
      }
    );
  }
}