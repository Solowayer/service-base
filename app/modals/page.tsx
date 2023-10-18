'use client'

import { Button, buttonStyles } from '@/components/ui/button'
import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerTrigger } from '@/components/ui/drawer'
import { Dialog, DialogBody, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogShell,
	AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Shell } from '@/components/shells/shell'
import { Icons } from '@/components/icons'
import { useState } from 'react'
import { Input } from '@/components/ui/input'

export default function Home() {
	const [openDrawer, setOpenDrawer] = useState(false)

	return (
		<main className="flex flex-col p-24">
			<div className="flex gap-2">
				<Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
					<DrawerTrigger>Open Drawer</DrawerTrigger>
					<DrawerContent side="bottom" className="h-full">
						<div className="absolute right-4 top-4">
							<Button shape="round" size="icon-medium" variant="clear" onClick={() => setOpenDrawer(false)}>
								<Icons.close />
							</Button>
						</div>
						{/* <DrawerHeader title="Ahah" /> */}
						<DrawerBody>
							<Shell>
								<div>
									<Button variant="ghost" shape="round" onClick={() => setOpenDrawer(false)}>
										<Icons.chevronLeft />
										Назад
									</Button>
								</div>
								<Input />
								<Input />
								Сьогоднішній день розпочався яскравим сонячним ранком. Птахи співають на гілках дерев, а вітер легенько
								грає волоссям. Це чудовий день для нових пригод і відкриттів. Нехай ваша уява веде вас туди, де ви
								ніколи не були раніше!
							</Shell>
						</DrawerBody>
						{/* <DrawerFooter>
							<Button variant="ghost">Скасувати</Button>
							<Button>Підтвердити</Button>
						</DrawerFooter> */}
					</DrawerContent>
				</Drawer>
				<Dialog>
					<DialogTrigger>Show Dialog</DialogTrigger>
					<DialogContent>
						<DialogHeader
							title="Ahah"
							description="Щоб відрахувати 14 пікселів від 1 rem (кореневого елемента HTML), вам потрібно визначити значення в rem, еквівалентне 14 пікселям. Для цього необхідно знати базовий розмір шрифту (font-size) для кореневого елемента."
						/>
						<DialogBody>
							Сьогоднішній день розпочався яскравим сонячним ранком. Птахи співають на гілках дерев, а вітер легенько
							грає волоссям. Це чудовий день для нових пригод і відкриттів. Нехай ваша уява веде вас туди, де ви ніколи
							не були раніше!
						</DialogBody>
						<DialogFooter>
							<Button variant="ghost">Скасувати</Button>
							<Button>Підтвердити</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
				<AlertDialog>
					<AlertDialogTrigger>Open Alert Dialog</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogShell
							title="Ви точно дурачок?"
							description="Якщо ви вкажете що ви дурачок, то вам випишуть справку"
						/>
						<AlertDialogFooter>
							<AlertDialogCancel>Скасувати</AlertDialogCancel>
							<AlertDialogAction className={buttonStyles({ variant: 'primary' })}>Підтвердити</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</div>
		</main>
	)
}
