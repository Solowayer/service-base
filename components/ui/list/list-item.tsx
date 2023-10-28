import { cn } from '@/lib/utils/cn'
import React, { forwardRef } from 'react'

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
	children: React.ReactNode
	startContent?: React.ReactNode
	endContent?: React.ReactNode
	disabled?: boolean
	as?: React.ElementType
}

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(function ListItem(
	{ children, startContent, endContent, disabled = false, className, as: Comp = 'li', ...props },
	ref
) {
	return (
		<Comp
			ref={ref}
			className={cn(
				`w-full flex justify-between items-center gap-6 ${disabled ? 'opacity-50 pointer-events-none' : null}`,
				className
			)}
			{...props}
		>
			<div className="flex items-center gap-4">
				{startContent}
				{children}
			</div>
			{endContent}
		</Comp>
	)
})
ListItem.displayName = 'ListItem'

export { ListItem }
