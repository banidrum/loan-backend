export const ratesFor700CreditScore = (loanTerm: string) =>
  ({
    "36 months": 4.75,
    "48 months": 5,
    "60 months": 5.5,
  }[loanTerm] as number);

export const ratesBetween600And699CreditScore = (loanTerm: string) =>
  ({
    "36 months": 5.75,
    "48 months": 6,
    "60 months": 6.65,
  }[loanTerm] as number);

export const ratesForLess600CreditScore = (loanTerm: string) =>
  ({
    "36 months": 12.75,
    "48 months": 13.25,
    "60 months": "N/A",
  }[loanTerm] as number);
