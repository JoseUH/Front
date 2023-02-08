import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  db_url:string = "http://localhost:3000/comics"

  constructor(private http: HttpClient ) {}
  public comicData= {
    author: "",
    company: "",
    cover: "",
    id:"",
    title:""
  }

  getComics(){
    return this.http.get(this.db_url)
  }
  getComic(id:number){
    return this.http.get(`${this.db_url}/${id}`)
  }
  deleteComic(id:number){
    return this.http.delete(`${this.db_url}/${id}`)
  }
  postComic(comic : any){
    return this.http.post(this.db_url,comic)
  }





}
