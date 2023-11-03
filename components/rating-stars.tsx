import React from 'react'
import { Icons } from './icons'

type Rating = 1 | 2 | 3 | 4 | 5

export default function RatingStars({ rating = 1, totalStars = 5 }: { rating: Rating; totalStars?: number }) {
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
