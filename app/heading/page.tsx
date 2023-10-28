import { Icons } from '@/components/icons'
import { Shell } from '@/components/shells/shell'
import { Button } from '@/components/ui/button'
import { Heading, HeadingDescription, HeadingTitle } from '@/components/ui/heading'
import React from 'react'

export default function Page() {
	return (
		<Shell>
			<Heading separated>
				<HeadingTitle as="h1" size="default">
					Title
				</HeadingTitle>
				<HeadingDescription size="default">Description</HeadingDescription>
			</Heading>
			<Heading separated>
				<div className="flex items-center justify-between">
					<div className="grid gap-1">
						<HeadingTitle>Title</HeadingTitle>
						<HeadingDescription>Description</HeadingDescription>
					</div>
					<Button variant="ghost" shape="round">
						<Icons.add />
						Add
					</Button>
				</div>
			</Heading>
		</Shell>
	)
}
