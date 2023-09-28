import Link from 'next/link'

export default function Home() {
	return (
		<div className="flex flex-col">
			<Link href="/modals">Modal etc</Link>
			<Link href="/table">Table Example</Link>
			<Link href="/calendar">Calendar</Link>
			<Link href="/select">Select Example</Link>
			<Link href="/toast">Toasts</Link>
			<Link href="/dropdown-menu">DropdownMenu</Link>
			<Link href="/checkbox">Checkbox</Link>
			<Link href="/radio-group">Radio Group</Link>
			<Link href="/badge">Badge</Link>
			<Link href="/switch">Switch</Link>
			<Link href="/tabs">Tabs</Link>
		</div>
	)
}
