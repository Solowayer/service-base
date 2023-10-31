'use client'

import * as React from 'react'
import Image from 'next/image'
import { Button } from '../components/ui/button'
import { Icons } from '../components/icons'
import { cn } from '@/lib/utils/cn'

interface ProductImageCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
	images: { url: string; title: string }[]
}

export function ProductImageCarousel({ images, className, ...props }: ProductImageCarouselProps) {
	const [index, setIndex] = React.useState<number>(0)
	const imageRef = React.useRef<HTMLUListElement>(null)
	const [touchStart, setTouchStart] = React.useState<number>(0)
	const [touchEnd, setTouchEnd] = React.useState<number>(0)

	const handleTouchStart = (event: React.TouchEvent) => {
		setTouchStart(event.touches[0].clientX)
	}

	const handleTouchMove = (event: React.TouchEvent) => {
		setTouchEnd(event.touches[0].clientX)
	}

	const handleTouchEnd = () => {
		if (touchStart - touchEnd > 150) {
			goNext()
		}

		if (touchStart - touchEnd < -150) {
			goPrev()
		}
	}

	const goNext = () => {
		if (imageRef.current) {
			const nextIndex = (index + 1) % images.length
			const transition = nextIndex === 0 ? 'none' : 'transform 0.4s ease-in-out'
			if (imageRef.current.style) {
				imageRef.current.style.transition = transition
				imageRef.current.style.transform = `translateX(-${nextIndex * 100}%)`
			}
			setIndex(nextIndex)
		}
	}

	const goPrev = () => {
		if (imageRef.current) {
			const prevIndex = (index - 1 + images.length) % images.length
			const transition = index === 0 ? 'none' : 'transform 0.4s ease-in-out'
			if (imageRef.current.style) {
				imageRef.current.style.transition = transition
				imageRef.current.style.transform = `translateX(-${prevIndex * 100}%)`
			}
			setIndex(prevIndex)
		}
	}

	const changeImage = (newIndex: number) => {
		if (imageRef.current) {
			imageRef.current.style.transform = `translateX(-${newIndex * 100}%)`
		}
		setIndex(newIndex)
	}

	return (
		<div className={cn('overflow-hidden flex flex-col gap-4', className)} {...props}>
			<div className="relative">
				<ul
					className="flex"
					ref={imageRef}
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
				>
					{images.map((image, i) => {
						return (
							<li className={cn('relative aspect-square min-w-full')} key={i}>
								<Image
									src={image.url}
									alt={image.title}
									fill
									sizes="100vw"
									className={cn('object-contain p-4 bg-secondary rounded')}
								/>
							</li>
						)
					})}
				</ul>
				<div className="absolute flex top-1/2 left-2 right-2 justify-between">
					<Button size="icon-medium" onClick={goPrev} shape="round">
						<Icons.chevronLeft />
					</Button>
					<Button size="icon-medium" onClick={goNext} shape="round">
						<Icons.chevronRight />
					</Button>
				</div>
			</div>
			<ul className="flex overflow-hidden">
				{images.map((image, i) => {
					return (
						<li
							className={cn('relative aspect-square min-w-[64px] hover:opacity-70 cursor-pointer', {
								'border border-selected rounded': index === i
							})}
							onClick={() => changeImage(i)}
							key={i}
						>
							<Image src={image.url} alt={image.title} fill className={cn('object-contain p-2')} />
						</li>
					)
				})}
			</ul>
		</div>
	)
}
