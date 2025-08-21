export interface registerUserInterface {
  id: number;
  firstName: string;
  lastName: string;
  mobNo: string;
  emailId: string;
  password: string;
  isActive: boolean;
  createdDate: string;
  lastLoginDate: string;
  profilePhoto: string;
  iswholeSaler: boolean;
  token: string;
  screenSize: string;
  sessionID: string;
  isGuest: boolean;
  isPasswordSetOnNewSystem: boolean;
  shippingAddressId: number;
  isBlackList: boolean;
  aliasName: null;
  allowSplitOrders: boolean;
  isRedditor: boolean;
  allowCombineOrder: boolean;
  requiredAuthorized: boolean;
}

export interface addressValidation {
  addressId: number;
  customerId: number;
  addressType: string;
  profilePhoto?: string;
  streetAddress1: string;
  streetAddress2: string;
  email?: string;
  phone?: string;
  country: number;
  zip: string;
  state: number;
  city: string;
  stateName?: string;
  stateCode?: string;
  shippingName: string;
  accountNumber: string | null;
  depositoryName?: string;
  shippingProfile?: string;
}

export interface checkoutAsGuestInterface {
  addressId: number;
  addressType: string;
  city: string;
  country: number;
  countryCode: string;
  email: string;
  firstName: string;
  isGuest: boolean;
  lastName: string;
  latitude: number;
  longitude: number;
  orderNote: string | null;
  phoneNo: string;
  shippingName: string;
  shippingProfile?: string;
  state: number;
  stateCode: string;
  stateName: string;
  streetAddress1: string;
  streetAddress2: string;
  zip: string;
}

export interface checkoutAsGuestResponseInterface {
  id: number;
  firstName: string | null;
  lastName: string | null;
  mobNo: string | null;
  emailId: string | null;
  password: null;
  isActive: boolean;
  createdDate: string | null;
  lastLoginDate: string | null;
  latitude: number;
  longitude: number;
  profilePhoto: string | null;
  iswholeSaler: boolean;
  token: string | null;
  screenSize: string | null;
  sessionID: string | null;
  isGuest: boolean;
  isPasswordSetOnNewSystem: boolean;
  shippingAddressId: number;
  isBlackList: boolean;
  aliasName: string | null;
  allowSplitOrders: boolean;
  isRedditor: boolean;
  allowCombineOrder: boolean;
  requiredAuthorized: boolean;
}

export interface customerDetailsInterface {
  accountNumber: string | null;
  addressId: number;
  addressType: string | null;
  allowCombineOrder: boolean;
  allowSplitOrders: boolean;
  boldUserName: string | null;
  city: string | null;
  country: number;
  countryCode: string | null;
  countryName: string | null;
  customerType: string | null;
  depositoryName: string | null;
  echeckCreditLimit: number;
  emailId: string | null;
  favCoinRoundSeries: string | null;
  firstName: string | null;
  isActive: boolean;
  isCustomerSupport: boolean;
  isDefaultAddress: boolean;
  isSubscribed: boolean;
  isVerified: boolean;
  isWholeSaler: boolean;
  lastName: string | null;
  metalBarsInterest: string | null;
  metalPreference: string | null;
  mobNo: string;
  profilePhoto: string;
  shippingName: string | null;
  shippingProfile: string | null;
  state: number;
  stateName: string | null;
  stateType: string | null;
  statecode: string | null;
  streetAddress1: string | null;
  streetAddress2: string | null;
  tagline: string | null;
  zip: string | null;
}

export interface userFeedbackInterface {
  firstName: string;
  lastName: string;
  emailID: string;
  phone: string;
  message: string;
  messageCategories: string;
}

export interface guessTheSpotInterface {
  quizQuestionIdCSV: string;
  customerId: number;
  answersCSV: string;
  isSubscription: boolean;
  quizId: number;
  captchaToken:string
}

export interface usernickName {
  nickName :string
}

export interface QuizDetail {
  questions: string;
  questionDisplayTime: string;
  id : number
}

export interface QuizSummary {
  isVerified: boolean;
  canPlayAfter: string;
  currentDateTime :string;
  questionDisplayTime: string;
}

