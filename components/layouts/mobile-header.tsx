import Link from 'next/link'
import { Input } from '../ui/input'

import { Button } from '../ui/button'
import { ButtonLink } from '../ui/button-link'
import { Icons } from '../icons'

type Props = {
	user: boolean
}

export default function SiteHeader({ user }: Props) {
	return (
		<div className="md:hidden flex items-center h-20 bg-surface-primary border-primary border-b px-4 justify-between gap-4">
			<div className="flex items-center gap-4">
				<Button variant="clear" size="icon-medium">
					<Icons.menu />
				</Button>
				<Link href="/" className="font-bold">
					Service
				</Link>
			</div>
			<Input icon={<Icons.search />} shape="round" placeholder="Шукати" className="w-full" />
			<div className="flex items-center gap-4">
				<ButtonLink href="#" size="icon-medium">
					<Icons.person />
				</ButtonLink>
				<Button variant="clear" size="icon-medium">
					<Icons.cartOutlined />
				</Button>
			</div>
		</div>
	)
}
