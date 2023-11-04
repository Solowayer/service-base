'use client'

import React from 'react'
import { Icons } from './icons'
import { cn } from '@/lib/utils/cn'

type RatingStyles = {
	containerStyle?: string
	itemStyle?: string
	defaultStarStyle?: string
	activeStarStyle?: string
}

interface RatingControlsProps extends RatingStyles {
	count?: number
	readonly?: boolean
	ratingValue?: number
	onChange?: (value: number) => void
}

export function Rating({
	count = 5,
	readonly,
	ratingValue,
	onChange,
	containerStyle,
	itemStyle,
	defaultStarStyle,
	activeStarStyle
}: RatingControlsProps) {
	const [hoverValue, setHoverValue] = React.useState<number | undefined>(undefined)
	const [value, setValue] = React.useState(ratingValue ?? 0)

	const handleMouseMove = (index: number) => {
		if (readonly) return
		setHoverValue(index + 1)
	}

	const handleMouseLeave = () => {
		if (readonly) return
		setHoverValue(undefined)
	}

	const handleRating = (index: number) => {
		if (readonly) return
		setValue(index + 1)
		if (onChange) {
			onChange(index + 1)
		}
	}

	const stars = Array.from({ length: count }, (_, index) => {
		const filled = hoverValue ? index < hoverValue : index < value
		return (
			<li
				key={`star_${index}`}
				onClick={() => handleRating(index)}
				onMouseEnter={() => handleMouseMove(index)}
				onMouseLeave={handleMouseLeave}
				className={cn('cursor-pointer', itemStyle)}
			>
				{filled ? (
					<Icons.starFilled className={cn('text-positive', activeStarStyle)} size="large" />
				) : (
					<Icons.starOutlined className={cn('text-secondary', defaultStarStyle)} size="large" />
				)}
			</li>
		)
	})

	return <ul className={cn('flex', containerStyle)}>{stars}</ul>
}
