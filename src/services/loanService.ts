import { Response } from "express";
import Loan from "../interfaces/Loan";
import {
  getRatesFor700CreditScore,
  getRatesBetween600And699CreditScore,
  getRatesForLess600CreditScore,
} from "../helpers/calculateBaseRate";

export class LoanService {
  public calculateApr(loanBody: Loan): string {
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
      return getRatesForLess600CreditScore(loanTerm);
    }

    if (creditScore >= 600 && creditScore <= 699) {
      return getRatesBetween600And699CreditScore(loanTerm);
    }

    return getRatesFor700CreditScore(loanTerm);
  }

  private getBaseRateForVehicleYear(vehicleYear: number, rate: number) {
    if (vehicleYear < 2015) return rate + 1.0;
    return rate;
  }

  private getBaseRateForVehicleMileage(vehicleMileage: number, rate: number) {
    if (vehicleMileage >= 100000) return rate + 2.0;
    return rate;
  }
}
