import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { ListItem } from '@/components/ui/list-item'
import React from 'react'

export default function Page() {
	return (
		<>
			<ul className="flex flex-col gap-2 p-4 border rounded w-[400px]">
				<ListItem
					title="Корзина"
					description="Something here"
					startContent={<Icons.cart />}
					endContent={
						<Button variant="ghost" shape="round">
							Змінити
						</Button>
					}
				/>
			</ul>
		</>
	)
}
