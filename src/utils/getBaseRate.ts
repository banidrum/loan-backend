import {
  ratesBetween600And699CreditScore,
  ratesFor700CreditScore,
  ratesForLess600CreditScore,
} from "./calculateBaseRate";

export const getBaseRateForCreditScoreLowerThan600 = (term: string) => {
  return ratesForLess600CreditScore(term);
};

export const getBaseRateForCreditScoreBetween600And699 = (term: string) => {
  return ratesBetween600And699CreditScore(term);
};

export const getBaseRateFor700CreditScore = (term: string) => {
  return ratesFor700CreditScore(term);
};
