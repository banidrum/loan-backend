import {
  ratesBetween600And699CreditScore,
  ratesFor700CreditScore,
  ratesForLess600CreditScore,
} from "../utils/calculateBaseRate";

export class CalculateRateService {
  public calculateBaseRateFor700CreditScore(
    creditScore: number,
    loanTerm: string,
    vehicleYear: number,
    vehicleMileage: number
  ) {
    // const calculatedRate = ratesFor700CreditScore(loanTerm);
    // const returnedVehicleYearRate = this.validateVehicleYear(
    //   vehicleYear,
    //   calculatedRate
    // );
    // const returnedVehicleMileageRate = this.validateVehicleMileage(
    //   vehicleMileage,
    //   calculatedRate
    // );
    // if (returnedVehicleYearRate && returnedVehicleMileageRate) {
    //   return (
    //     calculatedRate + returnedVehicleYearRate + returnedVehicleMileageRate
    //   );
    // }
    // if (returnedVehicleYearRate) {
    //   return returnedVehicleYearRate;
    // }
    // if (returnedVehicleMileageRate) {
    //   return returnedVehicleMileageRate;
    // }
    // return calculatedRate;
  }

  public calculateBaseRateBetween600And699CreditScore(
    creditScore: number,
    loanTerm: string,
    vehicleYear: number
  ) {
    const calculatedRate = ratesBetween600And699CreditScore(loanTerm);

    return calculatedRate;
  }

  public calculateBaseRateLessThan600CreditScore(
    creditScore: number,
    loanTerm: string,
    vehicleYear: number
  ) {
    const calculatedRate = ratesForLess600CreditScore(loanTerm);
    return calculatedRate;
  }
}
