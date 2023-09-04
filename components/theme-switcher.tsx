'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from './icons'
import { Button } from './ui/button'

export default function ThemeSwitcher() {
	const [dark, setDark] = useState<boolean>(false)

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', `${dark ? 'dark' : 'light'}`)
	}, [dark])

	const toggleTheme = () => {
		setDark(!dark)
	}

	return (
		<>
			<Button onClick={toggleTheme} shape="square" variant="ghost">
				{dark ? <Sun className="text-warning" /> : <Moon className="text-accent" />}
			</Button>
		</>
	)
}
