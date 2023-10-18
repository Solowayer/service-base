import { cn } from '@/lib/utils/cn'
import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'
import { forwardRef } from 'react'

export const inputStyles = cva(
	[
		'w-full',
		'outline-none',
		'px-4',
		'overflow',
		'text-md',
		'focus:ring-offset-white',
		'focus:ring-black',
		'focus:ring-offset-2',
		'focus:ring-2',
		'focus:bg-input-primary-focus',
		'border',
		'placeholder:text-secondary',
		'disabled:cursor-not-allowed disabled:opacity-50'
	],
	{
		variants: {
			variant: {
				primary: 'bg-input-primary',
				error: 'bg-danger-light border-danger',
				success: 'bg-positive-light border-positive'
			},
			size: {
				default: 'h-10',
				large: 'h-12'
			},
			shape: {
				rectangle: 'rounded',
				round: 'rounded-full'
			}
		},
		defaultVariants: {
			variant: 'primary',
			size: 'default',
			shape: 'rectangle'
		}
	}
)

export interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
		VariantProps<typeof inputStyles> {
	label?: string
	icon?: React.ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ variant, size, shape, label, icon, type = 'text', className, ...props },
	ref
) {
	return (
		<div className="inline-flex relative items-center">
			{icon && <div className={`absolute left-4 ${props.disabled && 'text-disabled'}`}>{icon}</div>}
			<input
				ref={ref}
				className={cn(inputStyles({ variant, size, shape }), `${icon && '!pl-12 pr-4'}`, className)}
				type={type}
				{...props}
			/>
		</div>
	)
})
Input.displayName = 'Input'

export { Input }
