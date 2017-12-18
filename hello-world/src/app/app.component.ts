import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, ActivatedRouteSnapshot, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public showButton: any = true;
  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.showButton = true;
   }

  public loadMap() {
    this.showButton = false;
    this.router.navigate(['map']);
  }


  public loadMyModule() {
    this.showButton = false;
    this.router.navigate(['my-form']);
  }
}

