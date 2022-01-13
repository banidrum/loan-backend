import app from "../../src/app";
import supertest from "supertest";

describe("It tests the application routes", () => {
  it("POST /loan", async () => {
    const response = await supertest(app)
      .post("/loan")
      .expect("Content-Type", /json/)
      .send({
        loanAmount: 10000,
        loanTerm: "36 months",
        personCreditScore: 700,
        vehicleYear: 2015,
        vehicleMileage: 10000,
      })
      .expect("Content-Type", /json/);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual("Your rate is 4.75%");
  });

  it("POST /loan must fail due to amount", async () => {
    const response = await supertest(app)
      .post("/loan")
      .expect("Content-Type", /json/)
      .send({
        loanAmount: "Force failure",
        loanTerm: "36 months",
        personCreditScore: 700,
        vehicleYear: 2015,
        vehicleMileage: 10000,
      })
      .expect("Content-Type", /json/);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Amount must be a number");
  });

  it("POST /loan must fail due to loan term", async () => {
    const response = await supertest(app)
      .post("/loan")
      .expect("Content-Type", /json/)
      .send({
        loanAmount: 10000,
        loanTerm: { key: 12 },
        personCreditScore: "Wrong credit score",
        vehicleYear: 2015,
        vehicleMileage: 10000,
      })
      .expect("Content-Type", /json/);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Loan term must be a string");
  });

  it("POST /loan must fail due to credit score", async () => {
    const response = await supertest(app)
      .post("/loan")
      .expect("Content-Type", /json/)
      .send({
        loanAmount: 10000,
        loanTerm: "36 months",
        personCreditScore: "Wrong credit score",
        vehicleYear: 2015,
        vehicleMileage: 10000,
      })
      .expect("Content-Type", /json/);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Credit score must be a number");
  });

  it("POST /loan must fail due to vehicle year", async () => {
    const response = await supertest(app)
      .post("/loan")
      .expect("Content-Type", /json/)
      .send({
        loanAmount: 10000,
        loanTerm: "36 months",
        personCreditScore: 700,
        vehicleYear: "Wrong year",
        vehicleMileage: 10000,
      })
      .expect("Content-Type", /json/);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Vehicle year must be a number");
  });

  it("POST /loan must fail due to vehicle mileage", async () => {
    const response = await supertest(app)
      .post("/loan")
      .expect("Content-Type", /json/)
      .send({
        loanAmount: 10000,
        loanTerm: "36 months",
        personCreditScore: 700,
        vehicleYear: 2015,
        vehicleMileage: "Miscalculated mileage",
      })
      .expect("Content-Type", /json/);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Vehicle mileage must be a number");
  });
});
