import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		keyframes: {
  			runningTime: {
  				'0%': {
  					width: '0%'
  				},
  				'100%': {
  					width: '100%'
  				}
  			}
  		},
  		animation: {
  			runningTime: 'runningTime 7s linear forwards'
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
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
