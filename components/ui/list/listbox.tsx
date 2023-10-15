import { cn } from '@/lib/utils/cn'
import React from 'react'

const ListboxWrapper = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className={cn('w-full flex border rounded p-4', className)} {...props}>
			{children}
		</div>
	)
}
ListboxWrapper.displayName = 'ListboxWrapper'

export { ListboxWrapper }
