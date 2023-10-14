import { cn } from '@/lib/utils/cn'
import { VariantProps, cva } from 'class-variance-authority'
import Link from 'next/link'
import React from 'react'

export const menuStyles = cva(['flex flex-col gap-0.5 border bg-primary rounded p-2 shadow-md z-[100] overflow-hidden'])

export const menuItemStyles = cva(
	[
		'relative flex gap-2 cursor-default items-center rounded p-2 hover:cursor-pointer outline-none focus:bg-interactive-hover hover:bg-interactive-hover data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
	],
	{
		variants: {
			offset: {
				true: 'pl-9'
			},
			selected: {
				true: 'bg-interactive-selected text-inverted pointer-events-none'
			}
		}
	}
)

export const menuItemIndicatorStyles = cva(['absolute right-2 flex items-center justify-center'])

export interface MenuItemProps
	extends React.ComponentPropsWithoutRef<typeof Link>,
		VariantProps<typeof menuItemStyles> {}

const NavItem = React.forwardRef<React.ElementRef<typeof Link>, MenuItemProps>(
	({ className, href, offset, selected, children, ...props }, ref) => (
		<Link ref={ref} href={href} {...props}>
			<span className={cn(menuItemStyles({ offset, selected }), className)}>{children}</span>
		</Link>
	)
)
NavItem.displayName = 'NavItem'

export { NavItem }
