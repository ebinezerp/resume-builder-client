import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appLowerCase]'
})
export class LowerCaseDirective {

  constructor(private element: ElementRef) { }

  @HostListener('keyup')
  keyup() {
    if (this.element.nativeElement.value) {
      const value = this.element.nativeElement.value.toLowerCase();
      this.element.nativeElement.value = value;
    }
  }

}
