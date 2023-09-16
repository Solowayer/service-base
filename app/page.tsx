'use client'

import { Check } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { useState } from 'react'
import { uk } from 'date-fns/locale'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

export default function Home() {
	const [date, setDate] = useState<Date | undefined>(new Date())

	console.log(date)

	return (
		<main className="flex flex-col p-24">
			<div className="inline-flex">
				<Dialog>
					<DialogTrigger asChild>
						<Button>Open Dialog</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]" title={'Omg'} description="я дібіл">
						<Input />
						<Button type="submit">Save changes</Button>
					</DialogContent>
				</Dialog>
			</div>
		</main>
	)
}
