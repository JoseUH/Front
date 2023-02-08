import { ComicsService } from './../../services/comics.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent {
  comicList : any [] = [];

  constructor(private comicsService:ComicsService){}


  ngOnInit(): void {

    this.comicsService.getComics().subscribe((data:any)=>{
      console.log(data)
      this.comicList= [...data]
    })

  }

}
