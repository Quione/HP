import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ProvService {

  private URL_API:string = "https://www.potterapi.com/v1";
  private API_KEY:string = "$2a$10$82Qi0l2yUpB1Di5k3kbDseXgEwiYizkWYvKF6a6xo/JDZE0VCuyQO";
  
  constructor(private http: Http) { }

  getCharacters(){
    let url:string = `${this.URL_API}/characters?key=${this.API_KEY}`
    return this.http.get(url);
  }
  getHouse(){
    let url:string = `${this.URL_API}/houses?key=${this.API_KEY}`
    return this.http.get(url);
  }
}
