'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Input } from '../ui/input'
import { Menu, ExpandMore, Search, Person, Cart, Moon, Sun } from '../icons'
import { Button } from '../ui/button'
import { ButtonLink } from '../ui/button-link'

export default function SiteHeader() {
	const [dark, setDark] = useState<boolean>(false)

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', `${dark ? 'dark' : 'light'}`)
	}, [dark])

	const toggleTheme = () => {
		setDark(!dark)
	}

	return (
		<div className="flex items-center h-20 bg-surface-primary border-primary border-b px-10 justify-between gap-4">
			<div className="flex items-center gap-4">
				<Button shape="square" variant="ghost">
					<Menu />
				</Button>
				<Link href="/" className="font-bold">
					Service
				</Link>
				<Button variant="ghost">
					Каталог
					<ExpandMore />
				</Button>
			</div>
			<Button onClick={toggleTheme} shape="square" variant="ghost">
				{dark ? <Sun className="text-warning" /> : <Moon className="text-accent" />}
			</Button>
			<Input icon={<Search />} shape="round" placeholder="Шукати" fullWidth />
			<div className="flex items-center gap-4">
				<ButtonLink href="auth/signin">
					<Person />
					Увійти
				</ButtonLink>
				<Button variant="ghost" shape="square">
					<Cart />
				</Button>
			</div>
		</div>
	)
}
