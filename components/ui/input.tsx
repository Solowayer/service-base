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
		'border-2',
		'border-transparent',
		'hover:border-primary',
		'focus:border-selected',
		'focus:bg-input-primary-focus',
		'disabled:bg-disabled',
		'disabled:text-disabled',
		'disabled:hover:cursor-not-allowed'
	],
	{
		variants: {
			variant: {
				primary: 'bg-input-primary',
				error: 'bg-danger-light !border-danger',
				success: 'bg-positive-light !border-positive'
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
	fullWidth: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ variant, size, fullWidth, label, icon, id, type = 'text', placeholder = 'Text here...', ...props },
	ref
) {
	return (
		<div className={`${fullWidth && 'w-full'} inline-flex w-full relative items-center`}>
			{icon && <div className={`absolute left-4 ${props.disabled && 'text-disabled'}`}>{icon}</div>}
			<input
				ref={ref}
				className={`${inputStyles({ variant, size })} ${icon && '!pl-12'}`}
				id={id}
				type={type}
				placeholder={placeholder}
				{...props}
			/>
		</div>
	)
})