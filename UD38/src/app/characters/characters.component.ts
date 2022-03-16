import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  personajes: any = null;

  configUrl = 'assets/database.json';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.configUrl).subscribe(result => {
      this.personajes = result;
    },
    error => {
      console.log("Problemas");
    });
  }

}
