import { CurrencyPipe, } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-investmet-results',
  styleUrl: './investmet-results.css',
  templateUrl: './investmet-results.html',
})
export class InvestmetResults {
  dummyData = [
    {
      year: 1,
      valueEndOfYear: 1155.00,
      interest: 55.00,
      totalInterest: 55.00,
      annualInvestment: 1100.00,
      totalAmountInvested: 1155.00,
    },
    {
      year: 2,
      valueEndOfYear: 2360.25,
      interest: 205.25,
      totalInterest: 260.25,
      annualInvestment: 1100.00,
      totalAmountInvested: 2255.00,
    },
    {
      year: 3,
      valueEndOfYear: 3715.26,
      interest: 355.01,
      totalInterest: 615.26,
      annualInvestment: 1100.00,
      totalAmountInvested: 3355.00,
    },
    {
      year: 4,
      valueEndOfYear: 5237.44,
      interest: 522.18,
      totalInterest: 1137.44,
      annualInvestment: 1100.00,
      totalAmountInvested: 4455.00,
    },
    {
      year: 5,
      valueEndOfYear: 6948.68,
      interest: 711.24,
      totalInterest: 1848.68,
      annualInvestment: 1100.00,
      totalAmountInvested: 5555.00,
    },
  ];
}
