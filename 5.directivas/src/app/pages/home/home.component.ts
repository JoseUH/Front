import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public hora :number = 20
  public visible : boolean = false;
  public superheroes: string[] = ["Spiderman", "Iron Man", "Ant-Man", "Wasp", "Hulk"]
  // public superheroes: string[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
