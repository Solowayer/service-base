'use client'

import { useState } from 'react'

export default function Home() {
	const [value, setValue] = useState<string>('')

	return (
		<main className="flex flex-col p-24">
			<div className="grid grid-cols-4 gap-2">
				<div className=""></div>
			</div>
		</main>
	)
}
