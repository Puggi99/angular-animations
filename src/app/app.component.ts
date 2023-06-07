import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,

} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('showHide', [
      state('show', style({
        top: '300px',
        left: '500px',
        opacity: 1,
      })),

      state('hide', style({
        top: '500px',
        left: '0px',
        opacity: 0.1

      })),

      transition('show => hide', [
        animate('1s'),
      ]),
      transition('hide => show', [
        animate('2s'),
      ])
    ]),
    trigger('openCloseSidenav', [
      state( 'open', style({
        right: '0px'
      })),

    state('closed', style({
      right: "-300px"
    })),

    transition('open => closed', [animate('1s ease-in')]),
    transition('closed => open', [animate('1s ease-in' )]),
  ]),
  ]
})
export class AppComponent {
  title = 'angular-animations';
  isShown= true;

  showHide(){
    this.isShown = !this.isShown;
  }

  isSidenavOpen = false

  showSide(){
    this.isSidenavOpen = !this.isSidenavOpen
 }
}
