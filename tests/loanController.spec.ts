import { LoanController } from "../src/controllers/loanController";
import { Request } from "jest-express/lib/request";
import { Response } from "jest-express/lib/response";

// import { Response } from "express";
// import { Request } from "express";
import {
  CREDIT_SCORE_600_699_MAXIMUM_AMOUNT_RESPONSE,
  CREDIT_SCORE_700_MAXIMUM_AMOUNT_RESPONSE,
  CREDIT_SCORE_LESS_600_MAXIMUM_AMOUNT_RESPONSE,
  LOAN_36_MONTHS_MINIMUM_AMOUNT_RESPONSE,
  LOAN_48_MONTHS_MINIMUM_AMOUNT_RESPONSE,
  LOAN_60_MONTHS_MINIMUM_AMOUNT_RESPONSE,
  MAXIMUM_AMOUNT_600_699_CREDIT_SCORE,
  MAXIMUM_AMOUNT_700_CREDIT_SCORE,
  MAXIMUM_AMOUNT_LESS_600_CREDIT_SCORE,
  MINIMUM_AMOUNT_LESS_10000,
  MINIMUM_AMOUNT_LESS_15000,
  MINIMUM_AMOUNT_LESS_5000,
  SUCCESSFUL_BODY,
  WRONG_CREDIT_SCORE_FORMAT,
  WRONG_LOAN_AMOUNT_FORMAT,
  WRONG_LOAN_TERM_FORMAT,
  WRONG_VEHICLE_MILEAGE_FORMAT,
  WRONG_VEHICLE_YEAR_FORMAT,
} from "./mocks/mocks";
import { LoanService } from "../src/services/loanService";

const loanController = new LoanController();

let request: any;
let res: any;
let responseJsonSpyOn: jest.SpyInstance<any, unknown[]>;
let responseStatusSpyOn: jest.SpyInstance<any, unknown[]>;

