import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>
  // @ViewChildren(ButtonComponent) buttons
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form')

  // @Output() add: new EventEmitter<{ title: string; request: string }>()

  add = output<{ title: string; request: string }>()


  ngOnInit(): void {
    console.log('on init')
    console.log(this.form?.nativeElement)
  }

  ngAfterViewInit(): void {
    console.log('after view init')
    console.log(this.form?.nativeElement)
  }
  onSubmit({ titleElement, requestElement }: {
    titleElement: HTMLInputElement;
    requestElement: HTMLTextAreaElement;

  }) {
    this.add.emit({ title: titleElement.value, request: requestElement.value })
    // console.log(titleElement.value, requestElement.value)
    // console.log(this.form?.nativeElement)
    // this.form().nativeElement.reset()
  }
}
