import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmetResultsService } from '../investmet-results/investmet-results.service';

@Component({
  imports: [FormsModule],
  standalone: true,
  selector: 'app-user-input',
  styleUrl: './user-input.css',
  templateUrl: './user-input.html',
})
export class UserInput {
  initialInvestment = 0;
  monthlyInvestment = 0;
  expectedReturn = 0;
  duration = 0;

  calculationSubmitted = output<void>();

  constructor(private investmetResultsService: InvestmetResultsService) { }

  onSubmit() {
    this.investmetResultsService.calculateResults({
      initialInvestment: this.initialInvestment,
      annualInvestment: this.monthlyInvestment * 12,
      expectedReturn: this.expectedReturn,
      duration: this.duration,
    });
    this.calculationSubmitted.emit();
  }
}
