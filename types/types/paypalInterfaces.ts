export interface PaypalCheckoutResponseInterface {
    success: boolean
    data: PaypalCheckoutResponseData
  }
  
  export interface PaypalCheckoutResponseData {
    creditCardVerification: any
    transaction: any
    plan: any
    subscription: any
    errors: any
    parameters: any
    message: any
    target: PaypalTarget
  }
  
  export interface PaypalTarget {
    id: string
    addOns: any[]
    amount: number
    avsErrorResponseCode: any
    avsPostalCodeResponseCode: string
    avsStreetAddressResponseCode: string
    billingAddress: PaypalBillingAddress
    channel: any
    createdAt: string
    creditCard: PaypalCreditCard
    currencyIsoCode: string
    customerDetails: PaypalCustomerDetails
    cvvResponseCode: string
    descriptor: PaypalDescriptor
    discounts: any[]
    disputes: any[]
    gatewayRejectionReason: number
    graphQLId: string
    merchantAccountId: string
    orderId: string
    planId: any
    processedWithNetworkToken: boolean
    processorAuthorizationCode: any
    processorResponseType: number
    processorResponseCode: string
    processorResponseText: string
    processorSettlementResponseCode: string
    processorSettlementResponseText: string
    additionalProcessorResponse: any
    networkResponseCode: any
    networkResponseText: any
    voiceReferralNumber: any
    purchaseOrderNumber: any
    recurring: boolean
    refundedTransactionId: any
    refundIds: any[]
    partialSettlementTransactionIds: any[]
    authorizedTransactionId: any
    settlementBatchId: string
    shippingAddress: PaypalShippingAddress
    escrowStatus: number
    status: number
    statusHistory: PaypalStatusHistory[]
    authorizationAdjustments: any[]
    subscriptionId: any
    subscriptionDetails: PaypalSubscriptionDetails
    taxAmount: any
    taxExempt: boolean
    type: number
    updatedAt: string
    customFields: PaypalCustomFields
    serviceFeeAmount: any
    disbursementDetails: PaypalDisbursementDetails
    applePayDetails: any
    androidPayDetails: any
    payPalDetails: PayPalDetails
    payPalHereDetails: any
    localPaymentDetails: any
    venmoAccountDetails: any
    usBankAccountDetails: any
    visaCheckoutCardDetails: any
    samsungPayCardDetails: any
    paymentInstrumentType: number
    riskData: any
    threeDSecureInfo: any
    facilitatedDetails: any
    facilitatorDetails: any
    scaExemptionRequested: any
    discountAmount: any
    shippingAmount: any
    shipsFromPostalCode: any
    networkTransactionId: any
    authorizationExpiresAt: string
    retrievalReferenceNumber: any
    acquirerReferenceNumber: any
    installmentCount: any
    installments: any[]
    refundedInstallments: any[]
  }
  
  export interface PaypalBillingAddress {
    id: any
    customerId: any
    firstName: any
    lastName: any
    company: any
    streetAddress: any
    extendedAddress: any
    locality: any
    region: any
    postalCode: any
    countryCodeAlpha2: string
    countryCodeAlpha3: string
    countryCodeNumeric: string
    countryName: string
    phoneNumber: any
    createdAt: any
    updatedAt: any
  }
  
  export interface PaypalCreditCard {
    bin: any
    cardholderName: any
    cardType: number
    createdAt: any
    customerId: any
    isDefault: any
    isVenmoSdk: boolean
    isExpired: any
    isNetworkTokenized: boolean
    customerLocation: number
    lastFour: any
    uniqueNumberIdentifier: any
    subscriptions: any[]
    token: any
    updatedAt: any
    billingAddress: PaypalBillingAddress2
    expirationMonth: any
    expirationYear: any
    prepaid: number
    payroll: number
    debit: number
    commercial: number
    healthcare: number
    durbinRegulated: number
    imageUrl: string
    verification: any
    accountType: any
    countryOfIssuance: string
    issuingBank: string
    productId: string
    expirationDate: string
    maskedNumber: string
  }
  
  export interface PaypalBillingAddress2 {
    id: any
    customerId: any
    firstName: any
    lastName: any
    company: any
    streetAddress: any
    extendedAddress: any
    locality: any
    region: any
    postalCode: any
    countryCodeAlpha2: any
    countryCodeAlpha3: any
    countryCodeNumeric: any
    countryName: any
    phoneNumber: any
    createdAt: any
    updatedAt: any
  }
  
  export interface PaypalCustomerDetails {
    id: any
    firstName: string
    lastName: string
    company: any
    email: string
    phone: string
    fax: any
    website: any
  }
  
  export interface PaypalDescriptor {
    name: any
    phone: any
    url: any
  }
  
  export interface PaypalShippingAddress {
    id: any
    customerId: any
    firstName: string
    lastName: string
    company: any
    streetAddress: any
    extendedAddress: string
    locality: string
    region: string
    postalCode: string
    countryCodeAlpha2: any
    countryCodeAlpha3: any
    countryCodeNumeric: any
    countryName: any
    phoneNumber: any
    createdAt: any
    updatedAt: any
  }
  
  export interface PaypalStatusHistory {
    amount: number
    status: number
    timestamp: string
    source: number
    user: string
  }
  
  export interface PaypalSubscriptionDetails {
    billingPeriodEndDate: any
    billingPeriodStartDate: any
  }
  
  export interface PaypalCustomFields {}
  
  export interface PaypalDisbursementDetails {
    settlementAmount: any
    settlementCurrencyIsoCode: any
    settlementCurrencyExchangeRate: any
    fundsHeld: any
    success: any
    disbursementDate: any
  }
  
  export interface PayPalDetails {
    payerEmail: string
    paymentId: string
    authorizationId: string
    token: any
    imageUrl: string
    debugId: string
    payeeId: any
    payeeEmail: any
    customField: any
    payerId: string
    payerFirstName: string
    payerLastName: string
    payerStatus: string
    sellerProtectionStatus: string
    captureId: string
    refundId: any
    transactionFeeAmount: string
    transactionFeeCurrencyIsoCode: string
    refundFromTransactionFeeAmount: any
    refundFromTransactionFeeCurrencyIsoCode: any
    description: any
    implicitlyVaultedPaymentMethodToken: any
    implicitlyVaultedPaymentMethodGlobalId: any
    billingAgreementId: any
    taxId: any
    taxIdType: any
  }
  