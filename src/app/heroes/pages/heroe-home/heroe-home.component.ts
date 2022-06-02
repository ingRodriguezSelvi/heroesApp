import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/interfaces/auth.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-heroe-home',
  templateUrl: './heroe-home.component.html',
  styleUrls: ['./heroe-home.component.css']
})
export class HeroeHomeComponent implements OnInit {

  constructor( private router: Router,
               private authService: AuthService ) { }


  get auth(){
    return this.authService.auth
  }

  ngOnInit(): void {
  }

  logOut(){

    this.router.navigate(['./auth'])
  }

}
