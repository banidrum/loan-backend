import { Request, Response } from "express";
import Loan from "../interfaces/Loan";
import { LoanService } from "../services/loanService";

const loanService = new LoanService();

export class LoanController {
  public CalculateAPR(req: Request, res: Response) {
    try {
      const loan = req.body as Loan;

      this.checkInput(req);

      const rate = loanService.calculateApr(loan);
      res.status(200).json(rate);
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }

  private checkInput(req: Request) {
    const loanBody = req.body;

    if (isNaN(loanBody.loanAmount)) {
      throw new Error("Amount must be a number");
    }

    if (typeof loanBody.loanTerm !== "string") {
      throw new Error("Loan term must be a string");
    }

    if (isNaN(loanBody.personCreditScore)) {
      throw new Error("Credit score must be a number");
    }

    if (isNaN(loanBody.vehicleYear)) {
      throw new Error("Vehicle year be a number");
    }

    if (isNaN(loanBody.vehicleMileage)) {
      throw new Error("Vehicle mileage be a number");
    }
  }
}
