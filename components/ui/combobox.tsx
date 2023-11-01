'use client'

import React from 'react'
import { Icons } from '../icons'
import { useClickOutside } from '@/lib/hooks/use-click-outside'
import { Button } from './button'

export interface ComboboxProps extends React.HTMLProps<HTMLDivElement> {
	options: string[]
	// value: string
	// setValue: (value: string) => void
	placeholder: string
}

export const Combobox = ({ options, placeholder, ...props }: ComboboxProps) => {
	const [open, setOpen] = React.useState(false)
	const [value, setValue] = React.useState<string | null>(null)
	const [searchTerm, setSearchTerm] = React.useState<string>('')
	const [activeIndex, setActiveIndex] = React.useState(0)

	const comboboxRef = React.useRef<HTMLDivElement>(null)
	const inputRef = React.useRef<HTMLInputElement>(null)
	const optionsRef = React.useRef<HTMLUListElement>(null)

	const filteredOptions = React.useMemo(() => {
		if (searchTerm === '') {
			return options
		} else {
			return options.filter(option => {
				return option.toLowerCase().includes(searchTerm.toLowerCase())
			})
		}
	}, [options, searchTerm])

	const handleKeyDown = React.useCallback(
		(event: KeyboardEvent) => {
			if (!open) return

			const searchDataLength = filteredOptions.length - 1

			switch (event.key) {
				case 'ArrowUp':
					event.preventDefault()
					setActiveIndex(currentIndex => (currentIndex - 1 >= 0 ? currentIndex - 1 : searchDataLength))
					break
				case 'ArrowDown':
					event.preventDefault()
					setActiveIndex(currentIndex => (currentIndex + 1 <= searchDataLength ? currentIndex + 1 : 0))
					break
				case 'Enter':
					event.preventDefault()
					if (filteredOptions[activeIndex]) {
						setValue(filteredOptions[activeIndex])
						setOpen(false)
						setActiveIndex(-1)
					}
					break
				case 'Escape':
					event.preventDefault()
					setOpen(false)
					setActiveIndex(-1)
					break
				default:
					break
			}
		},
		[open, activeIndex, filteredOptions]
	)

	React.useEffect(() => {
		if (open) {
			const activeElement = document.querySelector(`[data-index='${activeIndex}']`) as HTMLLIElement

			if (activeElement) activeElement.focus()
		} else {
			setActiveIndex(-1)
		}
	}, [open, activeIndex])

	React.useEffect(() => {
		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [handleKeyDown])

	React.useEffect(() => {
		if (open) {
			if (inputRef.current) {
				inputRef.current.focus()
			}
		}
	}, [open])

	useClickOutside(comboboxRef, () => setOpen(false))

	return (
		<div ref={comboboxRef} {...props} className="flex flex-col gap-2 relative">
			<Button variant="ghost" className="justify-between" onClick={() => setOpen(!open)}>
				{value ? value : placeholder}
				<div className="flex gap-2">
					<Icons.chevronDown />
					{value ? <Icons.delete className="w-5 h-5 hover:text-danger" onClick={() => setValue(null)} /> : null}
				</div>
			</Button>
			{open && (
				<ComboboxContent>
					<ComboboxInput ref={inputRef} value={searchTerm} onValueChange={setSearchTerm} />
					<ComboboxOptions ref={optionsRef} id="combobox-options">
						{filteredOptions?.map((item, index) => (
							<ComboboxOption
								key={item}
								selected={value === item}
								onClick={() => {
									setValue(item)
									setOpen(false)
								}}
								data-index={index}
							>
								{item}
							</ComboboxOption>
						))}
					</ComboboxOptions>
				</ComboboxContent>
			)}
		</div>
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
					<Icons.search />
				</div>

				<input
					placeholder="Шукати"
					className={`w-full bg-secondary border-b bg-zinc-50 outline-none py-2 pl-12 pr-4`}
					ref={ref}
					value={value}
					onChange={e => onValueChange(e.target.value)}
					{...props}
				/>

				{value && (
					<div className="absolute right-4 cursor-pointer" onClick={handleClearClick}>
						<Icons.close />
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
				className={`absolute w-full flex flex-col bg-primary border rounded z-50 top-11 overflow-hidden max-h-[300px]`}
			>
				{children}
			</div>
		)
	}
)
ComboboxContent.displayName = 'ComboboxContent'

export interface ComboboxOptionsProps extends React.HTMLProps<HTMLUListElement> {}

export const ComboboxOptions = React.forwardRef<HTMLUListElement, ComboboxOptionsProps>(
	({ children, ...props }, ref) => {
		return (
			<ul ref={ref} role="listbox" {...props} className="flex flex-col overflow-x-auto">
				{children}
			</ul>
		)
	}
)
ComboboxOptions.displayName = 'ComboboxOptions'

export interface ComboboxOptionProps extends React.HTMLProps<HTMLLIElement> {
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
				tabIndex={-1}
				className={`outline-none px-4 py-2 hover:bg-interactive-hover focus:bg-interactive-hover cursor-pointer ${
					selected && 'flex items-center justify-between font-medium bg-interactive-hover'
				}`}
			>
				<span>{children}</span>
				{selected && <Icons.check />}
			</li>
		)
	}
)
ComboboxOption.displayName = 'ComboboxOption'
