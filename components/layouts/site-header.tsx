import Link from 'next/link'
import { Input } from '../ui/input'
import { Menu, ExpandMore, Search, Person, Cart } from '../icons'
import { Button } from '../ui/button'
import { ButtonLink } from '../ui/button-link'
import ThemeSwitcher from './theme-toggle'

type Props = {
	user: boolean
}

export default function SiteHeader({ user }: Props) {
	return (
		<div className="flex items-center h-20 bg-surface-primary border-primary border-b px-10 justify-between gap-4">
			<div className="flex items-center gap-4">
				<Button variant="ghost" size="icon-medium">
					<Menu />
				</Button>
				<Link href="/" className="font-bold">
					Service
				</Link>
				<Button variant="ghost">
					Каталог
					<ExpandMore />
				</Button>
			</div>
			<Input icon={<Search />} shape="round" placeholder="Шукати" className="w-[400px]" />
			<div className="flex items-center gap-4">
				<ThemeSwitcher />
				<ButtonLink href="#">
					<Person />
					Увійти
				</ButtonLink>
				<Button variant="ghost" size="icon-medium">
					<Cart />
				</Button>
			</div>
		</div>
	)
}
