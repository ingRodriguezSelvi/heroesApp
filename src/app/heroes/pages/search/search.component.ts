import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { filter } from 'rxjs';
import { IHero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private heroService:HeroService
  ) { }

  public filter:string = '';
  public heros:IHero[] = [];
  public heroSelected!:IHero | undefined;


  ngOnInit(): void {
  }

  search(){
    this.heroService.getHeroSugget(this.filter.trim()).subscribe(heros => this.heros = heros);
  }

  optionSelected( event:MatAutocompleteSelectedEvent ){

    if(event.option.value== null || event.option.value == undefined){
      this.filter = '';
      this.heroSelected = undefined;
      return;
    }

    const hero:IHero = event.option.value;
    this.filter = hero.superhero;
    this.heroService.getHeroById(hero.id!).subscribe(res=> this.heroSelected = res);
  }

}
