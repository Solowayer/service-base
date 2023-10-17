'use client'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuRadioItem,
	DropdownMenuSub,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
	DropdownMenuSubContent,
	DropdownMenuRadioGroup
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
import React from 'react'

type Checked = DropdownMenuCheckboxItemProps['checked']

export default function Page() {
	const [checked1, setChecked1] = React.useState<Checked>(true)
	const [checked2, setChecked2] = React.useState<Checked>(false)
	const [checked3, setChecked3] = React.useState<Checked>(false)

	const [position, setPosition] = React.useState('bottom')

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost">Show Dropdown menu</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="start">
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<Separator />
					<DropdownMenuGroup>
						<DropdownMenuItem>
							<Icons.person />
							Profile
						</DropdownMenuItem>
						<DropdownMenuSub>
							<DropdownMenuSubTrigger>Sub Menu</DropdownMenuSubTrigger>
							<DropdownMenuPortal>
								<DropdownMenuSubContent>
									<DropdownMenuItem>Sub Item 1</DropdownMenuItem>
									<DropdownMenuItem>Sub Item 1</DropdownMenuItem>
								</DropdownMenuSubContent>
							</DropdownMenuPortal>
						</DropdownMenuSub>
						<DropdownMenuItem>Billing</DropdownMenuItem>
						<DropdownMenuItem>Team</DropdownMenuItem>
						<DropdownMenuItem>Subscription</DropdownMenuItem>
					</DropdownMenuGroup>
					<Separator />
					<DropdownMenuGroup>
						<DropdownMenuCheckboxItem checked={checked1} onCheckedChange={setChecked1}>
							Checkbox 1
						</DropdownMenuCheckboxItem>
						<DropdownMenuCheckboxItem checked={checked2} onCheckedChange={setChecked2}>
							Checkbox 2
						</DropdownMenuCheckboxItem>
						<DropdownMenuCheckboxItem checked={checked3} onCheckedChange={setChecked3}>
							Checkbox 3
						</DropdownMenuCheckboxItem>
					</DropdownMenuGroup>
					<Separator />
					<DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
						<DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	)
}
