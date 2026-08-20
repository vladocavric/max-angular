import { CurrencyPipe, } from '@angular/common';
import { Component, input } from '@angular/core';
import { InvestmentResult } from './investment-results.types';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-investmet-results',
  styleUrl: './investmet-results.css',
  templateUrl: './investmet-results.html',
})
export class InvestmetResults {
  results = input<InvestmentResult[]>([]);
}
