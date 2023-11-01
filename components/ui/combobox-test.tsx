'use client'

import React from 'react'
import { Icons } from '../icons'
import { useClickOutside } from '@/lib/hooks/use-click-outside'
import { Button } from './button'
import { Badge } from './badge'
import { cn } from '@/lib/utils/cn'

type ComboboxMode = 'single' | 'multiple'

export interface ComboboxProps extends React.HTMLProps<HTMLDivElement> {
	options: string[]
	// value: string
	// setValue: (value: string) => void
	mode?: ComboboxMode
	placeholder: string
}

export const ComboboxTest = ({ options, placeholder, mode = 'single', ...props }: ComboboxProps) => {
	const [open, setOpen] = React.useState(false)
	const [value, setValue] = React.useState<string | null>(null)
	const [values, setValues] = React.useState<string[]>([])
	const [searchTerm, setSearchTerm] = React.useState<string>('')
	const [activeIndex, setActiveIndex] = React.useState(0)

	console.log(values)

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
						if (mode === 'single') {
							setValue(filteredOptions[activeIndex])
							setOpen(false)
							// setActiveIndex(-1)
						}

						if (mode === 'multiple') {
							if (values.includes(filteredOptions[activeIndex])) {
								// Якщо вже вибрано, видаліть зі списку
								setValues(prevValues => prevValues.filter(value => value !== filteredOptions[activeIndex]))
							} else {
								// Якщо не вибрано, додайте до списку
								setValues(prevValues => [...prevValues, filteredOptions[activeIndex]])
							}
						}
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
		[open, filteredOptions, activeIndex, mode, values]
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

	const deleteIcon =
		mode === 'single' ? (
			value ? (
				<Icons.delete className="w-5 h-5 hover:text-danger" onClick={() => setValue(null)} />
			) : null
		) : values.length ? (
			<Icons.delete className="w-5 h-5 hover:text-danger" onClick={() => setValues([])} />
		) : null

	const buttonContent =
		mode === 'single' ? (
			value ?? placeholder
		) : values.length ? (
			<div className="flex flex-wrap gap-2">
				{values.map((item, index) => (
					<Badge key={index}>
						{item}
						<button
							className="h-auto hover:scale-110 transition-transform duration-100"
							onClick={() => {
								if (values.includes(item)) {
									setValues(prevValues => prevValues.filter(value => value !== item))
								}
							}}
						>
							<Icons.close />
						</button>
					</Badge>
				))}
			</div>
		) : (
			placeholder
		)

	return (
		<div ref={comboboxRef} {...props} className="flex flex-col gap-2 relative">
			<Button
				variant="ghost"
				className={cn('justify-between', {
					'h-auto p-4': mode === 'multiple' && values.length > 1
				})}
				onClick={() => setOpen(!open)}
			>
				{buttonContent}
				<div className="flex gap-2">
					<Icons.chevronDown />
					{deleteIcon}
				</div>
			</Button>
			{open && (
				<ComboboxContent>
					<ComboboxInput ref={inputRef} value={searchTerm} onValueChange={setSearchTerm} />
					<ComboboxOptions ref={optionsRef} id="combobox-options">
						{filteredOptions?.map((item, index) => (
							<ComboboxOption
								key={item}
								selected={mode === 'single' ? value === item : values.includes(item)}
								onClick={() => {
									if (mode === 'single') {
										setValue(item)
										setOpen(false)
									}

									if (mode === 'multiple') {
										if (values.includes(item)) {
											setValues(prevValues => prevValues.filter(value => value !== item))
										} else {
											setValues(prevValues => [...prevValues, item])
										}
									}
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
ComboboxTest.displayName = 'ComboboxTest'

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
	({ title, children, className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				{...props}
				className={cn(
					`absolute w-full flex flex-col bg-primary border rounded z-50 top-11 overflow-hidden max-h-[300px]`,
					className
				)}
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
			<ul ref={ref} role="listbox" {...props} className="flex flex-col overflow-x-auto p-2">
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
				className={`outline-none px-4 py-2 rounded hover:bg-interactive-hover focus:bg-interactive-hover cursor-pointer focus:ring-offset-white focus:ring-black focus:ring-offset-2 focus:ring-2 focus:z-50 ${
					selected && 'flex items-center justify-between font-medium'
				}`}
			>
				<span>{children}</span>
				{selected && <Icons.check />}
			</li>
		)
	}
)
ComboboxOption.displayName = 'ComboboxOption'
