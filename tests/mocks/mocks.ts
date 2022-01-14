export const SUCCESSFUL_BODY = {
  loanAmount: 10000,
  loanTerm: "36 months",
  personCreditScore: 700,
  vehicleYear: 2015,
  vehicleMileage: 10000,
};

export const SUCCESSFUL_RESPONSE = "Your rate is 4.75%";

export const LESS_THAN_600_CREDIT_SCORE_BODY = {
  loanAmount: 10000,
  loanTerm: "36 months",
  personCreditScore: 590,
  vehicleYear: 2015,
  vehicleMileage: 10000,
};

export const SUCCESSFUL_600_RESPONSE = "Your rate is 12.75%";

export const CREDIT_SCORE_BETWEEN_600_699_BODY = {
  loanAmount: 10000,
  loanTerm: "36 months",
  personCreditScore: 650,
  vehicleYear: 2015,
  vehicleMileage: 10000,
};

export const SUCCESSFUL_BETWEEN_600_699_RESPONSE = "Your rate is 5.75%";

export const VEHICLE_YEAR_BEFORE_2O15 = {
  loanAmount: 10000,
  loanTerm: "36 months",
  personCreditScore: 700,
  vehicleYear: 2014,
  vehicleMileage: 10000,
};

export const SUCCESSFUL_VEHICLE_YEAR_RATE_RESPONSE = "Your rate is 5.75%";

export const VEHICLE_MILEAGE_HIGHER_100000 = {
  loanAmount: 10000,
  loanTerm: "36 months",
  personCreditScore: 700,
  vehicleYear: 2015,
  vehicleMileage: 100000,
};

export const SUCCESSFUL_VEHICLE_MILEAGE_RATE_RESPONSE = "Your rate is 6.75%";

export const MINIMUM_AMOUNT_LESS_5000 = {
  loanAmount: 1000,
  loanTerm: "36 months",
  personCreditScore: 700,
  vehicleYear: 2015,
  vehicleMileage: 10000,
};

export const LOAN_36_MONTHS_MINIMUM_AMOUNT_RESPONSE =
  "The minimum loan amount for 36 months is $ 5000";

export const MINIMUM_AMOUNT_LESS_10000 = {
  loanAmount: 1000,
  loanTerm: "48 months",
  personCreditScore: 700,
  vehicleYear: 2015,
  vehicleMileage: 10000,
};

export const LOAN_48_MONTHS_MINIMUM_AMOUNT_RESPONSE =
  "The minimum loan amount for 48 months is $ 10000";

export const MINIMUM_AMOUNT_LESS_15000 = {
  loanAmount: 1000,
  loanTerm: "60 months",
  personCreditScore: 700,
  vehicleYear: 2015,
  vehicleMileage: 10000,
};

export const LOAN_60_MONTHS_MINIMUM_AMOUNT_RESPONSE =
  "The minimum loan amount for 60 months is $ 15000";

export const MAXIMUM_AMOUNT_700_CREDIT_SCORE = {
  loanAmount: 200000,
  loanTerm: "36 months",
  personCreditScore: 700,
  vehicleYear: 2015,
  vehicleMileage: 10000,
};

export const CREDIT_SCORE_700_MAXIMUM_AMOUNT_RESPONSE =
  "The maximum loan amount for a credit score equal to or above 700 is $ 100,000";

export const MAXIMUM_AMOUNT_600_699_CREDIT_SCORE = {
  loanAmount: 100000,
  loanTerm: "36 months",
  personCreditScore: 680,
  vehicleYear: 2015,
  vehicleMileage: 10000,
};

export const CREDIT_SCORE_600_699_MAXIMUM_AMOUNT_RESPONSE =
  "The maximum loan amount for a credit score between 600 and 699 is $ 75,000";

export const MAXIMUM_AMOUNT_LESS_600_CREDIT_SCORE = {
  loanAmount: 100000,
  loanTerm: "36 months",
  personCreditScore: 575,
  vehicleYear: 2015,
  vehicleMileage: 10000,
};

export const CREDIT_SCORE_LESS_600_MAXIMUM_AMOUNT_RESPONSE =
  "The maximum loan amount for a credit score below 600 is $ 50,000";

export const WRONG_LOAN_AMOUNT_FORMAT = {
  loanAmount: "Force failure",
  loanTerm: "36 months",
  personCreditScore: 700,
  vehicleYear: 2015,
  vehicleMileage: 10000,
};

export const WRONG_LOAN_TERM_FORMAT = {
  loanAmount: 10000,
  loanTerm: { key: 12 },
  personCreditScore: 700,
  vehicleYear: 2015,
  vehicleMileage: 10000,
};

export const WRONG_CREDIT_SCORE_FORMAT = {
  loanAmount: 10000,
  loanTerm: "36 months",
  personCreditScore: "Wrong credit score",
  vehicleYear: 2015,
  vehicleMileage: 10000,
};

export const WRONG_VEHICLE_YEAR_FORMAT = {
  loanAmount: 10000,
  loanTerm: "36 months",
  personCreditScore: 700,
  vehicleYear: "Wrong vehicle year",
  vehicleMileage: 10000,
};

export const WRONG_VEHICLE_MILEAGE_FORMAT = {
  loanAmount: 10000,
  loanTerm: "36 months",
  personCreditScore: 700,
  vehicleYear: 2015,
  vehicleMileage: "Wrong vehicle mileage",
};
