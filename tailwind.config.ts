import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		spacing: {
			px: '1px',
			0: '0',
			0.5: '0.125rem',
			1: '0.25rem',
			1.5: '0.375rem',
			2: '0.5rem',
			2.5: '0.625rem',
			3: '0.75rem',
			3.5: '0.875rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			7: '1.75rem',
			8: '2rem',
			9: '2.25rem',
			10: '2.5rem',
			11: '2.75rem',
			12: '3rem',
			14: '3.5rem',
			16: '4rem',
			20: '5rem',
			24: '6rem',
			28: '7rem',
			32: '8rem',
			36: '9rem',
			40: '10rem',
			44: '11rem',
			48: '12rem',
			52: '13rem',
			56: '14rem',
			60: '15rem',
			64: '16rem',
			72: '18rem',
			80: '20rem',
			96: '24rem'
		},
		borderRadius: {
			none: '0',
			sm: '.125rem',
			DEFAULT: '.25rem',
			lg: '.5rem',
			full: '9999px'
		},
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
				700: 'var(--color-orange-700)',
				800: 'var(--color-orange-800)',
				900: 'var(--color-orange-900)'
			},
			green: {
				50: 'var(--color-green-50)',
				100: 'var(--color-green-100)',
				200: 'var(--color-green-200)',
				300: 'var(--color-green-300)',
				400: 'var(--color-green-400)',
				500: 'var(--color-green-500)',
				600: 'var(--color-green-600)',
				700: 'var(--color-green-700)',
				800: 'var(--color-green-800)',
				900: 'var(--color-green-900)'
			},
			blue: {
				50: 'var(--color-blue-50)',
				100: 'var(--color-blue-100)',
				200: 'var(--color-blue-200)',
				300: 'var(--color-blue-300)',
				400: 'var(--color-blue-400)',
				500: 'var(--color-blue-500)',
				600: 'var(--color-blue-600)',
				700: 'var(--color-blue-700)',
				800: 'var(--color-blue-800)',
				900: 'var(--color-blue-900)'
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
			DEFAULT: 'var(--color-border-primary)',
			transparent: 'var(--color-border-transparent)',
			selected: 'var(--color-border-selected)',
			accent: 'var(--color-border-accent)',
			positive: 'var(--color-border-positive)',
			warning: 'var(--color-border-warning)',
			danger: 'var(--color-border-danger)'
		},
		backgroundColor: ({ theme }) => ({
			...theme('colors'),
			accent: 'var(--color-background-accent)',
			positive: 'var(--color-background-positive)',
			warning: 'var(--color-background-warning)',
			danger: 'var(--color-background-danger)',
			'accent-light': 'var(--color-background-accent-light)',
			'positive-light': 'var(--color-background-positive-light)',
			'warning-light': 'var(--color-background-warning-light)',
			'danger-light': 'var(--color-background-danger-light)',
			'interactive-hover': 'var(--color-background-interactive-hover)',
			'interactive-active': 'var(--color-background-interactive-active)',
			'interactive-selected': 'var(--color-background-interactive-selected)',
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
		})
	},

	plugins: []
}
export default config
