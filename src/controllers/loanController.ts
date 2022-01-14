import { Request, Response } from "express";
import { LoanService } from "../services/loanService";
import { validateInput, validateMinimumAndMaximumLoanAmount } from "../helpers";
import Loan from "../interfaces/Loan";

export class LoanController {
  private loanService: LoanService;

  constructor() {
    this.loanService = new LoanService();
  }
  public calculateAPR(req: Request, res: Response) {
    try {
      const loan = req.body as Loan;

      let validateMessage =
        validateInput(req) || validateMinimumAndMaximumLoanAmount(loan);

      if (validateMessage) {
        return res.status(400).json(validateMessage);
      }

      const rate = this.loanService.calculateApr(loan);
      return res.status(200).json(rate);
    } catch (err) {
      return res.status(500).json("Something went wrong");
    }
  }
}
