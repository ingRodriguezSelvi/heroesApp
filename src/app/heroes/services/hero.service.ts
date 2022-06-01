import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IHero } from '../interfaces/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  url:string = environment.api_url;

  constructor(
    private http: HttpClient
  ) { }

  getHeros():Observable<IHero[]>{
    return this.http.get<IHero[]>(`${this.url}heroes`);
  }

  getHeroById(id:string):Observable<IHero>{
    return this.http.get<IHero>(`${this.url}heroes/${id}`)
  }

  getHeroSugget(filter:string):Observable<IHero[]>{
    return this.http.get<IHero[]>(`${this.url}heroes?q=${filter}&_limit=6`)
  }

  addHero(hero:IHero):Observable<IHero>{
    return this.http.post<IHero>(`${this.url}heroes`,hero);
  }

  editHero(hero:IHero):Observable<IHero>{
    return this.http.put<IHero>(`${this.url}heroes/${hero.id}`,hero);
  }

  delete(id:string):Observable<any>{
   return  this.http.delete<any>(`${this.url}heroes/${id}`);
  }
}
