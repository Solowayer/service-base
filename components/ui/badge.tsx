import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils/cn'

const badgeVariants = cva('inline-flex items-center rounded-full font-medium', {
	variants: {
		variant: {
			primary: 'border bg-primary text-foreground',
			accent: 'bg-accent text-foreground',
			positive: 'bg-positive text-foreground',
			warning: 'bg-warning text-foreground',
			danger: 'bg-danger text-foreground'
		},
		type: {
			default: 'px-2 py-0.5 gap-1',
			icon: 'p-1',
			dot: 'w-2.5 h-2.5'
		}
	},
	defaultVariants: {
		type: 'default',
		variant: 'primary'
	}
})

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, type, ...props }: BadgeProps) {
	return <div className={cn(badgeVariants({ variant, type }), className)} {...props} />
}

export { Badge, badgeVariants }
