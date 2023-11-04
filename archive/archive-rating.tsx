import React from 'react'
import { Icons } from '../components/icons'

export function Rating({ rating = 1 }: { rating: number }) {
	const count = 5

	const stars = Array.from({ length: count }, (_, index) => {
		const filled = index < rating

		return (
			<li key={`star-${index}`}>
				{filled ? (
					<Icons.starFilled className="text-positive" size="large" />
				) : (
					<Icons.starOutlined className="text-secondary" size="large" />
				)}
			</li>
		)
	})

	return <ul className="flex">{stars}</ul>
}
