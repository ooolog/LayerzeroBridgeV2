"use client";

import { type FC } from "react";

import { ColorModeButton } from "./color-mode-button";

export const Footer: FC = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 w-screen border-b p-2 font-mono">
      <footer className="max-w-screen mx-auto flex w-full flex-col items-center justify-between md:flex-row">
        <p className="p-2 text-xs text-muted-foreground"></p>

        <div className="flex items-center gap-4">
          <p className="text-xs text-muted-foreground"></p>
          <ColorModeButton />
        </div>
      </footer>
    </div>
  );
};
