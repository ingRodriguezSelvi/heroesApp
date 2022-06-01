import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { IHero, Publisher } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  publisher = [{
    id:'DC Comics',
    desc:'DC - Comics'
  },
  {
    id:'Marvel Comics',
    desc:'Marvel - Comics'
  }
];

hero:IHero = {
  superhero:'',
  alter_ego:'',
  characters:'',
  first_appearance:'',
  publisher:Publisher.DCComics,
  alt_img:''
}

  constructor(
    private heroService: HeroService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private activateRoute: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getHero();

  }

  getHero(){
    if(!this.router.url.includes('editHero')){
      return;
    }

    this.activateRoute.params.pipe(
      switchMap(({id})=> this.heroService.getHeroById(id))
    ).subscribe(hero => this.hero = hero);
  }

  saveHero(){
    if ( this.hero.superhero.trim().length===0 ){
      return console.log('Faltna campos');
    }

    if(this.hero.id){
      this.heroService.editHero(this.hero).subscribe(()=>{
        this.viewSnackBar('Hero edit susscefull')
        this.router.navigate(['/heroes/editHero',this.hero.id])
      })}
    else{
      this.heroService.addHero(this.hero).subscribe(()=>{
        this.router.navigate(['/heroes/listHero'])
        this.viewSnackBar("Hero created susscceful")
      })
    }
  }

  deleteHero(){

    const dialog = this.dialog.open( ConfirmDialogComponent, {
      width: '250px',
      data: this.hero
    });

    dialog.afterClosed().subscribe(result =>{
      if(result){
        this.heroService.delete(this.hero.id!).subscribe(()=>{
          this.viewSnackBar("Hero deleted susscefull")
          this.router.navigate(['/heroes/listHero']);
        });
      }
    })

  }

  viewSnackBar(text: string){
    this._snackBar.open(text, 'ok!',{
      duration:2500
    });
  }

}
