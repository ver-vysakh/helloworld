import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AgmMap, AgmMarker } from '@agm/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-googol-map',
  templateUrl: './googol-map.component.html',
  styleUrls: ['./googol-map.component.css']
})
export class GoogolMapComponent implements OnInit {
  public lat: number = 51.678418;
  public lng: number = 7.809007;
  constructor(
    private http: Http
  ) { }

  ngOnInit() {

   }

 public getAll() {
   this.http.get('https://demo9467441.mockable.io/get').toPromise().then(res=> {
     console.log(res.json());
   })
 }
}
