'use client'

import { useState, useEffect } from 'react'
import { Icons } from '../icons'
import { Button } from '../ui/button'

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
			<Button onClick={toggleTheme} variant="ghost" size="icon-medium">
				{dark ? <Icons.sun className="w-5 h-5 text-warning" /> : <Icons.moon className="w-5 h-5 text-accent" />}
			</Button>
		</>
	)
}
