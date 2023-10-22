'use client'

import { cn } from '@/lib/utils/cn'
import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'
import { forwardRef } from 'react'
import { Icons } from '../icons'

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
	icon?: React.ReactNode
	clearable?: boolean
	onClear?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ variant, size, shape, icon, clearable, onClear, type = 'text', className, ...props },
	ref
) {
	const clearInput = () => {
		if (props.value && typeof props.onChange === 'function') {
			props.onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>)
		}
	}

	return (
		<div className={cn('flex relative items-center', className)}>
			{icon && <div className={`absolute left-4 ${props.disabled && 'text-disabled'}`}>{icon}</div>}
			<input
				ref={ref}
				className={cn(inputStyles({ variant, size, shape }), `${icon && '!pl-12 pr-4'}`)}
				type={type}
				value={props.value}
				{...props}
			/>
			{clearable && props.value && (
				<button type="button" className="absolute right-4" onClick={onClear ?? clearInput}>
					<Icons.close />
				</button>
			)}
		</div>
	)
})
Input.displayName = 'Input'

export { Input }