describe("This suite tests the Loan Controller", () => {
  beforeEach(() => {
    request = new Request();
    res = new Response();
    responseJsonSpyOn = jest.spyOn(res, "json");
    responseStatusSpyOn = jest.spyOn(res, "status");
  });

  afterEach(() => jest.restoreAllMocks());

  it("Should validate the minimum loan for 36 months", async () => {
    Object.assign(request, { body: MINIMUM_AMOUNT_LESS_5000 });

    loanController.calculateAPR(request, res);

    expect(responseJsonSpyOn).toHaveBeenCalledWith(
      LOAN_36_MONTHS_MINIMUM_AMOUNT_RESPONSE
    );
    expect(responseStatusSpyOn).toHaveBeenCalledWith(400);
  });

  it("Should validate the minimum loan for 48 months", async () => {
    Object.assign(request, { body: MINIMUM_AMOUNT_LESS_10000 });

    loanController.calculateAPR(request, res);

    expect(responseJsonSpyOn).toHaveBeenCalledWith(
      LOAN_48_MONTHS_MINIMUM_AMOUNT_RESPONSE
    );

    expect(responseStatusSpyOn).toHaveBeenLastCalledWith(400);
  });

  it("Should validate the minimum loan for 60 months", async () => {
    Object.assign(request, { body: MINIMUM_AMOUNT_LESS_15000 });

    loanController.calculateAPR(request, res);

    expect(responseJsonSpyOn).toHaveBeenCalledWith(
      LOAN_60_MONTHS_MINIMUM_AMOUNT_RESPONSE
    );

    expect(responseStatusSpyOn).toHaveBeenLastCalledWith(400);
  });

  it("Should validate the maximum loan for 700 or above credit score", async () => {
    Object.assign(request, { body: MAXIMUM_AMOUNT_700_CREDIT_SCORE });

    loanController.calculateAPR(request, res);

    expect(responseJsonSpyOn).toHaveBeenCalledWith(
      CREDIT_SCORE_700_MAXIMUM_AMOUNT_RESPONSE
    );

    expect(responseStatusSpyOn).toHaveBeenCalledWith(400);
  });

  it("Should validate the maximum loan for credit score between 600 and 699", async () => {
    Object.assign(request, { body: MAXIMUM_AMOUNT_600_699_CREDIT_SCORE });

    loanController.calculateAPR(request, res);

    expect(responseJsonSpyOn).toHaveBeenCalledWith(
      CREDIT_SCORE_600_699_MAXIMUM_AMOUNT_RESPONSE
    );
    expect(responseStatusSpyOn).toHaveBeenCalledWith(400);
  });

  it("Should validate the maximum loan for less than 600 credit score", async () => {
    Object.assign(request, { body: MAXIMUM_AMOUNT_LESS_600_CREDIT_SCORE });

    loanController.calculateAPR(request, res);

    expect(responseJsonSpyOn).toHaveBeenCalledWith(
      CREDIT_SCORE_LESS_600_MAXIMUM_AMOUNT_RESPONSE
    );
    expect(responseStatusSpyOn).toHaveBeenCalledWith(400);
  });

  it("Should return an error when something is invalid", async () => {
    const calculateAprErrorSpy = jest.spyOn(
      LoanService.prototype,
      "calculateApr"
    );
    Object.assign(request, {
      body: SUCCESSFUL_BODY,
    });

    calculateAprErrorSpy.mockImplementation(() => {
      throw new Error();
    });

    loanController.calculateAPR(request, res);
    expect(responseJsonSpyOn).toHaveBeenCalledWith("Something went wrong");
    expect(responseStatusSpyOn).toHaveBeenCalledWith(500);
  });

  it("Should return a valid rate", () => {
    Object.assign(request, {
      body: SUCCESSFUL_BODY,
    });

    loanController.calculateAPR(request, res);
    expect(responseJsonSpyOn).toHaveBeenCalledWith("Your rate is 4.75%");
    expect(responseStatusSpyOn).toHaveBeenCalledWith(200);
  });

  it("Should validate the loan amount input", () => {
    Object.assign(request, {
      body: WRONG_LOAN_AMOUNT_FORMAT,
    });

    loanController.calculateAPR(request, res);
    expect(responseJsonSpyOn).toHaveBeenCalledWith("Amount must be a number");
    expect(responseStatusSpyOn).toHaveBeenCalledWith(400);
  });

  it("Should validate the loan term input", () => {
    Object.assign(request, {
      body: WRONG_LOAN_TERM_FORMAT,
    });

    loanController.calculateAPR(request, res);
    expect(responseJsonSpyOn).toHaveBeenCalledWith(
      "Loan term must be a string"
    );
    expect(responseStatusSpyOn).toHaveBeenCalledWith(400);
  });

  it("Should validate the credit score input", () => {
    Object.assign(request, {
      body: WRONG_CREDIT_SCORE_FORMAT,
    });

    loanController.calculateAPR(request, res);
    expect(responseJsonSpyOn).toHaveBeenCalledWith(
      "Credit score must be a number"
    );
    expect(responseStatusSpyOn).toHaveBeenCalledWith(400);
  });

  it("Should validate the vehicle year input", () => {
    Object.assign(request, {
      body: WRONG_VEHICLE_YEAR_FORMAT,
    });

    loanController.calculateAPR(request, res);
    expect(responseJsonSpyOn).toHaveBeenCalledWith(
      "Vehicle year must be a number"
    );
    expect(responseStatusSpyOn).toHaveBeenCalledWith(400);
  });

  it("Should validate the vehicle mileage input", () => {
    Object.assign(request, {
      body: WRONG_VEHICLE_MILEAGE_FORMAT,
    });

    loanController.calculateAPR(request, res);
    expect(responseJsonSpyOn).toHaveBeenCalledWith(
      "Vehicle mileage must be a number"
    );
    expect(responseStatusSpyOn).toHaveBeenCalledWith(400);
  });
});
