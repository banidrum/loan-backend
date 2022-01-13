import { Request } from "express";
import Loan from "../interfaces/Loan";

export const validateInput = (req: Request) => {
  const loanBody = req.body;

  if (isNaN(loanBody.loanAmount)) {
    return "Amount must be a number";
  }

  if (typeof loanBody.loanTerm !== "string") {
    return "Loan term must be a string";
  }

  if (isNaN(loanBody.personCreditScore)) {
    return "Credit score must be a number";
  }

  if (isNaN(loanBody.vehicleYear)) {
    return "Vehicle year must be a number";
  }

  if (isNaN(loanBody.vehicleMileage)) {
    return "Vehicle mileage must be a number";
  }

  return "";
};

export const validateMinimumAndMaximumLoanAmount = (loan: Loan): string => {
  const { loanAmount, loanTerm, personCreditScore } = loan;

  if (loanAmount < 5000 && loanTerm === "36 months") {
    return "The minimum loan amount for 36 months is $ 5000";
  }

  if (loanAmount < 10000 && loanTerm === "48 months") {
    return "The minimum loan amount for 48 months is $ 10000";
  }

  if (loanAmount < 15000 && loanTerm === "60 months") {
    return "The minimum loan amount for 60 months is $ 15000";
  }

  if (personCreditScore >= 700 && loanAmount >= 100000) {
    return "The maximum loan amount for a credit score equal to or above 700 is $ 100,000";
  }

  if (
    personCreditScore >= 600 &&
    personCreditScore <= 699 &&
    loanAmount >= 75000
  ) {
    return "The maximum loan amount for a credit score between 600 and 699 is $ 75,000";
  }

  if (personCreditScore < 600 && loanAmount >= 50000) {
    return "The maximum loan amount for a credit score below 600 is $ 50,000";
  }

  return "";
};
