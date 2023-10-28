import { Icons } from '@/components/icons'
import { Shell } from '@/components/shells/shell'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ListItem } from '@/components/ui/list/list-item'
import { Separator } from '@/components/ui/separator'
import React from 'react'

export default function Page() {
	return (
		<Shell variant='centered'>
			<Card>
				<CardHeader className="gap-1">
					<CardTitle>Header</CardTitle>
					<CardDescription>Header description</CardDescription>
				</CardHeader>
				<CardContent>
					<ul className="flex flex-col gap-4">
						<ListItem
							startContent={<Icons.home className="h-6 w-6" />}
							endContent={
								<Button variant="ghost" shape="round">
									Add
								</Button>
							}
						>
							<div className="grid gap-1">
								<span>Text</span>
								<span className="text-secondary text-sm">Опис</span>
							</div>
						</ListItem>
						<Separator />
						<ListItem
							startContent={<Icons.cart className="h-6 w-6" />}
							endContent={
								<Button variant="ghost" shape="round">
									Add
								</Button>
							}
						>
							<div className="grid gap-1">
								<span>Text</span>
								<span className="text-secondary text-sm">Опис</span>
							</div>
						</ListItem>
					</ul>
				</CardContent>
				<CardFooter className="gap-2">
					<Button>Додати</Button>
					<Button variant="ghost">Скасувати</Button>
				</CardFooter>
			</Card>
		</Shell>
	)
}
