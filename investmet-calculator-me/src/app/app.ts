import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import { InvestmetResults } from './investmet-results/investmet-results';
import { InvestmetResultsService } from './investmet-results/investmet-results.service';
import { InvestmentResult } from './investmet-results/investment-results.types';


@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvestmetResults],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Investment Calculator');


  protected results = signal<InvestmentResult[]>([]);

  constructor(private investmetResultsService: InvestmetResultsService) {
    this.results.set(this.investmetResultsService.getResults());
  }

  onCalculationSubmitted() {
    this.results.set(this.investmetResultsService.getResults());
  }
}
