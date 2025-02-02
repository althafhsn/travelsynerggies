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
				},
				progress: {
					'0%': { 
						transform: 'translateY(-100%) scaleY(0.3)',
						opacity: '0.5'
					  },
					  '50%': { 
						transform: 'translateY(0) scaleY(0.6)',
						opacity: '1'
					  },
					  '100%': { 
						transform: 'translateY(100%) scaleY(0.3)',
						opacity: '0.5'
					  }
				}
			},
			transformOrigin: {
				'top-bottom': '50% 0%'
			},
			animation: {
				runningTime: 'runningTime 7s linear forwards',
				progress: 'progress 1.5s ease-in-out infinite'
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
				'image-pattern': "url('/landing/egypt-honeymoon.jpg')",
				'bg-career': "url('/career/career.png')",
				'bg-blog': "url('/blog/blog6.webp')",
				'bg-blogmain': "url('/blog/blogmain.webp')",
				'bg-blog10': "url('/blog/blog10.webp')",
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