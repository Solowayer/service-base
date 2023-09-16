import { cn } from '@/lib/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'
import React, { forwardRef } from 'react'

const buttonStyles = cva(
	[
		'inline-flex items-center',
		'relative',
		'select-none',
		'outline-none',
		'font-medium',
		'disabled:bg-gray-200',
		'disabled:text-gray-400',
		'disabled:hover:cursor-not-allowed'
	],
	{
		variants: {
			variant: {
				primary: 'bg-button-primary text-inverted hover:bg-button-primary-hover active:bg-button-primary-active',
				ghost: 'bg-button-ghost text-primary hover:bg-button-ghost-hover active:bg-button-ghost-active'
			},
			align: {
				start: 'justify-start',
				center: 'justify-center',
				end: 'justify-end'
			},
			size: {
				small: 'px-3 gap-2 text-sm h-8',
				medium: 'px-4 gap-3 text-md h-10',
				large: 'px-5 gap-4 text-lg h-12',
				'icon-small': 'h-8 w-8',
				'icon-medium': 'h-10 w-10',
				'icon-large': 'h-12 w-12'
			},
			shape: {
				rectangle: 'rounded',
				round: 'rounded-full'
			},
			fullWidth: {
				true: 'w-full'
			}
		},
		defaultVariants: {
			variant: 'primary',
			align: 'center',
			size: 'medium',
			shape: 'rectangle'
		}
	}
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles> {
	children: React.ReactNode
	className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
	{ variant, align, size, shape, fullWidth, children, className, ...props },
	ref
) {
	return (
		<button ref={ref} className={cn(buttonStyles({ variant, align, size, shape, fullWidth, className }))} {...props}>
			{children}
		</button>
	)
})
Button.displayName = 'Button'

export { Button, buttonStyles }
