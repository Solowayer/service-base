import Link from 'next/link'
import { Input } from '../ui/input'

import { Button } from '../ui/button'
import { ButtonLink } from '../ui/button-link'
import ThemeSwitcher from './theme-toggle'
import { Icons } from '../icons'

type Props = {
	user: boolean
}

export default function SiteHeader({ user }: Props) {
	return (
		<div className="flex items-center h-20 bg-surface-primary border-primary border-b px-10 justify-between gap-4">
			<div className="flex items-center gap-4">
				<Button variant="clear" size="icon-medium">
					<Icons.menu />
				</Button>
				<Link href="/" className="font-bold">
					Service
				</Link>
				<Button variant="ghost">
					Каталог
					<Icons.chevronDown />
				</Button>
			</div>
			<Input icon={<Icons.search />} shape="round" placeholder="Шукати" className="w-[400px]" />
			<div className="flex items-center gap-4">
				<ThemeSwitcher />
				<ButtonLink href="#">
					<Icons.person />
					Увійти
				</ButtonLink>
				<Button variant="clear" size="icon-medium">
					<Icons.cart />
				</Button>
			</div>
		</div>
	)
}
