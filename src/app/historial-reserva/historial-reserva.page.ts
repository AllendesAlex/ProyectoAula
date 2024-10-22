import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-historial-reserva',
  templateUrl: './historial-reserva.page.html',
  styleUrls: ['./historial-reserva.page.scss'],
})
export class HistorialReservaPage implements OnInit {
  username: string = '';
  reservas: any[] = [];

  constructor(private router: Router, private authService: AuthService) {
    this.username = this.authService.getUsername();
  }

  ngOnInit() {
    this.cargarReservas();
  }

  cargarReservas() {
    const reservasGuardadas = JSON.parse(localStorage.getItem('reservas') || '[]');
    this.reservas = reservasGuardadas.filter((reserva: any) => reserva.usuario === this.username);
  }

  editarReserva(reserva: any) {
    this.router.navigate(['/editar-reserva'], { state: { reserva } });
  }

  goBack() {
    this.router.navigate(['/menu']);
  }
}
