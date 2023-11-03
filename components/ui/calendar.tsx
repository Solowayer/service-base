'use client'

import * as React from 'react'
import { Icons } from '@/components/icons'
import { DayPicker } from 'react-day-picker'

import { cn } from '@/lib/utils/cn'
import { buttonStyles } from '@/components/ui/button'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			className={cn('border p-4 rounded bg-primary', className)}
			classNames={{
				months: 'flex gap-4',
				month: 'space-y-4',
				caption: 'flex relative items-center justify-center pt-2',
				caption_label: 'font-medium',
				nav: 'flex',
				nav_button: cn(buttonStyles({ variant: 'clear', shape: 'rectangle', size: 'icon-small' }), 'absolute'),
				nav_button_previous: 'left-1 top-0',
				nav_button_next: 'right-1 top-0',
				table: 'w-full border-collapse',
				head_row: 'flex',
				row: 'flex w-full mt-2',
				head_cell: 'w-10 h-10 flex items-center justify-center rounded',
				cell: 'w-10 h-10 flex items-center justify-center text-center font-normal p-0 relative',
				day: cn(
					buttonStyles({ variant: 'clear', shape: 'rectangle', size: 'icon-medium' }),
					'aria-selected:bg-interactive-selected aria-selected:text-inverted'
				),
				day_selected: 'bg-primary hover:bg-primary',
				day_today: 'bg-secondary',
				day_outside: 'opacity-50',
				day_disabled: 'opacity-50',
				day_range_middle:
					'aria-selected:bg-secondary aria-selected:text-primary rounded-none transition-all duration-400',
				day_hidden: 'invisible',
				...classNames
			}}
			components={{
				IconLeft: ({ ...props }) => <Icons.chevronLeft />,
				IconRight: ({ ...props }) => <Icons.chevronRight />
			}}
			{...props}
		/>
	)
}
Calendar.displayName = 'Calendar'

export { Calendar }
