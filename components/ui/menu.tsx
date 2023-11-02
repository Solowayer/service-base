import { cva } from 'class-variance-authority'

export const menuStyles = cva(['flex flex-col gap-0.5 border bg-primary rounded p-2 shadow-md z-[100] overflow-hidden'])

export const menuItemStyles = cva(
	[
		'relative flex gap-2 cursor-default items-center rounded px-2.5 py-2 hover:cursor-pointer outline-none focus:bg-interactive-hover hover:bg-interactive-hover data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus-visible:ring-offset-white focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-2 focus:z-50'
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
