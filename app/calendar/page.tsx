'use client'

import { Calendar } from '@/components/ui/calendar'
import React from 'react'
import { uk } from 'date-fns/locale'
import { DateRange } from 'react-day-picker'
import { format } from 'date-fns'

const currentYear = new Date().getFullYear()
const startYear = 1900
const years: number[] = []

for (let year = startYear; year <= currentYear; year++) {
	years.push(year)
}

export default function Page() {
	const [date, setDate] = React.useState<Date>(new Date())
	const [year, setYear] = React.useState<number>(currentYear)
	const [range, setRange] = React.useState<DateRange | undefined>(undefined)

	const dates =
		range?.from && range.to
			? `${format(range.from, 'P')} - ${format(range.to, 'P')}`
			: range?.from
			? format(range.from, 'P')
			: ''

	const changeYear = (year: number) => {
		setYear(year)
		const newDate: Date = new Date(date)
		newDate.setFullYear(year)
		setDate(newDate)
	}

	return (
		<div className="inline-flex flex-col gap-4">
			<select value={year} onChange={e => changeYear(Number(e.target.value))}>
				{years.map(year => (
					<option key={year} value={year}>
						{year}
					</option>
				))}
			</select>
			<Calendar
				locale={uk}
				mode="range"
				numberOfMonths={2}
				selected={range}
				onSelect={setRange}
				month={date}
				// disabled={date => date < new Date()}
				className="rounded border"
			/>
			<div>{dates}</div>
		</div>
	)
}
