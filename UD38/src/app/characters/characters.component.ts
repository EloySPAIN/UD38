import { Component, OnInit, Input } from '@angular/core';
import { RymService } from 'src/app/characters/servicios/rym.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  @Input() personajes: any = null;

  constructor(private rymService: RymService) { }

  ngOnInit() {
    this.rymService.devolver()
      .subscribe( result => this.personajes = result)
  }

}
