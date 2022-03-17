import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RymService {

  constructor(private http: HttpClient) { }

  devolver() {
    return this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8");
  }

  devolver_id(id: number) {
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`);
  }
}
