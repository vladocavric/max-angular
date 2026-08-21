import { Injectable, signal } from "@angular/core";
import { InvestmentData, ResultsData } from "./types";

@Injectable({ providedIn: 'root' })
export class InvestmentService {
    resultsData = signal<ResultsData[] | undefined>(undefined);
    calculateResults(data: InvestmentData) {
        const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
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
        this.resultsData.set(annualData);

    }
}