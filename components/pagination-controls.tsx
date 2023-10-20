'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Icons } from './icons'

type PaginationProps = {
	totalPages: number
	siblingCount?: number
}

export default function Pagination({ totalPages, siblingCount = 3 }: PaginationProps) {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const router = useRouter()

	const page = searchParams.get('page') ?? '1'
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
		console.log(range)
		return range
	}, [totalPages, page, siblingCount])

	return (
		<div className="w-full items-center justify-center flex gap-8">
			<Button
				variant="clear"
				shape="round"
				size="icon-medium"
				onClick={() => {
					router.push(`${pathname}?page=${Math.max(Number(page) - 1, 1)}`)
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
						onClick={() => router.push(`${pathname}?page=${Number(pageNumber)}`)}
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
					router.push(`${pathname}?page=${Number(page) + 1}`)
				}}
				disabled={Number(page) === totalPages}
			>
				<Icons.chevronRight />
			</Button>
		</div>
	)
}
