'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Icons } from './icons'

type PaginationProps = {
	totalPages: number
}

export default function Pagination() {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const router = useRouter()

	const page = searchParams.get('page') ?? '1'

	const range = (totalPages: number, page: number) => {
		let pages: number[] = Array.from({ length: totalPages }, (_, index) => index + 1)
		const maxVisiblePages = 9

		if (totalPages > maxVisiblePages) {
			const middlePage = Math.ceil(maxVisiblePages / 2)

			if (page <= middlePage) {
				pages = [...pages.slice(0, maxVisiblePages - 2), -1, totalPages]
			} else if (page > totalPages - middlePage) {
				pages = [1, -1, ...pages.slice(totalPages - maxVisiblePages + 2)]
			} else {
				const startPage = page - Math.floor((maxVisiblePages - 3) / 2)
				const endPage = page + Math.floor((maxVisiblePages - 4) / 2)
				pages = [1, -1, ...pages.slice(startPage, endPage), -1, totalPages]
			}
		}

		return pages
	}

	return (
		<div className="w-full items-center justify-center flex gap-8">
			<Button
				shape="round"
				size="icon-medium"
				onClick={() => {
					router.push(`${pathname}?page=${Number(page) - 1}`)
				}}
			>
				<Icons.chevronLeft />
			</Button>
			<div className="flex gap-2"></div>
			<Button
				shape="round"
				size="icon-medium"
				onClick={() => {
					router.push(`${pathname}?page=${Number(page) + 1}`)
				}}
			>
				<Icons.chevronRight />
			</Button>
		</div>
	)
}
