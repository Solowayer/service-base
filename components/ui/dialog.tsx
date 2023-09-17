'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Close } from '../icons'
import { buttonStyles } from './button'
import { cn } from '@/lib/utils/cn'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogOverlay = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Overlay ref={ref} className="fixed inset-0 z-50 bg-black/40" {...props} />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogTitle = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => <DialogPrimitive.Title ref={ref} className="text-xl font-semibold" {...props} />)
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => <DialogPrimitive.Description ref={ref} className="text-secondary" {...props} />)
DialogDescription.displayName = DialogPrimitive.Description.displayName

interface DialogHeaderProps {
	title: string
	description?: string
}

const DialogHeader = ({
	className,
	title,
	description,
	...props
}: React.HTMLAttributes<HTMLDivElement> & DialogHeaderProps) => (
	<div className="flex items-start justify-between border-b gap-4 p-4 bg-surface-secondary" {...props}>
		<div className="flex flex-col gap-2">
			<DialogTitle>{title}</DialogTitle>
			{description && <DialogDescription>{description}</DialogDescription>}
		</div>
		<DialogPrimitive.Close
			className={cn(buttonStyles({ variant: 'ghost', shape: 'round', size: 'icon-small' }), 'absolute top-3 right-4')}
		>
			<Close />
		</DialogPrimitive.Close>
	</div>
)
DialogHeader.displayName = 'DialogHeader'

const DialogBody = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className="flex flex-col gap-4 p-4" {...props}>
		{children}
	</div>
)
DialogBody.displayName = 'DialogBody'

const DialogContent = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<DialogPortal>
		<DialogOverlay />
		<DialogPrimitive.Content
			ref={ref}
			className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border bg-surface-primary shadow-lg sm:rounded-lg md:w-full overflow-hidden"
			{...props}
		>
			<div className="max-h-[400px] overflow-y-auto">{children}</div>
		</DialogPrimitive.Content>
	</DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

export { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogHeader, DialogBody }
