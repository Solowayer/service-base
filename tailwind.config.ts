import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		fontSize: {
			sm: ['12px', '16px'],
			md: ['14px', '20px'],
			lg: ['16px', '24px'],
			xl: ['20px', '24px'],
			'2xl': ['24px', '28px'],
			'3xl': ['32px', '36px'],
			'4xl': ['40px', '48px'],
			'5xl': ['48px', '56px']
		},
		colors: {
			transparent: 'var(--color-transparent)',
			white: 'var(--color-white)',
			black: 'var(--color-black)',
			gray: {
				50: 'var(--color-gray-50)',
				100: 'var(--color-gray-100)',
				200: 'var(--color-gray-200)',
				300: 'var(--color-gray-300)',
				400: 'var(--color-gray-400)',
				500: 'var(--color-gray-500)',
				600: 'var(--color-gray-600)',
				700: 'var(--color-gray-700)',
				800: 'var(--color-gray-800)',
				900: 'var(--color-gray-900)'
			},
			red: {
				50: 'var(--color-red-50)',
				100: 'var(--color-red-100)',
				200: 'var(--color-red-200)',
				300: 'var(--color-red-300)',
				400: 'var(--color-red-400)',
				500: 'var(--color-red-500)',
				600: 'var(--color-red-600)',
				700: 'var(--color-red-700)'
			},
			orange: {
				50: 'var(--color-orange-50)',
				100: 'var(--color-orange-100)',
				200: 'var(--color-orange-200)',
				300: 'var(--color-orange-300)',
				400: 'var(--color-orange-400)',
				500: 'var(--color-orange-500)',
				600: 'var(--color-orange-600)',
				700: 'var(--color-orange-700)'
			},
			green: {
				50: 'var(--color-green-50)',
				100: 'var(--color-green-100)',
				200: 'var(--color-green-200)',
				300: 'var(--color-green-300)',
				400: 'var(--color-green-400)',
				500: 'var(--color-green-500)',
				600: 'var(--color-green-600)',
				700: 'var(--color-green-700)'
			},
			blue: {
				50: 'var(--color-blue-50)',
				100: 'var(--color-blue-100)',
				200: 'var(--color-blue-200)',
				300: 'var(--color-blue-300)',
				400: 'var(--color-blue-400)',
				500: 'var(--color-blue-500)',
				600: 'var(--color-blue-600)',
				700: 'var(--color-blue-700)'
			}
		},
		textColor: {
			primary: 'var(--color-text-primary)',
			inverted: 'var(--color-text-inverted)',
			accent: 'var(--color-text-accent)',
			positive: 'var(--color-text-positive)',
			warning: 'var(--color-text-warning)',
			danger: 'var(--color-text-danger)',
			disabled: 'var(--color-text-disabled)'
		},
		borderColor: {
			primary: 'var(--color-border-primary)',
			transparent: 'var(--color-border-transparent)',
			selected: 'var(--color-border-selected)',
			accent: 'var(--color-border-accent)',
			positive: 'var(--color-border-positive)',
			warning: 'var(--color-border-warning)',
			danger: 'var(--color-border-danger)'
		},
		backgroundColor: {
			accent: 'var(--color-background-accent)',
			positive: 'var(--color-background-positive)',
			warning: 'var(--color-background-warning)',
			danger: 'var(--color-background-danger)',
			'accent-light': 'var(--color-background-accent-light)',
			'positive-light': 'var(--color-background-positive-light)',
			'warning-light': 'var(--color-background-warning-light)',
			'danger-light': 'var(--color-background-danger-light)',
			disabled: 'var(--color-background-disabled)',

			surface: {
				primary: 'var(--color-surface-primary)',
				secondary: 'var(--color-surface-primary)',
				overlay: 'var(--color-surface-primary)'
			},

			button: {
				primary: {
					DEFAULT: 'var(--color-button-primary)',
					hover: 'var(--color-button-primary-hover)',
					active: 'var(--color-button-primary-active)'
				},
				ghost: {
					DEFAULT: 'var(--color-button-ghost)',
					hover: 'var(--color-button-ghost-hover)',
					active: 'var(--color-button-ghost-active)'
				}
			},
			input: {
				primary: {
					DEFAULT: 'var(--color-input-primary)',
					focus: 'var(--color-input-primary-focus)'
				}
			}
		}
	},

	plugins: []
}
export default config
