import { Component, HostBinding, HostListener, input, ViewEncapsulation, inject, ElementRef, ContentChild, contentChild, afterNextRender, afterRender } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  @HostBinding('class') className = 'control'
  // @HostListener('click') onClick() {
  //   console.log('nesto novo')
  // }
  label = input.required()
  private el = inject(ElementRef)
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input')
  constructor() {
    afterNextRender(() => {
      console.log('afterNextRender')
    })

    afterRender(() => {
      console.log('afterRender')
    })

    // this hook is after Angular 20 afterEveryRender
  }

  onClick() {
    console.log('nesto divlje')
    console.log(this.el)
    console.log(this.control()?.nativeElement.value)
  }
}
