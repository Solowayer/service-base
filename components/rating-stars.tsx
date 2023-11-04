import React from 'react'
import { Icons } from './icons'

export default function RatingStars({ rating = 1 }: { rating: number; totalStars?: number }) {
	const totalStars = 5

	const filledStars = Array.from({ length: rating }, (_, index) => (
		<Icons.starFilled key={`star-${index}`} className="text-positive" />
	))

	const outlinedStars = Array.from({ length: totalStars - rating }, (_, index) => (
		<Icons.starOutlined key={`star-${index}`} className="text-positive" />
	))

	return (
		<div className="flex">
			{filledStars}
			{outlinedStars}
		</div>
	)
}
