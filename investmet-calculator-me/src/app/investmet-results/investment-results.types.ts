export type InvestmentResult = {
    year: number;
    valueEndOfYear: number;
    interest: number;
    totalInterest: number;
    annualInvestment: number;
    totalAmountInvested: number;
}


export type InvestmentResultsInput = {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
}