import { cn } from '@/lib/utils/cn'
import React, { forwardRef } from 'react'

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
	title: string
	description?: string
	startContent?: React.ReactNode
	endContent?: React.ReactNode
	disabled?: boolean
}

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(function ListItem(
	{ title, description, startContent, endContent, disabled = false, className },
	ref
) {
	return (
		<li
			ref={ref}
			className={cn(
				`w-full flex justify-between items-center gap-6 ${disabled ? 'opacity-50 pointer-events-none' : null}`,
				className
			)}
		>
			<div className="flex items-center gap-4">
				{startContent}
				<div className="flex flex-col">
					<span className="font-medium">{title}</span>
					<span className="text-secondary text-sm">{description}</span>
				</div>
			</div>
			{endContent}
		</li>
	)
})
ListItem.displayName = 'ListItem'

export { ListItem }
