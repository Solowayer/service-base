import React from 'react'
import MOCK_DATA_TABLE from './MOCK_DATA_TABLE.json'
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRowBody,
	TableRow
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, ExpandMore } from '@/components/icons'

export default function Page() {
	return (
		<div className="flex flex-col gap-4 w-full p-10">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Id</TableHead>
						<TableHead>Product Name</TableHead>
						<TableHead>Department</TableHead>
						<TableHead>
							<Button variant="ghost" size="small">
								Price
								<ExpandMore />
							</Button>
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{MOCK_DATA_TABLE.map(data => (
						<TableRowBody key={data.id}>
							<TableCell>{data.id}</TableCell>
							<TableCell>{data.product_name}</TableCell>
							<TableCell>{data.department}</TableCell>
							<TableCell>${data.price}</TableCell>
						</TableRowBody>
					))}
				</TableBody>
			</Table>
			<div className="flex items-center justify-end gap-4">
				<Button variant="ghost" shape="round" size="icon-medium">
					<ChevronLeft />
				</Button>
				100
				<Button variant="ghost" shape="round" size="icon-medium">
					<ChevronRight />
				</Button>
			</div>
		</div>
	)
}
