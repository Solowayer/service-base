'use client'

import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function Page() {
	return (
		<>
			<Select>
				<SelectTrigger className="w-[280px]">
					<SelectValue placeholder="Theme" />
				</SelectTrigger>
				<SelectContent position="popper">
					<SelectItem value="light">Light</SelectItem>
					<SelectItem value="dark">Dark</SelectItem>
					<SelectItem value="system">System</SelectItem>
					<SelectItem value="cringe">Cringe</SelectItem>
				</SelectContent>
			</Select>
		</>
	)
}
