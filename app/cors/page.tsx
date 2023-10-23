'use client'

import axios from 'axios'
import React from 'react'

export default function Page() {
	// : Promise<Result<Product>>
	const [productsData, setProductsData] = React.useState<Product[]>([])

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get<Result<Product>>('https://localhost:11838/api/Product', {
					params: {},
					withCredentials: true,
					headers: {
						'Content-Type': 'application/json'
					}
					// httpsAgent: agent
				})
				console.log(response.data)
				setProductsData(response.data.data)
			} catch (error) {
				console.error(error)
			}
		}

		fetchData()
	}, [])

	return (
		<div>
			{productsData?.map((p, index) => (
				<span key={index}>{p.productName}</span>
			))}
		</div>
	)
}
