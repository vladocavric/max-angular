import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host: {
    '(click)': 'onLog()'
  }
})
export class LogDirective {
  private elemntRef = inject(ElementRef)

  constructor() { }

  onLog() {
    console.log('nesto je kliknuto')
    console.log(this.elemntRef.nativeElement)
  }

}
