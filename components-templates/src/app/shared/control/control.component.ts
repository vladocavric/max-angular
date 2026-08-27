import { Component, HostBinding, HostListener, input, ViewEncapsulation, inject, ElementRef } from '@angular/core';

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

  onClick() {
    console.log('nesto divlje')
    console.log(this.el)
  }
}
