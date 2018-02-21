import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-my-button-component',
  templateUrl: './my-button-component.component.html',
  styleUrls: ['./my-button-component.component.css']
})
export class MyButtonComponentComponent implements OnInit {
  public time: any = new Date().toString();

  constructor() { }

  @HostListener('click', ['$event.target'])
  onClick(target) {
    console.log("target", target);
    this.time = new Date().toString();
  }
  ngOnInit() {
  }

}
