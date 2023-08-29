import React, { forwardRef } from 'react'

interface IGridProps extends React.HTMLProps<HTMLDivElement> {
	columns: string
	gap?: string
	children: React.ReactNode
}

export const Grid = forwardRef<HTMLDivElement, IGridProps>(({ columns, gap, children, ...rest }, ref) => {
	return (
		<div className={`grid ${columns && `grid-cols-${columns}`} gap-${gap}`} ref={ref} {...rest}>
			{children}
		</div>
	)
})
Grid.displayName = 'Grid'
