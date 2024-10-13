import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../servicios/reserva.service';
@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.page.html',
  styleUrls: ['./crear-reserva.page.scss'],
})
export class CrearReservaPage {
  nuevaReserva: any = {};

  constructor(private reservaService: ReservaService) {}

  crearReserva() {
    this.reservaService.crearReserva(this.nuevaReserva).subscribe(response => {
      // Manejar la respuesta de la creación
    });
  }
}
