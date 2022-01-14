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
} from "./mocks/mocks";

const loanController = new LoanController();

let request: any;
let res: any;

describe("This suite tests the Loan Controller", () => {
  beforeEach(() => {
    request = new Request();
    res = new Response();
  });

  it("Should validate the minimum loan for 36 months", async () => {
    Object.assign(request, { body: MINIMUM_AMOUNT_LESS_5000 });

    const mockedResponse = jest.spyOn(res, "json");

    loanController.calculateAPR(request, res);

    expect(mockedResponse).toHaveBeenCalledWith(
      LOAN_36_MONTHS_MINIMUM_AMOUNT_RESPONSE
    );
  });

  it("Should validate the minimum loan for 48 months", async () => {
    Object.assign(request, { body: MINIMUM_AMOUNT_LESS_10000 });

    const mockedResponse = jest.spyOn(res, "json");

    loanController.calculateAPR(request, res);

    expect(mockedResponse).toHaveBeenCalledWith(
      LOAN_48_MONTHS_MINIMUM_AMOUNT_RESPONSE
    );
  });

  it("Should validate the minimum loan for 60 months", async () => {
    Object.assign(request, { body: MINIMUM_AMOUNT_LESS_15000 });

    const mockedResponse = jest.spyOn(res, "json");

    loanController.calculateAPR(request, res);

    expect(mockedResponse).toHaveBeenCalledWith(
      LOAN_60_MONTHS_MINIMUM_AMOUNT_RESPONSE
    );
  });

  it("Should validate the maximum loan for 700 or above credit score", async () => {
    Object.assign(request, { body: MAXIMUM_AMOUNT_700_CREDIT_SCORE });

    const mockedResponse = jest.spyOn(res, "json");

    loanController.calculateAPR(request, res);

    expect(mockedResponse).toHaveBeenCalledWith(
      CREDIT_SCORE_700_MAXIMUM_AMOUNT_RESPONSE
    );
  });

  it("Should validate the maximum loan for credit score between 600 and 699", async () => {
    Object.assign(request, { body: MAXIMUM_AMOUNT_600_699_CREDIT_SCORE });

    const mockedResponse = jest.spyOn(res, "json");

    loanController.calculateAPR(request, res);

    expect(mockedResponse).toHaveBeenCalledWith(
      CREDIT_SCORE_600_699_MAXIMUM_AMOUNT_RESPONSE
    );
  });

  it("Should validate the maximum loan for less than 600 credit score", async () => {
    Object.assign(request, { body: MAXIMUM_AMOUNT_LESS_600_CREDIT_SCORE });

    const mockedResponse = jest.spyOn(res, "json");

    loanController.calculateAPR(request, res);

    expect(mockedResponse).toHaveBeenCalledWith(
      CREDIT_SCORE_LESS_600_MAXIMUM_AMOUNT_RESPONSE
    );
  });

  it("Should return an error when something is invalid", async () => {
    const calculateAPRSpy = jest.spyOn(res, "json");
    const calculateAPRErrorSpy = jest.spyOn(loanController, "calculateAPR");

    try {
      calculateAPRSpy.mockImplementationOnce(() => {});

      calculateAPRErrorSpy.mockImplementation(() => {
        throw new Error();
      });
      loanController.calculateAPR(request, res);
    } catch (err) {
      console.log("Entrou");
      expect(calculateAPRErrorSpy).toHaveBeenCalledWith("Something went wrong");
    }
  });
});
