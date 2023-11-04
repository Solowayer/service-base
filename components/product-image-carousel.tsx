'use client'

import * as React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { Icons } from './icons'
import { cn } from '@/lib/utils/cn'
import useEmblaCarousel, { type EmblaOptionsType } from 'embla-carousel-react'

interface ProductImageCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
	images: { url: string; title: string }[]
	options?: EmblaOptionsType
}

export function ProductImageCarousel({ images, className, options, ...props }: ProductImageCarouselProps) {
	const [selectedIndex, setSelectedIndex] = React.useState(0)
	const [emblaRef, emblaApi] = useEmblaCarousel((options = { loop: true }))
	const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
		containScroll: 'keepSnaps',
		dragFree: true
	})

	const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
	const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

	const onThumbClick = React.useCallback(
		(index: number) => {
			if (!emblaApi || !emblaThumbsApi) return
			emblaApi.scrollTo(index)
		},
		[emblaApi, emblaThumbsApi]
	)

	const onSelect = React.useCallback(() => {
		if (!emblaApi || !emblaThumbsApi) return
		setSelectedIndex(emblaApi.selectedScrollSnap())
		emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap())
	}, [emblaApi, emblaThumbsApi, setSelectedIndex])

	React.useEffect(() => {
		if (!emblaApi) return
		onSelect()
		emblaApi.on('reInit', onSelect)
		emblaApi.on('select', onSelect)
	}, [emblaApi, onSelect])

	if (images.length === 0) {
		return (
			<div
				aria-label="Product Placeholder"
				role="img"
				aria-roledescription="placeholder"
				className={cn('flex aspect-square h-full w-full flex-1 items-center justify-center bg-secondary', className)}
			>
				<Icons.starOutlined className="h-10 w-10" aria-hidden="true" />
			</div>
		)
	}

	return (
		<div className={cn('flex flex-col gap-4', className)} {...props}>
			<div className="relative overflow-hidden" ref={emblaRef}>
				<ul className="flex">
					{images.map((image, i) => {
						return (
							<li className={cn('relative aspect-square min-w-full')} key={i}>
								<Image src={image.url} alt={image.title} fill sizes="100vw" className={cn('object-contain rounded')} />
							</li>
						)
					})}
				</ul>
				<div className="hidden md:flex absolute top-1/2 left-2 right-2 justify-between">
					<Button size="icon-medium" shape="round" onClick={scrollPrev}>
						<Icons.chevronLeft />
					</Button>
					<Button size="icon-medium" shape="round" onClick={scrollNext}>
						<Icons.chevronRight />
					</Button>
				</div>
			</div>
			<div ref={emblaThumbsRef} className="overflow-hidden">
				<ul className="flex">
					{images.map((image, i) => {
						return (
							<li
								className={cn(
									'relative aspect-square min-w-[96px] md:min-w-[64px] opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-200',
									{
										'border-2 border-selected rounded opacity-100': selectedIndex === i
									}
								)}
								onClick={() => onThumbClick(i)}
								key={i}
							>
								<Image src={image.url} alt={image.title} fill className={cn('object-contain p-2')} />
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
