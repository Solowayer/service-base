'use client'

import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function Page() {
	const values = [
		{ title: 'За останній тиждень', value: 'week' },
		{ title: 'За останній місяць', value: 'month' },
		{ title: 'За останній рік', value: 'year' }
	]

	return (
		<>
			<Select defaultValue={values[0].value}>
				<SelectTrigger className="w-[280px]">
					<SelectValue />
				</SelectTrigger>
				<SelectContent position="popper">
					{values.map(v => (
						<SelectItem key={v.value} value={v.value}>
							{v.title}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</>
	)
}
