import React from 'react'
import { HeadingDescription, Heading, HeadingTitle } from '@/components/layouts/page-heading'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'

export const TempLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
	return (
		<Link href={href} className="hover:underline">
			{children}
		</Link>
	)
}

export default function Home() {
	return (
		<div className="container flex flex-col gap-6 mt-10">
			<Heading separated>
				<div className="flex items-center justify-between">
					<HeadingTitle as="h2">Компоненти</HeadingTitle>
					<Button variant="ghost" shape="round">
						<Icons.add />
						Додати щось
					</Button>
				</div>
				<HeadingDescription>Всі компоненти</HeadingDescription>
			</Heading>
			<div className="flex flex-col">
				<TempLink href="modals">Modal etc</TempLink>
				<TempLink href="/table">Table Example</TempLink>
				<TempLink href="/calendar">Calendar</TempLink>
				<TempLink href="/select">Select Example</TempLink>
				<TempLink href="/toast">Toasts</TempLink>
				<TempLink href="/dropdown-menu">DropdownMenu</TempLink>
				<TempLink href="/checkbox">Checkbox</TempLink>
				<TempLink href="/radio-group">Radio Group</TempLink>
				<TempLink href="/badge">Badge</TempLink>
				<TempLink href="/switch">Switch</TempLink>
				<TempLink href="/tabs">Tabs</TempLink>
				<TempLink href="/table">Table</TempLink>
				<TempLink href="/combobox">Combobox</TempLink>
				<TempLink href="/card">Card</TempLink>
				<TempLink href="/pagination">Pagination</TempLink>
				<TempLink href="/form">Form</TempLink>
				<TempLink href="/tooltip">Tooltip</TempLink>
			</div>
		</div>
	)
}
