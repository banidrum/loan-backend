import { Response } from "express";
import Loan from "../interfaces/Loan";
import {
  getBaseRateForCreditScoreLowerThan600,
  getBaseRateForCreditScoreBetween600And699,
  getBaseRateFor700CreditScore,
} from "../utils/getBaseRate";

export class LoanService {
  public calculateApr(loanBody: Loan): string {
    const { loanAmount, loanTerm, personCreditScore } = loanBody;

    loanBody["loanTerm"][1];

    const verifyMinimumAndMaximumLoanAmount =
      this.verifyMinimumAndMaximumLoanAmount(
        loanAmount,
        personCreditScore,
        loanTerm
      );

    if (verifyMinimumAndMaximumLoanAmount) {
      return verifyMinimumAndMaximumLoanAmount;
    }

    const calculatedRate = this.calculateRate(loanBody);

    return calculatedRate;
  }

  private calculateRate(loan: Loan): string {
    const { loanTerm, vehicleYear, personCreditScore, vehicleMileage } = loan;

    const rate = this.getBaseRate(personCreditScore, loanTerm);

    const returnedVehicleYearRate = this.getBaseRateForVehicleYear(
      vehicleYear,
      rate
    );

    const returnedVehicleMileageRate = this.getBaseRateForVehicleMileage(
      vehicleMileage,
      returnedVehicleYearRate
    );

    return `Your rate is ${returnedVehicleMileageRate}%`;
  }

  private getBaseRate(creditScore: number, loanTerm: string): number {
    if (creditScore < 600) {
      return getBaseRateForCreditScoreLowerThan600(loanTerm);
    }

    if (creditScore >= 600 && creditScore <= 699) {
      return getBaseRateForCreditScoreBetween600And699(loanTerm);
    }

    return getBaseRateFor700CreditScore(loanTerm);
  }

  private getBaseRateForVehicleYear(vehicleYear: number, rate: number) {
    if (vehicleYear < 2015) return rate + 1;
    return rate;
  }

  private getBaseRateForVehicleMileage(vehicleMileage: number, rate: number) {
    if (vehicleMileage >= 100000) return rate + 2;
    return rate;
  }

  private verifyMinimumAndMaximumLoanAmount(
    loanAmount: number,
    creditScore: number,
    loanTerm: string
  ): string {
    if (loanAmount < 5000 && loanTerm === "36 months") {
      return "The minimum loan amount for 36 months is $ 5000";
    }

    if (loanAmount < 10000 && loanTerm === "48 months") {
      return "The minimum loan amount for 48 months is $ 10000";
    }

    if (loanAmount < 15000 && loanTerm === "60 months") {
      return "The minimum loan amount for 60 months is $ 15000";
    }

    if (creditScore >= 700 && loanAmount >= 100000) {
      return "The maximum loan amount for a credit score equal to or above 700 is $ 100,000";
    }

    if (creditScore >= 600 && creditScore <= 699 && loanAmount >= 75000) {
      return "The maximum loan amount for a credit score between 600 and 699 is $ 75,000";
    }

    if (creditScore < 600 && loanAmount >= 50000) {
      return "The maximum loan amount for a credit score below 600 is $ 50,000";
    }

    return "";
  }
}
