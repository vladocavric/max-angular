import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import { InvestmetResults } from './investmet-results/investmet-results';


@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvestmetResults],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Investment Calculator');
}
