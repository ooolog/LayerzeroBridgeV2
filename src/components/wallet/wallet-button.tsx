"use client";

import { type FC } from "react";
import { WalletCards } from "lucide-react";
import {
  ConnectButton,
  darkTheme,
  lightTheme,
  useActiveAccount,
} from "thirdweb/react";
import { shortenAddress } from "thirdweb/utils";
import { createWallet } from "thirdweb/wallets";

import { Button } from "../ui/button";

import { useColorMode } from "~/hooks/use-color-mode";
import { cn } from "~/lib/utils";
import { client } from "~/config/thirdweb";
import { mainnets, toThirdwebChain } from "~/config/chains";

export interface WalletButtonProps {
  className?: string;
}

export const WalletButton: FC<WalletButtonProps> = ({ className }) => {
  const account = useActiveAccount();
  const { isLight } = useColorMode();

  return (
    <div
      className={cn(
        "flex max-h-9 w-fit items-center overflow-hidden font-mono",
        className,
      )}
    >
      <ConnectButton
        client={client}
        autoConnect
        wallets={[
          createWallet("io.metamask"),
          createWallet("com.coinbase.wallet"),
          createWallet("me.rainbow"),
          createWallet("walletConnect"),
          createWallet("io.rabby"),
          createWallet("io.zerion.wallet"),
        ]}
        chains={[...mainnets].map(toThirdwebChain)}
        theme={
          isLight
            ? lightTheme({
                colors: {
                  modalBg: "hsl(var(--background))",
                  accentButtonBg: "hsl(var(--primary))",
                  accentButtonText: "hsl(var(--primary-foreground))",
                  accentText: "hsl(var(--primary))",
                },
              })
            : darkTheme({
                colors: {
                  modalBg: "hsl(var(--background))",
                  accentButtonBg: "hsl(var(--primary))",
                  accentButtonText: "hsl(var(--primary-foreground))",
                  accentText: "hsl(var(--primary))",
                },
              })
        }
        connectButton={{
          label: "CONNECT",
          style: {},
        }}
        detailsButton={{
          render: () => {
            return (
              <Button variant="outline" className="gap-2 p-2 text-xs">
                <WalletCards className="size-4" />
                {shortenAddress(account?.address ?? "", 4)}
              </Button>
            );
          },
        }}
        connectModal={{
          showThirdwebBranding: false,
        }}
      />
    </div>
  );
};
