'use client'

import { RatingButtons } from '@/components/rating-buttons'
import { RatingStars } from '@/components/rating-stars'
import React from 'react'

export default function Page() {
	return (
		<div>
			<RatingStars rating={4} />
			<RatingButtons onChange={value => console.log(value)} />
		</div>
	)
}
