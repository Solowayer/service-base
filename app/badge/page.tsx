import { Check, Person } from '@/components/icons'
import { Badge } from '@/components/ui/badge'
import React from 'react'

export default function Page() {
	return (
		<div className="flex gap-4 items-start">
			<Badge variant="accent">99+</Badge>
			<Badge variant="positive" type="icon">
				<Check size="16" />
			</Badge>
			<Badge variant="accent" type="dot" />
		</div>
	)
}
