import React from 'react'
import MOCK_DATA_TABLE from './MOCK_DATA_TABLE.json'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { Badge } from '@/components/ui/badge'

export default function Page() {
	return (
		<div className="flex flex-col gap-4 w-full p-10">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>
							<Button variant="clear">
								Товар <Icons.chevronDown />
							</Button>
						</TableHead>
						<TableHead>ID</TableHead>
						<TableHead>Назва</TableHead>
						<TableHead>Категорія</TableHead>
						<TableHead>Ціна</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{MOCK_DATA_TABLE.map(product => (
						<TableRow key={product.id}>
							<TableCell>
								<span className="text-blue-500 hover:underline cursor-pointer">{product.product_name}</span>
							</TableCell>
							<TableCell>{product.id}</TableCell>
							<TableCell>{product.product_name}</TableCell>
							<TableCell>
								<Badge variant="accent">{product.department}</Badge>
							</TableCell>
							<TableCell>{product.price}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<div className="flex items-center justify-end gap-4">
				<Button variant="ghost" shape="round" size="icon-medium">
					<Icons.chevronLeft />
				</Button>
				100
				<Button variant="ghost" shape="round" size="icon-medium">
					<Icons.chevronRight />
				</Button>
			</div>
		</div>
	)
}
