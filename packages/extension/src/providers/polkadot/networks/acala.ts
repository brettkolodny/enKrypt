import { ProviderName } from "@/types/provider";
import { NetworkNames, SignerType } from "@enkryptcom/types";
import { polkadotEncodeAddress } from "@enkryptcom/utils";
import API from "../libs/api";
import acalaAssetsHandler from "../libs/assets-handlers/acala";
import createIcon from "../libs/blockies";
import { PolkadotNodeType } from "../types";
const prefix = 10;
const acaNode: PolkadotNodeType = {
  name: NetworkNames.Acala,
  name_long: "Acala",
  homePage: "https://acala.network/",
  blockExplorerTX: "https://acala.subscan.io/extrinsic/[[txHash]]",
  blockExplorerAddr: "https://acala.subscan.io/account/[[address]]",
  isTestNetwork: false,
  currencyName: "ACA",
  icon: require("./icons/acala.svg"),
  decimals: 12,
  prefix,
  signer: [SignerType.sr25519, SignerType.ed25519],
  gradient: "#53CBC9",
  node: "wss://acala-rpc-0.aca-api.network/",
  displayAddress: (address: string) => polkadotEncodeAddress(address, prefix),
  provider: ProviderName.polkadot,
  coingeckoID: "acala",
  identicon: createIcon,
  assetsHandler: acalaAssetsHandler,
  basePath: "//",
};
acaNode.api = async () => {
  const api = new API(acaNode.node, { decimals: acaNode.decimals });
  await api.init();
  return api;
};
export default acaNode;
