'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ButtonLink } from '@/components/ui/button-link'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Icons } from './icons'

type PaginationProps = {
	totalPages: number
}

const usePagination = (totalPages: number, page: number) => {
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

export default function Pagination({ totalPages }: PaginationProps) {
	const searchParams = useSearchParams()

	const page = searchParams.get('page') ?? '1'
	const per_page = searchParams.get('per_page') ?? '10'

	const pages = usePagination(totalPages, page)

	useEffect(() => {
		search ? setPage(parseInt(search)) : null
	}, [search, setPage])

	return (
		<div className="w-full items-center justify-center flex gap-8">
			<ButtonLink href={page !== 1 ? `?page=${Math.max(page - 1, 1)}` : '#'} shape="round" disabled={page === 1}>
				<Icons.chevronLeft />
			</ButtonLink>
			<div className="flex gap-2">
				{pages.map((p, index) => (
					<React.Fragment key={index}>
						{p === -1 ? (
							<span className="inline-flex items-center mx-2">...</span>
						) : (
							<Link href={`?page=${p}`} tabIndex={-1}>
								<Button
									variant="ghost"
									onClick={() => {
										if (p !== page) {
											setPage(p)
										}
									}}
									disabled={page === p}
								>
									{p}
								</Button>
							</Link>
						)}
					</React.Fragment>
				))}
			</div>
			<ButtonLink
				href={page < totalPages ? `?page=${page + 1}` : `?page=${page}`}
				shape="round"
				disabled={page >= totalPages}
			>
				<Icons.chevronRight />
			</ButtonLink>
		</div>
	)
}
