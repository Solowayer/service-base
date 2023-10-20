import { useEffect } from 'react'

function useComboboxNavigation(inputRef: React.RefObject<HTMLInputElement>, optionsRef: React.RefObject<HTMLElement>) {
	useEffect(() => {
		const input = inputRef.current
		const options = optionsRef.current

		if (!input || !options) return

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'ArrowDown') {
				e.preventDefault()
				;(options.firstChild as HTMLElement)?.focus()
			}
		}

		input.addEventListener('keydown', handleKeyDown)

		return () => {
			input.removeEventListener('keydown', handleKeyDown)
		}
	}, [inputRef, optionsRef])
}

export { useComboboxNavigation }
