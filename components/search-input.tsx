'use client'

import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { Icons } from './icons'
import { Input } from './ui/input'

export function SearchInput({ query }: { query: string }) {
	const pathname = usePathname()
	const router = useRouter()
	const [searchQuery, setSearchQuery] = React.useState(query)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		router.push(searchQuery === '' ? pathname : `${pathname}?query=${searchQuery}`)
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value)
	}

	const handleClearResults = () => {
		router.push(pathname)
		setSearchQuery('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<Input
				icon={<Icons.search />}
				placeholder="Шукати"
				shape="round"
				value={searchQuery}
				onChange={handleInputChange}
				clearable
				className="w-[260px]"
				onClear={handleClearResults}
			/>
		</form>
	)
}
