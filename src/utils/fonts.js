import localFont from "next/font/local"

/**
 * Initializes the Overused Grotesk font.
 * @type {import("next/font/local").LocalFont}
 */
export const Overused_Grotesk_init = localFont({
  src: [
    {
      path: "../../public/fonts/OverusedGrotesk-VF.ttf",
    }
  ],
  display: "block",
  variable: "--font-overused_grotesk",
})

/**
 * The Overused Grotesk font.
 * @type {import("next/font/local").LocalFont}
 */
export const Overused_Grotesk = Overused_Grotesk_init