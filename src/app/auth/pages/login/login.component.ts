import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor( private router: Router,
               private authServce: AuthService) { }

  logIn(){

    this.authServce.logIn().subscribe((res)=> {

      if(res.id){

        this.router.navigate(['./heroes']);
      }
    })

  }


}
