'use client'

import { Rating } from '@/components/rating'
import React from 'react'

export default function Page() {
	return (
		<div>
			<Rating readonly ratingValue={4} />
			<Rating
				onChange={value => console.log(value)}
				itemStyle="p-4 rounded"
				activeStarStyle="w-10 h-10"
				defaultStarStyle="w-10 h-10"
			/>
		</div>
	)
}
