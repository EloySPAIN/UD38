import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RymService } from 'src/app/characters/servicios/rym.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  personajes: any;
  id: any;

  constructor(private rymService: RymService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');

    this.rymService.devolver_id(this.id)
      .subscribe( result => this.personajes = result)
  }

}
