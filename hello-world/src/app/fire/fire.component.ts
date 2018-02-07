import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';
import { Subject } from 'rxjs/Subject';
export interface User { name: string; id: string };

@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.css']
})
export class FireComponent implements OnInit {
  size$ = new Subject<string>();
  sizeFilter$: BehaviorSubject<string | null>;
  colorFilter$: BehaviorSubject<string | null>;

  constructor(afs: AngularFirestore) {
    const queryObservable = this.size$.switchMap(size =>
      afs.collection('users', ref => ref.where('id', '==', size)).valueChanges());
      queryObservable.subscribe(queriedItems => {
        console.log(queriedItems);
      });
  }
  ngOnInit() {

  }
  filterBySize(size: string | null) {
    this.size$.next(size);
  }
  filterByColor(color: string | null) {
    // this.size$.next(color);
  }
}
