import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
  animations: [

    trigger('openClose',[
    state("open", style({
      height: '200px',

      box:'border-box',
      border: '3px solid black',
      opacity: '0.8',
      backgroundColor: 'yellow',
    })),


    state('closed', style({
      height: '100px',
      width: '200px',
      box:'border-box',
      border: '3px solid black',
      opacity: 0.8,
      backgroundColor: 'blue'
    })),

    transition('open => closed', [
      animate('0.1s')
    ]),

    transition('closed => open', [
      animate('0.1s')
    ]),

  ])
  ]

})
export class OpenCloseComponent {
  isOpen = true;

  toggle(){
    this.isOpen = !this.isOpen;
  }
}
