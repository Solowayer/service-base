'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
	const [date, setDate] = useState<Date | undefined>(new Date())

	console.log(date)

	return (
		<div className="flex flex-col">
			<Link href="/modals">Modal etc</Link>
			<Link href="/table">Table Example</Link>
			<Link href="/calendar">Calendar</Link>
			<Link href="/select">Select Example</Link>
		</div>
	)
}
