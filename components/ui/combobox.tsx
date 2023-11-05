'use client'

import React from 'react'
import { Icons } from '../icons'
import { useClickOutside } from '@/lib/hooks/use-click-outside'
import { Button } from './button'
import { Badge } from './badge'
import { cn } from '@/lib/utils/cn'
import { menuItemStyles } from './menu'

interface Option {
	label: string
	value: string
}

interface SingleModeProps {
	mode: 'single'
	value: Option | null
	setValue: React.Dispatch<React.SetStateAction<Option | null>>
	onChange?: (value: Option | null) => void
	values?: never
	setValues?: never
}

interface MultipleModeProps {
	mode: 'multiple'
	values: Option[]
	setValues: React.Dispatch<React.SetStateAction<Option[]>>
	onChange?: (values: Option[] | null) => void
	value?: never
	setValue?: never
}

type ComboboxProps = {
	options: Option[]
	placeholder: string
	children?: (options: Option) => React.ReactNode
} & (SingleModeProps | MultipleModeProps)

export const Combobox = ({
	options,
	placeholder,
	children,
	mode,
	value,
	setValue,
	values,
	setValues,
	onChange,
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
		(selectedOption: Option, index: number) => {
			if (mode === 'single') {
				setValue(selectedOption)
				setOpen(false)
				setActiveIndex(index)
			}

			if (mode === 'multiple') {
				if (values.find(option => option === selectedOption)) {
					setActiveIndex(index)
					setValues(prevValues => prevValues.filter(value => value !== selectedOption))
				} else {
					setActiveIndex(index)
					setValues(prevValues => [...prevValues, selectedOption])
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
				return option.label.toLowerCase().includes(searchTerm.toLowerCase())
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
			value ? (
				value.label
			) : (
				placeholder
			)
		) : values.length ? (
			<div className="flex flex-wrap gap-2">
				{values.map((item, index) => (
					<Badge key={index}>
						{item.label}
						<Icons.close
							className="w-5 h-5 hover:scale-110 transition-transform duration-100"
							onClick={e => {
								e.stopPropagation()
								setValues(prevValues => prevValues.filter(value => value !== item))
							}}
						/>
					</Badge>
				))}
			</div>
		) : (
			placeholder
		)

	return (
		<div ref={comboboxRef} {...props} className={cn('flex flex-col gap-1 relative', {})} id={`combobox-${mode}`}>
			<Button
				id={`combobox-button-${mode}`}
				type="button"
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
						{filteredOptions?.map((option, index) => (
							<ComboboxOption
								key={index}
								selected={mode === 'single' ? value === option : values.includes(option)}
								onClick={e => {
									e.preventDefault()
									e.stopPropagation()
									handleSelect(option, index)
								}}
								data-index={index}
								id={`option-${index}`}
							>
								{children ? children(option) : option.label}
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
				<div>{children}</div>
				{selected ? <Icons.check /> : null}
			</li>
		)
	}
)
ComboboxOption.displayName = 'ComboboxOption'
