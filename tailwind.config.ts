import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'bg-inbound': "url('/landing/inbond.jpg')",
        'bg-outbound': "url('/landing/outbound.jpg')",
        'bg-ts-connect': "url('/landing/ts-connect.jpg')",
        'bg-services': "url('/landing/services.jpg')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
        'image-pattern': "url('/landing/egypt-honeymoon.jpg')"
      },
    },
  },
  plugins: [],
} satisfies Config;
