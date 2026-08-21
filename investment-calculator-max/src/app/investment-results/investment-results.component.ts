import { CurrencyPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { InvestmentService } from '../investment.service';
type InvestmentData = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
};
@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  investmentService = inject(InvestmentService);

  get results() {
    return this.investmentService.resultsData();
  }
}
