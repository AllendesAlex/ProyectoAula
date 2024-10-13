import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email!: string;
  password!: string;

  constructor(private navCtrl: NavController, private router: Router) {}

  goBack() {
    this.router.navigate(['/login']);
  }

  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
  
}