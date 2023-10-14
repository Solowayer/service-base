import * as React from 'react'

import { cn } from '@/lib/utils/cn'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
	return (
		<textarea
			className={cn(
				'flex min-h-[80px] w-full bg-input-primary placeholder:text-secondary rounded border px-4 py-2 ring-offset-background outline-none focus:ring-offset-white focus:ring-black focus:ring-offset-2 focus:ring-2 focus:bg-input-primary-focus disabled:cursor-not-allowed disabled:opacity-50',
				className
			)}
			ref={ref}
			{...props}
		/>
	)
})
Textarea.displayName = 'Textarea'

export { Textarea }
