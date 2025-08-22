export interface spotPrices {
  timestamp: string;
  spotTime: string;
  platinumChangePercent: number;
  goldAsk: number;
  platinumChange: number;
  silverAsk: number;
  silverBid: number;
  silverChangePercent: number;
  goldBid: number;
  platinumAsk: number;
  goldChangePercent: number;
  platinumBid: number;
  goldChange: number;
  palladiumBid: number;
  palladiumChangePercent: number;
  activeFeed: null;
  palladiumChange: number;
  areStale: number;
  silverChange: number;
  palladiumAsk: number;
  silverlowspot: number;
  silverhighspot: number;
  goldlowspot: number;
  goldhighspot: number;
  platinumlowspot: number;
  platinumhighspot: number;
  palladiumlowspot: number;
  palladiumhighspot: number;
}

export type MetalType = "silver" | "gold" | "platinum" | "palladium" | null;
