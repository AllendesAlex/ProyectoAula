import { Component, OnInit  } from '@angular/core';
import { ReservaService } from '../servicios/reserva.service';
import { Router } from '@angular/router'; 
import { AuthService } from '../servicios/auth.service';
@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.page.html',
  styleUrls: ['./crear-reserva.page.scss'],
})
export class CrearReservaPage implements OnInit {
  nuevaReserva: any = {};
  username: string = '';

  constructor(private reservaService: ReservaService, private router: Router, private authService: AuthService) {
    this.username = this.authService.getUsername(); 
  }
  ngOnInit() {
    this.username = this.authService.getUsername();
  }

  crearReserva() {
    this.reservaService.crearReserva(this.nuevaReserva).subscribe(response => {
    });
  }

  goBack() {
    this.router.navigate(['/menu']);
  }
}
