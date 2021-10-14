import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  public base = 'https://pokeapi.co/api/v2/'

  constructor(public http: HttpClient) { }


  getResults() {

    return this.http.get<any>(this.base + `pokemon?limit=20&offset=0`);

  }

  getResults2(){
    return this.http.get<any>(this.base + `pokemon?limit=40&offset=20`);

  }


  getResults3(){
    return this.http.get<any>(this.base + `pokemon?limit=60&offset=40`);

  }
  getPokemon(id: any) {
    return this.http.get<any>(this.base + `pokemon/${id}`)

  }

  getInfoPokemon(name: any) {
    return this.http.get<any>(this.base + `pokemon/${name}`)

  }

  getInfo(id: any) {
    return this.http.get<any>(id);

  }


}
