import { LoanService } from "../src/services/loanService";
import {
  CREDIT_SCORE_BETWEEN_600_699_BODY,
  LESS_THAN_600_CREDIT_SCORE_BODY,
  SUCCESSFUL_600_RESPONSE,
  SUCCESSFUL_BETWEEN_600_699_RESPONSE,
  SUCCESSFUL_BODY,
  SUCCESSFUL_RESPONSE,
  SUCCESSFUL_VEHICLE_MILEAGE_RATE_RESPONSE,
  SUCCESSFUL_VEHICLE_YEAR_RATE_RESPONSE,
  VEHICLE_MILEAGE_HIGHER_100000,
  VEHICLE_YEAR_BEFORE_2O15,
} from "./mocks/mocks";
const loanService = new LoanService();

describe("This suite tests the Loan Service", () => {
  it("Should test the calculateApr method", async () => {
    const response = loanService.calculateApr(SUCCESSFUL_BODY);

    expect(response).toBe(SUCCESSFUL_RESPONSE);
  });

  it("Should test the credit score less than 600", async () => {
    const response = loanService.calculateApr(LESS_THAN_600_CREDIT_SCORE_BODY);

    expect(response).toBe(SUCCESSFUL_600_RESPONSE);
  });

  it("Should test the credit score between 600 and 699", async () => {
    const response = loanService.calculateApr(
      CREDIT_SCORE_BETWEEN_600_699_BODY
    );

    expect(response).toBe(SUCCESSFUL_BETWEEN_600_699_RESPONSE);
  });

  it("Should test the vehicle year before 2015", async () => {
    const response = loanService.calculateApr(VEHICLE_YEAR_BEFORE_2O15);

    expect(response).toBe(SUCCESSFUL_VEHICLE_YEAR_RATE_RESPONSE);
  });

  it("Should test the vehicle mileage higher than 100000", async () => {
    const response = loanService.calculateApr(VEHICLE_MILEAGE_HIGHER_100000);

    expect(response).toBe(SUCCESSFUL_VEHICLE_MILEAGE_RATE_RESPONSE);
  });
});
