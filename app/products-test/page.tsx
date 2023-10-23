import React from 'react'
import axios from 'axios'
import https from 'https'
import { Pagination } from '@/components/pagination-controls'
import { SearchInput } from '@/components/search-input'
import { SortSelect } from '@/components/sort-select'
import { Shell } from '@/components/shells/shell'

const agent = new https.Agent({
	rejectUnauthorized: false
})

async function fetchData({ page, perPage, query, sort }: ProductQueryParams): Promise<Result<Product>> {
	try {
		const response = await axios.get('https://localhost:10049/api/Product', {
			params: { page, perPage, query, sort },
			withCredentials: true,
			headers: {
				'Content-Type': 'application/json'
			},
			httpsAgent: agent
		})
		return response.data
	} catch (error: any) {
		console.log(error)
		throw new Error(error)
	}
}

const sortOptions: SortOption<ProductSortOptions>[] = [
	{ title: 'Назва товару (A до Z)', value: 'name_asc' },
	{ title: 'Назва товару (Z до A)', value: 'name_desc' },
	{ title: 'Ціна (за зростанням)', value: 'price_asc' },
	{ title: 'Ціна (за спаданням)', value: 'price_desc' }
]

export default async function Page({
	searchParams
}: {
	searchParams: { page: string; query: string; sort: ProductSortOptions }
}) {
	const page = searchParams['page'] ?? '1'
	const query = searchParams['query'] ?? ''
	const sort = searchParams['sort'] ?? sortOptions[0].value

	const products = await fetchData({
		page,
		perPage: '4',
		query,
		sort
	})

	const totalPages = products.info.pages

	return (
		<Shell>
			<div className="flex items-center justify-between">
				<SearchInput query={query} />
				<SortSelect defaultValue={sortOptions[0].value} sortValue={sort} options={sortOptions} />
			</div>
			<div className="grid grid-cols-1 gap-4">
				{products.data.length
					? products.data.map((p, index) => (
							<div key={index} className="flex flex-col p-2 border h-[100px] gap-2">
								<span>{p.productName}</span>
								<span className="font-bold">{p.productPrice} грн</span>
								<span className="text-sm text-secondary">{p.productDescription}</span>
							</div>
					  ))
					: 'Товарів немає'}
			</div>
			{totalPages > 1 && (
				<Pagination totalPages={totalPages} page={page} sort={searchParams['sort']} query={searchParams['query']} />
			)}
		</Shell>
	)
}