export interface GameTime {
  currentDateTime:string,
  winnerDecidingTs: string,
  freezeTheGame: boolean
}
export interface GetQuizInfo {
  quizDetailsList: QuizDetail[];
  quizSummary: QuizSummary[];
  metalComposition?: string;  // Add this line if metalComposition is part of QuizDetail
  pauseTheGame :GameTime[]

}
export interface CustomerPlayList {
  email : string
}

export interface QuizPlayTime {
  gameStartTime : string
  currentDateTime : string
  allCustomerAllowToPlay :boolean
  emailsOfPlayers : CustomerPlayList[]
}
  

export interface quizGameWinnerClaimeInterface {
  streetAddress1: string;
  streetAddress2: string;
  customerId: number;
  customerName: string;
  review: string;
  city: string;
  stateCode?: string;
  zip: string;
  country: number;
  state?: number;
  customerImageUrl: string;
  quizParticipantId?: number;
}

export interface AnswerDetail {
  quizQuestionId: number;
  answer: number;
  correctAnswers: number;
}

export interface DateTimeGroup {
  submittedDateTime: string;
  isClaimed: boolean;
  isMatched: boolean;
  expiryDate: string;
  priorPurchaseAmount: number;
  answerDetails: AnswerDetail[];
}

export interface getLastParticipationInterface {
  quizParticipantId: number;
  dateTimeGroups: DateTimeGroup[];
}

export interface getAllUsersLeaderBoardI {
  firstName: string
  rank: number
  silverExactMatchCnt: number
  silverApprox1cent: number
  silverApprox2cent: number
  silverApprox3cent: number
  goldExactMatchCnt: number
  goldApprox3dollar: number
  goldApprox1dollar: number
  goldApprox2dollar:number
}

export interface getMyLeaderBoardI {
  rankingDecidingTS: string
  rank: number
  silverExactMatchCnt: number
  silverApprox1cent:number,
  silverApprox2cent:number
  silverApprox3cent :number
  goldExactMatchCnt: number
  goldApprox1dollar: number
  goldApprox2dollar: number
  goldApprox3dollar: number
}

export interface rankingTs {
    id: number,
    rankingDecidingTS: string
    silverSpot :string
    goldSpot :string
}



export interface targetDates {
  targetDate :string
}

export interface getParticipationTrendsI {
  silverSpot: number
  noOfGuessesforSilver: number
  goldSpot: number
  noOfGuessesforGold: number
}

export interface Winner {
  customerName: string;
  customerImageUrl: string;
  review: string;
  prize: string;
  productName: string;
  productImageUrl: string;
  claimedRewardDate: string;
  position: number;
  guessedSpot: number;
  totalGuesses: number;
  isWinner: boolean;
  isRunnerUp : boolean;
  targetDate: string;
}
interface leaderBoardWinner {
  answer: number;
  quizQuestionId: number;
  answerCount: number;
}

export interface ParticipationWinnerData {
  leaderBoard: leaderBoardWinner[];
  yestardaysWinners :Winner[];
  lastWeekWinners: Winner[];
  lastMonthWinners: Winner[];
  winnerStatus: Winner[];
}

export interface userInfoInterface {
  preferenceMints?: string;
  preferenceProductTypeId?: string;
  preferenceMintType?: string;
  addressId: number;
  streetAddress1: string;
  streetAddress2: string;
  addressType: string;
  country: number;
  countryCode: string;
  countryName: string;
  zip: string;
  state: number;
  statecode: string;
  city: string;
  boldUserName: string;
  tagline: string;
  customerType: string;
  metalPreference: string;
  metalBarsInterest: string;
  favCoinRoundSeries: string;
  lastName: string;
  firstName: string;
  mobNo: string;
  phone?: string;
  emailId: string;
  profilePhoto: string;
  stateName: string;
  isWholeSaler: boolean;
  isSubscribed: boolean;
  isActive: boolean;
  isDefaultAddress: boolean;
  isCustomerSupport: boolean;
  shippingName: string;
  echeckCreditLimit: number;
  allowSplitOrders: boolean;
  allowCombineOrder: boolean;
  accountNumber: string;
  depositoryName: string;
  shippingProfile: string;
  stateType: string;
  isVerified: boolean;
  isWisconsinTaxFormSubmited? :boolean;
  isPreferenceUpdated?: boolean;
  preferenceJewelryNCoupon?: boolean|null;
  token?:string;
}
