import { Router } from '@angular/router';
import { ComicsService } from './../../services/comics.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss'],
})
export class GestionComponent {
  comicForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private comicsService: ComicsService,
    private router: Router
  ) {}
  // voy a poner por defecto una información que me va a venir del servicio
  public newComic = this.comicsService.comicData;
  public comicId = this.comicsService.comicData.id;

  ngOnInit(): void {
    this.comicForm = this.formBuilder.group({
      title: [
        this.newComic.title,
        [Validators.required, Validators.minLength(1)],
      ],
      author: [
        this.newComic.author,
        [Validators.required, Validators.minLength(1)],
      ],
      cover: [this.newComic.cover, [Validators.required]],
      company: [
        this.newComic.company,
        [Validators.required, Validators.minLength(1)],
      ],
    });
    // aqui estamos recogiendo los cambios que metemos en nuestro formularios y estamos seteando el valor de newComic que nos llegaba vacio del servicio
    this.comicForm.valueChanges.subscribe((changes) => {
      this.newComic = changes;
    });
  }
  onSubmit(){
    // console.log(this.newComic)
    this.comicsService.postComic(this.newComic).subscribe((data)=> {
      this.router.navigate(["/comics"])
    })
   this.comicForm.reset()
  }
}
