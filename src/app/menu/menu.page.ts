import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
username: string;
constructor(private authService: AuthService) {
  this.username = this.authService.getCurrentUser(); // Obtener el nombre del usuario
}

  ngOnInit() {
  }

}
