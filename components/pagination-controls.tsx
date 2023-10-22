'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { usePathname, useRouter } from 'next/navigation'
import { Icons } from './icons'

type PaginationProps = {
	totalPages: number
	page?: string
	sort?: string
	query?: string
	siblingCount?: number
}

export function Pagination({ totalPages, page, sort, query, siblingCount = 3 }: PaginationProps) {
	const pathname = usePathname()
	const router = useRouter()

	const dots = '...'

	const range = React.useMemo(() => {
		const range = []
		for (
			let i = Math.max(2, Number(page) - siblingCount);
			i <= Math.min(totalPages - 1, Number(page) + siblingCount);
			i++
		) {
			range.push(i)
		}

		if (Number(page) - siblingCount > 2) {
			range.unshift(dots)
		}
		if (Number(page) + siblingCount < totalPages - 1) {
			range.push(dots)
		}

		range.unshift(1)
		if (totalPages !== 1) {
			range.push(totalPages)
		}
		return range
	}, [totalPages, page, siblingCount])

	const createQueryString = (params: Record<string, string | number | null>) => {
		const newSearchParams = new URLSearchParams()

		for (const [key, value] of Object.entries(params)) {
			if (value === null) {
				newSearchParams.delete(key)
			} else {
				newSearchParams.set(key, String(value))
			}
		}

		return newSearchParams.toString()
	}

	return (
		<div className="w-full items-center justify-between flex gap-8">
			<Button
				variant="clear"
				shape="round"
				size="icon-medium"
				onClick={() => {
					router.push(
						`${pathname}?${createQueryString({
							page: Math.max(Number(page) - 1, 1),
							query: query ?? null,
							sort: sort ?? null
						})}`
					)
				}}
				disabled={Number(page) === 1}
			>
				<Icons.chevronLeft />
			</Button>
			<div className="flex gap-2">
				{range.map((pageNumber, index) => (
					<Button
						key={index}
						size="icon-medium"
						variant={`${Number(page) === pageNumber ? 'primary' : 'ghost'}`}
						onClick={() =>
							router.push(
								`${pathname}?${createQueryString({
									page: Number(pageNumber),
									query: query ?? null,
									sort: sort ?? null
								})}`
							)
						}
						disabled={pageNumber === dots}
					>
						{pageNumber}
					</Button>
				))}
			</div>
			<Button
				variant="clear"
				shape="round"
				size="icon-medium"
				onClick={() => {
					router.push(
						`${pathname}?${createQueryString({
							page: Number(page) + 1,
							query: query ?? null,
							sort: sort ?? null
						})}`
					)
				}}
				disabled={Number(page) === totalPages}
			>
				<Icons.chevronRight />
			</Button>
		</div>
	)
}
