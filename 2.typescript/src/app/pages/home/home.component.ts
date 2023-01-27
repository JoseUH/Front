import { HomeInterface } from './../../models/home-interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public info: HomeInterface;

  constructor() {
    this.info = {
      title: 'este es mi titulo',
      hero: {
        subtitulo: 'este es mi subtitulo',
        image: {
          src: 'https://static.posters.cz/image/1300/posters/pokemon-pikachu-neon-i71936.jpg',
          alt: 'pikachu',
        },
      },
      body: [1, 2, 3, 4],
    };
  }

  ngOnInit(): void {}
}
