'use client'

import React, { useRef } from 'react'
import { Close, Search } from '../icons'
import { useClickOutside } from '@/lib/hooks/useClickOutside'

export interface ComboboxProps extends React.FormHTMLAttributes<HTMLFormElement> {
	open: boolean
	setOpen: (open: boolean) => void
	value: string
	setValue: (value: string) => void
}

export const Combobox = ({ open, setOpen, value, setValue, ...props }: ComboboxProps) => {
	const comboboxRef = useRef<HTMLFormElement>(null)
	useClickOutside(comboboxRef, () => setOpen(false))
	const optionsRef = useRef<HTMLUListElement>(null)

	const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
		if (e.key === 'Escape') {
			setOpen(false)
		} else if (e.key === 'Enter') {
			setOpen(true)
		}
	}

	return (
		<form ref={comboboxRef} onKeyDown={handleKeyDown} {...props} className="flex flex-col gap-2 relative min-w-[400px]">
			<ComboboxInput onValueChange={setValue} value={value} onClick={() => setOpen(true)} />
			{open && (
				<ComboboxContent>
					<ComboboxOptions ref={optionsRef}>{props.children}</ComboboxOptions>
				</ComboboxContent>
			)}
		</form>
	)
}
Combobox.displayName = 'Combobox'

export interface ComboboxInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	value: string
	onValueChange: (value: string) => void
}

export const ComboboxInput = React.forwardRef<HTMLInputElement, ComboboxInputProps>(
	({ children, value, onValueChange, ...props }, ref) => {
		const handleClearClick = () => {
			onValueChange('')
		}

		return (
			<div className="inline-flex w-full relative items-center">
				<div className="absolute left-4">
					<Search />
				</div>

				<input
					placeholder="Шукати"
					className={`w-full border bg-zinc-50 outline-none rounded py-2 pl-12 pr-4`}
					ref={ref}
					value={value}
					onChange={e => onValueChange(e.target.value)}
					{...props}
				/>

				{value && (
					<div className="absolute right-4 cursor-pointer" onClick={handleClearClick}>
						<Close />
					</div>
				)}
			</div>
		)
	}
)
ComboboxInput.displayName = 'ComboboxInput'

export interface ComboboxContentProps extends React.HTMLProps<HTMLDivElement> {}

export const ComboboxContent = React.forwardRef<HTMLDivElement, ComboboxContentProps>(
	({ title, children, ...props }, ref) => {
		return (
			<div
				ref={ref}
				{...props}
				className={`absolute w-full flex flex-col bg-white border rounded z-50 top-12 overflow-hidden max-h-[300px]`}
			>
				{children}
			</div>
		)
	}
)
ComboboxContent.displayName = 'ComboboxContent'

export interface ComboboxOptionsProps extends Omit<React.HTMLAttributes<HTMLUListElement>, 'children'> {
	children: React.ReactNode
}

export const ComboboxOptions = React.forwardRef<HTMLUListElement, ComboboxOptionsProps>(
	({ children, ...props }, ref) => {
		return (
			<ul ref={ref} tabIndex={-1} role="listbox" {...props} className="flex flex-col overflow-x-auto">
				{children}
			</ul>
		)
	}
)
ComboboxOptions.displayName = 'ComboboxOptions'

export interface ComboboxOptionProps extends React.LiHTMLAttributes<HTMLLIElement> {
	value?: string
	selected?: boolean
}

export const ComboboxOption = React.forwardRef<HTMLLIElement, ComboboxOptionProps>(
	({ title, children, selected, ...props }, ref) => {
		return (
			<li
				ref={ref}
				role="option"
				aria-selected={selected}
				{...props}
				className={`px-4 py-2 outline-none focus-visible:bg-zinc-800 focus:bg-zinc-800 hover:bg-zinc-50 cursor-pointer ${
					selected && 'text-green-600 font-medium'
				}`}
			>
				<span>{children}</span>
			</li>
		)
	}
)
ComboboxOption.displayName = 'ComboboxOption'
