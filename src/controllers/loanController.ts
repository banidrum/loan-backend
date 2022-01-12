import { Request, Response } from "express";
import Loan from "../interfaces/Loan";
import { CalculateRateService } from "../services/calculateRateService";
import { LoanService } from "../services/loanServices";

const loanService = new LoanService(new CalculateRateService());

export class LoanController {
  //   constructor(private readonly loanService: LoanService) {}
  public async CalculateAPR(req: Request, res: Response) {
    const loan = req.body as Loan;
    const rate = await loanService.CalculateApr(loan);
    res.json(`Your rate is ${rate}%`);
  }
}
