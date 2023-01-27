import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public subtitulo : string = " este es el subtitulo"
  public tamano : string = "600px"
  public done : boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
