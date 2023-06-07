import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFatButton]'
})
export class FatButtonDirective {

  constructor(private element: ElementRef) { }
  @HostListener('click')
  animateButton(){
    // this.element.nativeElement.style.transform = 'scale(1.2)'
  }
}
