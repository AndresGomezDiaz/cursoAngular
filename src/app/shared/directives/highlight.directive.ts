import { Directive, ElementRef } from '@angular/core';
// Las directivas se usan para modificar directamente el DOM por lo cual 
// es necesario evaluar donde se usa
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    element: ElementRef
  ) { 
    element.nativeElement.style.backgroundColor = 'red';
  }

}
