import { ComicsService } from './../../services/comics.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent {
 id!: number;
 comic!: any;
 constructor(private comicsService:ComicsService, private activatedRoute:ActivatedRoute, private router: Router){}

ngOnInit(): void {
 // aqui simplemente lo que le estamos diciendo es que nos mire la ruta que ponemos en el navegador y nos la guarde en nuestra variable id
  this.activatedRoute.paramMap.subscribe(params=> {
    this.id = Number(params.get("id"));
  })
// aqui llamamos a nuestro servicio que tiene dentro la función getcomic a la cual le pasaremos nuestro id para que haga una petición individual
  this.comicsService.getComic(this.id).subscribe((data:any)=> {
    this.comic = data
  })
}
deleteComic() {
  this.comicsService.deleteComic(this.id).subscribe((data:any)=>{
    this.router.navigate(["/"])
  })
}


}
