'use client'

import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { usePathname, useRouter } from 'next/navigation'

export function SortSelect<T extends string>({
	defaultValue,
	sortValue,
	options
}: {
	defaultValue: T
	sortValue: string
	options: SortOption<T>[]
}) {
	const pathname = usePathname()
	const router = useRouter()

	const handleValueChange = (value: T) => {
		router.push(`${pathname}?sort=${value}`)
	}

	const isSortValueValid = options.some(v => v.value === sortValue)

	return (
		<>
			<Select value={isSortValueValid ? sortValue : defaultValue} onValueChange={handleValueChange}>
				<SelectTrigger className="w-[260px]">
					<SelectValue />
				</SelectTrigger>
				<SelectContent position="popper">
					{options.map(option => (
						<SelectItem key={option.value} value={option.value}>
							{option.title}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</>
	)
}
