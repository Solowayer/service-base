import React from 'react'

interface User {
	id: string
	userName: string
	lastName: string
	email: string
}

async function getData(): Promise<User[]> {
	const res = await fetch('https://1123-193-0-216-169.ngrok-free.app/GetUsers')

	if (!res.ok) {
		throw new Error('Fail')
	}

	return res.json()
}

export default async function Page() {
	const data = await getData()

	return (
		<div>
			{data.map(user => (
				<div key={user.id} className="font-bold text-red-500">
					{user.userName}
				</div>
			))}
		</div>
	)
}
