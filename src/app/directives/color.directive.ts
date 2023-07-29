import {Directive, ElementRef, Input, OnChanges} from '@angular/core';
@Directive({
  selector: '[color]'
})
export class ColorDirective {
  constructor(private elem: ElementRef) {
    let colors = ['red', 'green', 'blue', 'yellow', 'orange'];
    console.log(this.elem.nativeElement);
    let counter = 0;
    this.elem.nativeElement.addEventListener('click', function(){
      this.style.color = colors[counter++];
      if(counter === 5){
        counter = 0;
      }
    });
  }
}