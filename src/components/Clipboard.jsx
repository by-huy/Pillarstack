'use client';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

/**
 * Component that renders a clickable text span which copies an email address to the clipboard.
 * @returns {JSX.Element} The rendered component.
 */
export default function Clipboard() {
  const [copied, setCopied] = useState(false);

  /**
   * Event handler for the copy action.
   * Sets the copied state to true and resets it after 2 seconds.
   */
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <CopyToClipboard text="hello@huyng.xyz" onCopy={handleCopy}>
      <span className="leading-tight text-light-gray font-normal cursor-pointer hover:underline">
        {copied ? 'Copied to clipboard!' : 'hello@huyng.xyz'}
      </span>
    </CopyToClipboard>
  );
}
