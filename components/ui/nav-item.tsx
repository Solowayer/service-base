import { cn } from '@/lib/utils/cn'
import { VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import React from 'react'
import { menuItemStyles } from '@/components/ui/menu'

export interface NavItemProps
	extends React.ComponentPropsWithoutRef<typeof Link>,
		VariantProps<typeof menuItemStyles> {}

const NavItem = React.forwardRef<React.ElementRef<typeof Link>, NavItemProps>(
	({ className, href, offset, selected, children, ...props }, ref) => (
		<Link ref={ref} href={href} {...props}>
			<span className={cn(menuItemStyles({ offset, selected }), className)}>{children}</span>
		</Link>
	)
)
NavItem.displayName = 'NavItem'

export { NavItem }
