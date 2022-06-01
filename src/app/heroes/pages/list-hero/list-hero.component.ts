import { Component, OnInit } from '@angular/core';
import { IHero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.css']
})
export class ListHeroComponent implements OnInit {

  public heros:IHero[]=[];

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.heroService.getHeros().subscribe(res =>{
      this.heros = res;
    })
  }

}
