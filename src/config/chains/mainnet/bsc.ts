import { EndpointId } from "@layerzerolabs/lz-definitions";

import { defineLZChain, type LayerZeroChain } from "../types";

export const bsc: LayerZeroChain = defineLZChain({
  id: 56,
  name: "BSC",
  icon: "https://icons-ckg.pages.dev/lz-scan/networks/bnb.svg",
  endpoint: EndpointId.BSC_V2_MAINNET,
  rpc: "https://binance.llamarpc.com",
  testnet: false,
});
