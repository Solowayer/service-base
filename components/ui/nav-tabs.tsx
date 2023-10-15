import { cn } from '@/lib/utils/cn'
import { VariantProps, cva } from 'class-variance-authority'
import Link from 'next/link'
import React from 'react'

const NavTabsList = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className={cn('flex items-center border-b', className)} {...props}>
			{children}
		</div>
	)
}
NavTabsList.displayName = 'NavTabsList'

export const tabStyles = cva(
	[
		'gap-2 inline-flex items-center justify-center whitespace-nowrap px-3 py-3 text-secondary font-medium hover:text-primary disabled:pointer-events-none disabled:opacity-50 border-b-2 border-transparent'
	],
	{
		variants: {
			selected: {
				true: 'border-b-2 border-selected text-primary'
			}
		}
	}
)

export interface TabProps extends React.ComponentPropsWithoutRef<typeof Link>, VariantProps<typeof tabStyles> {}

const NavTab = React.forwardRef<React.ElementRef<typeof Link>, TabProps>(
	({ className, href, selected, ...props }, ref) => (
		<Link ref={ref} href={href} className={cn(tabStyles({ selected }), className)} {...props} />
	)
)
NavTab.displayName = 'NavTab'

export { NavTab, NavTabsList }
