'use client'

import { Calendar } from '@/components/ui/calendar'
import React from 'react'
import { uk } from 'date-fns/locale'

export default function Page() {
	const [date, setDate] = React.useState<Date | undefined>(new Date())

	return (
		<div className='inline-flex'>
			<Calendar locale={uk} mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
		</div>
	)
}
