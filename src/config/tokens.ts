import { ethereum, bsc } from "./chains/mainnet";

export interface Token {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  adapterAddress?: string;
}

export const ethereumTokenHEY = {
  address: "0x95C5546337954D993590cF6Ad9276cD11407d750",
  name: "HeyToken",
  symbol: "HEY",
  decimals: 18,
  adapterAddress: "0xae2c52aa3ae7d4026afa8094abf0c8e014bec2d7",
};

export const ethereumTokenSaaS = {
  address: "0x350e52BB0F874f3B558A3679aac24268Ee37A699",
  name: "SaaSGo",
  symbol: "SASS",
  decimals: 18,
  adapterAddress: "0x6191e59581af30c647c5d079b7f3b9e760df589d",
};

export const bscTokenHEY = {
  address: "0xAe2c52aa3ae7D4026AFa8094ABf0C8e014bec2D7",
  name: "HeyToken",
  symbol: "HEY",
  decimals: 18,
};

export const bscTokenSaaS = {
  address: "0x350e52BB0F874f3B558A3679aac24268Ee37A699",
  name: "SaaSGo",
  symbol: "SASS",
  decimals: 18,
};

// SaaSGo Proxy address
export const adapterAddress = "0xae2c52aa3ae7d4026afa8094abf0c8e014bec2d7";

export const tokensByNetwork: Record<number, Token[]> = {
  [ethereum.id]: [ethereumTokenSaaS],
  [bsc.id]: [bscTokenSaaS],
};
