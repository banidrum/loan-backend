export class CalculateRateService {
  public calculateBaseRateFor700CreditScore(
    creditScore: number,
    loanTerm: string
  ) {
    if (loanTerm === "36 months") {
      const rate = 4.75;
      return rate;
    }
    if (loanTerm === "48 months") {
      const rate = 5;
      return rate;
    }
    if (loanTerm === "60 months") {
      const rate = 5.5;
      return rate;
    }
  }

  public calculateBaseRateBetween600And699CreditScore(
    creditScore: number,
    loanTerm: string
  ) {
    if (loanTerm === "36 months") {
      const rate = 5.75;
      return rate;
    }
    if (loanTerm === "48 months") {
      const rate = 6;
      return rate;
    }
    if (loanTerm === "60 months") {
      const rate = 6.65;
      return rate;
    }
  }

  public calculateBaseRateLessThan600CreditScore(
    creditScore: number,
    loanTerm: string
  ) {
    if (loanTerm === "36 months") {
      const rate = 12.75;
      return rate;
    }
    if (loanTerm === "48 months") {
      const rate = 13.25;
      return rate;
    }
    if (loanTerm === "60 months") {
    }
  }

  private validateVehicle(vehicleMileage: number, vehicleYear: number) {
    if (vehicleYear < 2015) {
      //   rate += 1;
    }

    if (vehicleMileage > 100000) {
      //   rate += 2;
    }
  }
}
