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
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.username = this.authService.getUsername();
  }
  goBack() {
    this.router.navigate(['/menu']);
  }

}
