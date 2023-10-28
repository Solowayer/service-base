import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils/cn'
import { Separator } from '@/components/ui/separator'

interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
	as?: React.ElementType
	separated?: boolean
}

function Heading({ className, children, as: Comp = 'section', separated = false, ...props }: HeadingProps) {
	return (
		<Comp className={cn('grid gap-1', className)} {...props}>
			{children}
			{separated ? <Separator className="mt-2.5" /> : null}
		</Comp>
	)
}

const headingVariants = cva('font-bold leading-tight tracking-light', {
	variants: {
		size: {
			default: 'text-xl md:text-2xl',
			md: 'text-2xl md:text-3xl',
			lg: 'text-3xl md:text-4xl',
			xl: 'text-4xl md:text-5xl'
		}
	},
	defaultVariants: {
		size: 'default'
	}
})

interface HeadingTitleProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

function HeadingTitle({ className, size, as: Comp = 'h2', ...props }: HeadingTitleProps) {
	return <Comp className={cn(headingVariants({ size, className }))} {...props} />
}

const descriptionVariants = cva('max-w-[750px] text-secondary', {
	variants: {
		size: {
			default: 'text-md sm:text-lg',
			lg: 'text-lg sm:text-xl'
		}
	},
	defaultVariants: {
		size: 'default'
	}
})

interface HeadingDescriptionProps
	extends React.HTMLAttributes<HTMLParagraphElement>,
		VariantProps<typeof descriptionVariants> {
	as?: React.ElementType
}

function HeadingDescription({ className, as: Comp = 'p', size, ...props }: HeadingDescriptionProps) {
	return <Comp as="p" className={cn(descriptionVariants({ size, className }))} {...props} />
}

export { Heading, HeadingTitle, HeadingDescription }
