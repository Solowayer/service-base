'use client'

import RatingStars from '@/components/rating-stars'
import StarButtons from '@/components/star-buttons'
import React from 'react'

export default function Page() {
	const [rating, setRating] = React.useState(10)

	return (
		<div>
			<RatingStars rating={4} />
			<StarButtons rating={rating} setRating={setRating} />
		</div>
	)
}
