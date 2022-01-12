import Loan from "../interfaces/Loan";
import { CalculateRateService } from "./calculateRateService";

export class LoanService {
  constructor(private readonly calculateRateService: CalculateRateService) {}
  public async CalculateApr(loanBody: Loan) {
    console.log(`LOAN -> ${JSON.stringify(loanBody)}`);

    const calculatedRate = await this.calculateRate(loanBody);

    return calculatedRate;
  }

  private async calculateRate(loan: Loan) {
    const {
      loanAmount,
      loanTerm,
      vehicleYear,
      personCreditScore,
      vehicleMileage,
    } = loan;

    if (personCreditScore < 600) {
      this.calculateRateService.calculateBaseRateLessThan600CreditScore(
        personCreditScore,
        loanTerm
      );
    }

    if (personCreditScore >= 600 && personCreditScore <= 699) {
      this.calculateRateService.calculateBaseRateBetween600And699CreditScore(
        personCreditScore,
        loanTerm
      );
    }

    if (personCreditScore >= 700) {
      this.calculateRateService.calculateBaseRateFor700CreditScore(
        personCreditScore,
        loanTerm
      );
    }

    // Validar isso em outra função a parte tbm

    if (loanAmount < 5000 && loanTerm === "36 months") {
      return "The minimum loan amount for 36 months is 5000";
    }

    if (loanAmount < 10000 && loanTerm === "48 months") {
      return "The minimum loan amount for 48 months is 10000";
    }

    if (loanAmount < 15000 && loanTerm === "60 months") {
      return "The minimum loan amount for 60 months is 15000";
    }

    // return rate;
  }

  private calculateBaseRate(creditScore: number, loanTerm: string) {}
}
