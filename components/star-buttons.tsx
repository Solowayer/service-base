import React, { SetStateAction } from 'react'
import { Button } from './ui/button'
import { Icons } from './icons'

interface StarButtonsProps {
	rating: number
	setRating: React.Dispatch<SetStateAction<number>>
}

export default function StarButtons({ rating = 0, setRating }: StarButtonsProps) {
	const totalStars = 5

	const filledStars = Array.from({ length: Math.min(rating, totalStars) }, (_, index) => {
		const currentNumber = index + 1
		return (
			<Button key={index} size="icon-large" variant="clear" onClick={() => setRating(currentNumber)}>
				<Icons.starFilled size="large" className="text-positive" />
			</Button>
		)
	})

	const outlinedStars = Array.from({ length: Math.max(0, totalStars - rating) }, (_, index) => {
		const currentNumber = index + 1
		return (
			<Button key={index + rating} size="icon-large" variant="clear" onClick={() => setRating(currentNumber + rating)}>
				<Icons.starOutlined size="large" className="text-secondary" />
			</Button>
		)
	})

	console.log(rating)

	return (
		<div className="flex">
			{filledStars}
			{outlinedStars}
		</div>
	)
}
