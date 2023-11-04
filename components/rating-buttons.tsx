'use client'

import React from 'react'
import { Icons } from './icons'

interface RatingButtonsProps {
	count?: number
	onChange: (value: number) => void
}

export function RatingButtons({ count = 5, onChange }: RatingButtonsProps) {
	const [hoverValue, setHoverValue] = React.useState<number | undefined>(undefined)
	const [rating, setRating] = React.useState(0)

	const handleMouseMove = (index: number) => {
		setHoverValue(index + 1)
	}

	const handleMouseLeave = () => {
		setHoverValue(undefined)
	}

	const handleRating = (index: number) => {
		setRating(index + 1)
		if (onChange) {
			onChange(index + 1)
		}
	}

	const stars = Array.from({ length: count }, (_, index) => {
		const filled = hoverValue ? index < hoverValue || index < rating : null 
		return (
			<li
				key={`star_${index}`}
				onClick={() => handleRating(index)}
				onMouseEnter={() => handleMouseMove(index)}
				onMouseLeave={handleMouseLeave}
			>
				{filled ? <Icons.starFilled className="text-positive" /> : <Icons.starOutlined className="text-secondary" />}
			</li>
		)
	})

	return <ul className="flex">{stars}</ul>
}
