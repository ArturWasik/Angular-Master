import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { hideNavigation, showNavigation } from '../../actions/app.actions';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  showNavigation(): void {
    this.store.dispatch(showNavigation());
  }

  hideNavigation(): void {
    this.store.dispatch(hideNavigation());
  }
}
