import { Injectable } from "@angular/core";
import { InvestmentResult, InvestmentResultsInput } from "./investment-results.types";


@Injectable({ providedIn: 'root' })
export class InvestmetResultsService {
  results: InvestmentResult[] = [];

  calculateResults({ initialInvestment, annualInvestment, expectedReturn, duration }: InvestmentResultsInput) {
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.results = annualData;

    console.log('Calculated Results from service:', this.results);

  }

  getResults() {
    return this.results;
  }
}