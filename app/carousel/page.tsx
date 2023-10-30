import { ProductImageCarousel } from '@/components/carousel'
import { Shell } from '@/components/shells/shell'
import React from 'react'

const images = [
	{ url: 'https://content1.rozetka.com.ua/goods/images/big/284920757.jpg', title: 'Image 1' },
	{ url: 'https://content.rozetka.com.ua/goods/images/big/284920766.jpg', title: 'Image 2' },
	{ url: 'https://content2.rozetka.com.ua/goods/images/big/284920769.jpg', title: 'Image 3' },
	{ url: 'https://content.rozetka.com.ua/goods/images/big/284920783.jpg', title: 'Image 4' }
]

export default function Page() {
	return (
		<Shell>
			<ProductImageCarousel className="w-full md:w-1/2" images={images} />
		</Shell>
	)
}
