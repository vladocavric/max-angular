export type InvestmentData = {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number
}

export type ResultsData = {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
};