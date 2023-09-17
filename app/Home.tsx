'use client'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerTrigger } from '@/components/ui/drawer'
import { useState } from 'react'
import { Dialog, DialogBody, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from '@/components/ui/alert-dialog'

export default function Home() {
	const [date, setDate] = useState<Date | undefined>(new Date())

	console.log(date)

	return (
		<main className="flex flex-col p-24">
			<div className="flex gap-2">
				<Drawer>
					<DrawerTrigger>Open Drawer</DrawerTrigger>
					<DrawerContent side="left">
						<DrawerHeader title="Ahah" />
						<DrawerBody>
							Сьогоднішній день розпочався яскравим сонячним ранком. Птахи співають на гілках дерев, а вітер легенько
							грає волоссям. Це чудовий день для нових пригод і відкриттів. Нехай ваша уява веде вас туди, де ви ніколи
							не були раніше!
						</DrawerBody>
						<DrawerFooter>
							<Button>Aza</Button>
							<Button>Aza</Button>
						</DrawerFooter>
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
							<div className="flex w-full gap-4 justify-end">
								<Button>Підтвердити</Button>
								<Button variant="ghost">Скасувати</Button>
							</div>
						</DialogBody>
					</DialogContent>
				</Dialog>
				<AlertDialog>
					<AlertDialogTrigger>Open</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogHeader />
						<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
						<AlertDialogDescription>
							This action cannot be undone. This will permanently delete your account and remove your data from our
							servers.
						</AlertDialogDescription>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction>Continue</AlertDialogAction>
					</AlertDialogContent>
				</AlertDialog>
			</div>
		</main>
	)
}
