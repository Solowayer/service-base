import { Icons } from '@/components/icons'
import { Badge } from '@/components/ui/badge'
import React from 'react'

export default function Page() {
	return (
		<div className="flex gap-4 items-start">
			<Badge variant="accent">99+</Badge>
			<Badge variant="positive" type="icon">
				<Icons.check />
			</Badge>
			<Badge variant="accent" type="dot" />
		</div>
	)
}
