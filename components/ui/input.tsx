import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'
import { forwardRef } from 'react'

export const inputStyles = cva(
	[
		'w-full',
		'outline-none',
		'border-2',
		'px-4',
		'focus:bg-zinc-50',
		'focus:border-black',
		'disabled:bg-gray-200',
		'disabled:text-gray-400',
		'disabled:hover:cursor-not-allowed',
		'rounded',
		'overflow',
		'text-md',
		'transition-all'
	],
	{
		variants: {
			variant: {
				primary: 'bg-zinc-50',
				error: 'bg-red-100 border-red-300',
				success: 'bg-green-100 border-green-300'
			},
			size: {
				default: 'h-10',
				large: 'h-12'
			}
		},
		defaultVariants: {
			variant: 'primary',
			size: 'default'
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
		<div className={`${fullWidth && 'w-full'} inline-flex flex-col`}>
			{label && (
				<label className={`text-md mb-2`} htmlFor={id}>
					{label}
				</label>
			)}
			<div className="inline-flex w-full relative items-center">
				{icon && <div className="absolute left-4">{icon}</div>}
				<input
					ref={ref}
					className={`${inputStyles({ variant, size })} ${icon && '!pl-12'}`}
					id={id}
					type={type}
					placeholder={placeholder}
					{...props}
				/>
			</div>
		</div>
	)
})
