import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit() {

  }

}
