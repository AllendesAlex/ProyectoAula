import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-hacer-reserva',
  templateUrl: './hacer-reserva.page.html',
  styleUrls: ['./hacer-reserva.page.scss'],
})
export class HacerReservaPage implements OnInit {
  username: string = '';

  salones = [
    { nombre: 'Salón Normal 1', imagen: 'assets/imagenes/SalaNormal-1.jpg', fecha: '', hora: '' },
    { nombre: 'Salón Normal 2', imagen: 'assets/imagenes/SalaNormal-1.jpg', fecha: '', hora: '' },
    { nombre: 'Salón Normal 3', imagen: 'assets/imagenes/SalaNormal-1.jpg', fecha: '', hora: '' },
    { nombre: 'Salón Normal 4', imagen: 'assets/imagenes/SalaNormal-1.jpg', fecha: '', hora: '' },
    { nombre: 'Salón Normal 5', imagen: 'assets/imagenes/SalaNormal-1.jpg', fecha: '', hora: '' },
    { nombre: 'Salón Normal 6', imagen: 'assets/imagenes/SalaNormal-2.jpg', fecha: '', hora: '' },
    { nombre: 'Salón Taller 1', imagen: 'assets/imagenes/SalaPC-1.jpg', fecha: '', hora: '' },
    { nombre: 'Salón Taller 2', imagen: 'assets/imagenes/SalaPC-1.jpg', fecha: '', hora: '' },
    { nombre: 'Salón Musica', imagen: 'assets/imagenes/SalaPC-1.jpg', fecha: '', hora: '' },
    { nombre: 'Salón Auditorio', imagen: 'assets/imagenes/SalaPC-2.jpg', fecha: '', hora: '' },
  ];

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.username = this.authService.getUsername();
  }

  goBack() {
    this.router.navigate(['/menu']);
  }

  reservar(salon: any) {
    if (!salon.fecha || !salon.hora) {
      alert('Por favor, completa la fecha y la hora.');
      return;
    }

    const reservas = JSON.parse(localStorage.getItem('reservas') || '[]');

    const nuevaReserva = {
      nombre: salon.nombre,
      fecha: salon.fecha,
      hora: salon.hora,
      usuario: this.username,
    };

    reservas.push(nuevaReserva);
    localStorage.setItem('reservas', JSON.stringify(reservas));

    alert('Reserva realizada con éxito!');
    console.log('Reservando:', salon);
  }
}
