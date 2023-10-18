import Pagination from '@/components/pagination-controls'
import axios from 'axios'
import React from 'react'
import https from 'https'

const agent = new https.Agent({
	rejectUnauthorized: false
})

type Info = {
	count: number
	pages: number
}

type Product = {
	id: string
	productName: string
	productDescription: string
	productPrice: string
}

type Result<T> = {
	info: Info
	data: T[]
}

async function fetchProducts({ page, perPage }: { page: string; perPage: string }): Promise<Result<Product>> {
	try {
		const response = await axios.get('https://localhost:4226/api/Product', {
			params: { page, perPage },
			withCredentials: true,
			headers: {
				'Content-Type': 'application/json'
			},
			httpsAgent: agent
		})
		return response.data
	} catch (error: any) {
		console.log(error)
		throw new Error(error?.response?.data?.message)
	}
}

export default async function Page({ searchParams }: { searchParams: { page: string } }) {
	const page = searchParams['page'] ?? '1'
	const products = await fetchProducts({ page, perPage: '10' })

	console.log(page)

	return (
		<>
			<div className="flex flex-col">
				{products.data.map(pr => (
					<span key={pr.id}>{pr.productName}</span>
				))}
			</div>
			<Pagination />
		</>
	)
}
