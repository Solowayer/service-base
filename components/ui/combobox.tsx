'use client'

import React from 'react'
import { Icons } from '../icons'
import { useClickOutside } from '@/lib/hooks/use-click-outside'
import { Button } from './button'
import { Badge } from './badge'
import { cn } from '@/lib/utils/cn'
import { menuItemStyles } from './menu'

interface SingleModeProps<T> {
	mode: 'single'
	value: T | null
	setValue: React.Dispatch<React.SetStateAction<T | null>>
	onChange?: (value: T | null) => void
	values?: never
	setValues?: never
}

interface MultipleModeProps<T> {
	mode: 'multiple'
	values: Array<T>
	setValues: React.Dispatch<React.SetStateAction<Array<T>>>
	onChange?: (values: Array<T> | null) => void
	value?: never
	setValue?: never
}

type ComboboxProps = {
	// isOpen?: boolean
	// onOpenChange?: (isOpen: boolean) => void
	options: string[]
	placeholder: string
} & (SingleModeProps<string> | MultipleModeProps<string>)

export const Combobox = ({
	options,
	mode,
	value,
	setValue,
	values,
	setValues,
	onChange,
	placeholder,
	...props
}: ComboboxProps) => {
	const [open, setOpen] = React.useState(false)
	const [searchTerm, setSearchTerm] = React.useState<string>('')
	const [activeIndex, setActiveIndex] = React.useState(0)

	const comboboxRef = React.useRef<HTMLDivElement>(null)
	const inputRef = React.useRef<HTMLInputElement>(null)
	const optionsRef = React.useRef<HTMLUListElement>(null)

	React.useEffect(() => {
		if (onChange && mode === 'multiple') onChange(values?.length ? values : null)
		if (onChange && mode === 'single') onChange(value ?? null)
	}, [mode, onChange, value, values])

	const handleSelect = React.useCallback(
		(item: string, index: number) => {
			if (mode === 'single') {
				setValue(item)
				setOpen(false)
				setActiveIndex(index)
			}

			if (mode === 'multiple') {
				if (values.includes(item)) {
					setActiveIndex(index)
					setValues(prevValues => prevValues.filter(value => value !== item))
				} else {
					setActiveIndex(index)
					setValues(prevValues => [...prevValues, item])
				}
			}
		},
		[mode, setValue, setValues, values]
	)

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

			switch (event.key) {
				case 'ArrowUp':
					event.preventDefault()
					setActiveIndex(currentIndex => (currentIndex - 1 >= 0 ? currentIndex - 1 : filteredOptions.length - 1))
					break
				case 'ArrowDown':
					event.preventDefault()
					setActiveIndex(currentIndex => (currentIndex + 1 <= filteredOptions.length - 1 ? currentIndex + 1 : 0))
					break
				case 'Enter':
					event.preventDefault()
					if (filteredOptions[activeIndex]) {
						if (mode === 'single') {
							setValue(filteredOptions[activeIndex])
							setOpen(false)
						}

						if (mode === 'multiple') {
							if (values.includes(filteredOptions[activeIndex])) {
								// Якщо вже вибрано, видалить зі списку
								setValues(prevValues => prevValues.filter(value => value !== filteredOptions[activeIndex]))
							} else {
								// Якщо не вибрано, додасть до списку
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
		[activeIndex, filteredOptions, mode, open, setValue, setValues, values]
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
				<Icons.delete
					className="w-5 h-5 hover:text-danger"
					onClick={e => {
						e.stopPropagation()
						setValue(null)
					}}
				/>
			) : null
		) : values.length ? (
			<Icons.delete
				className="w-5 h-5 hover:text-danger"
				onClick={e => {
					e.stopPropagation()
					setValues([])
				}}
			/>
		) : null

	const buttonContent =
		mode === 'single' ? (
			value ?? placeholder
		) : values.length ? (
			<div className="flex flex-wrap gap-2">
				{values.map((item, index) => (
					<Badge key={index}>
						{item}
						<Icons.close
							className="w-5 h-5 hover:scale-110 transition-transform duration-100"
							onClick={e => {
								e.stopPropagation()
								if (values.includes(item)) {
									setValues(prevValues => prevValues.filter(value => value !== item))
								}
							}}
						/>
					</Badge>
				))}
			</div>
		) : (
			placeholder
		)

	return (
		<div ref={comboboxRef} {...props} className={cn('flex flex-col gap-1 relative', {})} id="combobox">
			<Button
				variant="ghost"
				className={cn('justify-between', {
					'h-auto p-4': mode === 'multiple' && values.length > 1
				})}
				onClick={e => {
					e.preventDefault()
					e.stopPropagation()
					setOpen(!open)
				}}
			>
				{buttonContent}
				<div className="flex gap-2">
					<Icons.chevronDown />
					{deleteIcon}
				</div>
			</Button>
			{open && (
				<ComboboxContent className={cn('', {})}>
					<ComboboxInput ref={inputRef} value={searchTerm} onValueChange={setSearchTerm} />
					<ComboboxOptions ref={optionsRef} id="combobox-options">
						{filteredOptions?.map((item, index) => (
							<ComboboxOption
								key={item}
								selected={mode === 'single' ? value === item : values.includes(item)}
								onClick={e => {
									e.preventDefault()
									e.stopPropagation()
									handleSelect(item, index)
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
	({ title, children, className, ...props }, ref) => {
		return (
			<div className="relative">
				<div
					ref={ref}
					{...props}
					className={cn(
						`absolute w-full flex flex-col bg-primary border rounded z-50 top-0 overflow-hidden max-h-[300px]`,
						className
					)}
				>
					{children}
				</div>
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
				className={`${menuItemStyles()} ${selected && 'flex items-center justify-between font-medium'}`}
			>
				<span>{children}</span>
				{selected ? <Icons.check /> : null}
			</li>
		)
	}
)
ComboboxOption.displayName = 'ComboboxOption'
