import express from "express";
import { LoanController } from "./controllers/loanController";

const loanController = new LoanController();

const app = express();

app.use(express.json());

app.post("/loan", loanController.CalculateAPR.bind(loanController));

export default app;
