type ProductSortOptions = 'name_asc' | 'name_desc' | 'price_asc' | 'price_desc'

interface ProductQueryParams {
	page: string
	perPage: string
	query?: string
	sort?: ProductSortOptions
}

type ProductStatuses = ''

interface Product {
	id: string
	slug: string
	productName: string
	productDescription: string
	productPrice: number
	qty_in_stock: number
}
