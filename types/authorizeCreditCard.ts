const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();
export interface AuthoriseCreditCardInterface {
  clientCode: string;
  amount: number;
  card: CardInterface;
  billTo: BillToInterface;
  captchaToken: string;
}

export interface CardInterface {
  number: string;
  expirationMonth: number;
  expirationYear: number;
}

export interface BillToInterface {
  firstName: string;
  lastName: string;
  address1: string;
  city: string;
  stateCode: string;
  postalCode: string;
  country: string;
  email: string;
  phoneNumber: string;
}

export interface AuthorisedCardResponseInterface {
  success: boolean;
  data: Data;
  errorMessage: any;
}

export interface Data {
  message: string;
  authorizationTransactionId: string;
}

export const validateCardnumber = (number: string) => {
  const cardregex = /^\d{16}$/;
  if (number.trim().length === 0) {
    return 0;
  } else if (cardregex.test(number) === false) {
    return false;
  } else {
    return true;
  }
};
export const validateCardNumberMessage = (number: string) => {
  if (validateCardnumber(number) === 0) {
    return "Card number is required";
  } else if (validateCardnumber(number) === false) {
    return "Please enter a valid card number";
  } else {
    return "";
  }
};
export const validateCardExp = (month: number, year: number) => {
  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return false;
  } else {
    return true;
  }
};
export const validateCardExpMessage = (month: number, year: number) => {
  if (validateCardExp(month, year) === false) {
    return "Please enter a valid date";
  } else {
    return "";
  }
};
export const validateCVV = (cvv: string) => {
  const cvvRegex = /^\d{3,4}$/;
  if (cvv.trim().length === 0) {
    return 0;
  } else if (cvvRegex.test(cvv) === false) {
    return false;
  } else {
    return true;
  }
};
export const validateCvvMessage = (cvv: string) => {
  if (validateCVV(cvv) === 0) {
    return "CVN number is required";
  } else if (validateCVV(cvv) === false) {
    return "Please enter a valid CVN";
  } else {
    return "";
  }
};
export const validateAuthorizationForm = (
  number: string,
  cvn: string,
  expMonth: number,
  expYear: number
) => {
  if (
    validateCardnumber(number) === 0 ||
    validateCardnumber(number) === false ||
    validateCardExp(expMonth, expYear) === false ||
    validateCVV(cvn) === 0 ||
    validateCVV(cvn) === false
  ) {
    return false;
  } else {
    return true;
  }
};
