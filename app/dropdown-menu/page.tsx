'use client'

import { Person } from '@/components/icons'
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
	DropdownMenuSubContent
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import React from 'react'

export default function Page() {
	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost">Show Dropdown menu</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<Separator />
					<DropdownMenuGroup>
						<DropdownMenuItem>
							<Person />
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
						<DropdownMenuCheckboxItem checked>Checkbox 1</DropdownMenuCheckboxItem>
						<DropdownMenuCheckboxItem>Checkbox 2</DropdownMenuCheckboxItem>
						<DropdownMenuCheckboxItem>Checkbox 3</DropdownMenuCheckboxItem>
					</DropdownMenuGroup>
					<Separator />
					<DropdownMenuGroup>
						<DropdownMenuRadioItem value={'Checkbox 1'}>Radio 1</DropdownMenuRadioItem>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	)
}
