import { Pipe, PipeTransform } from '@angular/core';
import { IHero } from '../interfaces/hero.interface';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform(hero: IHero): string {
    if(!hero.id && !hero.alt_img){
      return `assets/no-image.png`
    }else if (hero.alt_img){
      return hero.alt_img;
    }
    return `assets/heroes/${ hero.id }.jpg`
  }

}
