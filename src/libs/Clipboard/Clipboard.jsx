"use client"

import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

export default function Clipboard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <CopyToClipboard text="hello@huyng.xyz" onCopy={handleCopy}>
      <span className="leading-tight text-light-gray font-normal cursor-pointer hover:underline">
        {copied ? "Copied to clipboard!" : "hello@huyng.xyz"}
      </span>
    </CopyToClipboard>
  );
}
