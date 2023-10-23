'use client'

import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { Icons } from './icons'
import { Input } from './ui/input'

export function SearchInput({ query }: { query: string }) {
	const pathname = usePathname()
	const router = useRouter()
	const [searchQuery, setSearchQuery] = React.useState(query)

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			router.push(searchQuery === '' ? pathname : `${pathname}?query=${searchQuery}`)
		}
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value)
	}

	const handleClearResults = () => {
		router.push(pathname)
		setSearchQuery('')
	}

	return (
		<>
			<Input
				icon={<Icons.search />}
				placeholder="Шукати"
				shape="round"
				value={searchQuery}
				onChange={handleInputChange}
				onKeyDown={handleKeyDown}
				clearable
				className="w-[260px]"
				onClear={handleClearResults}
			/>
		</>
	)
}
