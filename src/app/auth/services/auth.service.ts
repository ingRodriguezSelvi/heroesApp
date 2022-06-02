import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  base:string = environment.api_url;

  private _auth: Auth | undefined;

  get auth():Auth{
    return ({...this._auth!})
  }

  constructor( private http: HttpClient ) { }

  verifyToken():Observable<boolean>{

    if(!localStorage.getItem('token')){
      return of(false);
    }

    return this.http.get<Auth>(`${this.base}usuarios/1`)
    .pipe(map(auth => auth ? true : false))
  }

  logIn():Observable<Auth>{

   return this.http.get<Auth>(`${this.base}usuarios/1`)
   .pipe(
      tap(auth => this._auth = auth),
      tap(auth => localStorage.setItem('token',auth.id))
   );
  }
}
