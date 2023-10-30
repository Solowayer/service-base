'use client'

import * as React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { Icons } from './icons'
import { cn } from '@/lib/utils/cn'

interface ProductImageCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
	images: { url: string; title: string }[]
}

export function ProductImageCarousel({ images, className, ...props }: ProductImageCarouselProps) {
	const [index, setIndex] = React.useState<number>(0)

	const goNext = () => {
		const isLastSlide = index === images.length - 1
		const newIndex = isLastSlide ? 0 : index + 1
		setIndex(newIndex)
	}

	const goPrev = () => {
		const isFirstSlide = index === 0
		const newIndex = isFirstSlide ? images.length - 1 : index - 1
		setIndex(newIndex)
	}

	return (
		<div className={cn('overflow-hidden', className)} {...props}>
			<ul className="flex bg-secondary">
				{images.map((image, i) => {
					return (
						<li
							className={cn('relative aspect-square min-w-full transition-all duration-200')}
							key={i}
							style={{ transform: `translateX(-${index * 100}%)` }}
						>
							<Image src={image.url} alt={image.title} fill sizes="100vw" className={cn('object-contain')} />
						</li>
					)
				})}
			</ul>
			<div className="flex">
				<Button size="icon-medium" onClick={goPrev}>
					<Icons.chevronLeft />
				</Button>
				<Button size="icon-medium" onClick={goNext}>
					<Icons.chevronRight />
				</Button>
			</div>
		</div>
	)
}

// const renderImagesArray = () => {
// 	const items = []

// 	for (let i = 1; i < images.length; i++) {}
// }

// React.useEffect(() => {}, [])
