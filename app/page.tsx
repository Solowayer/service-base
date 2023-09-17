'use client'

import { Check } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerTrigger } from '@/components/ui/drawer'

import { useState } from 'react'
import { uk } from 'date-fns/locale'
import { Dialog, DialogBody, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

export default function Home() {
	const [date, setDate] = useState<Date | undefined>(new Date())

	console.log(date)

	return (
		<main className="flex flex-col p-24">
			<div className="flex gap-2">
				<Drawer>
					<DrawerTrigger>Open Drawer</DrawerTrigger>
					<DrawerContent side="left">
						<DrawerHeader
							title="Ahah"
							// description="Щоб відрахувати 14 пікселів від 1 rem (кореневого елемента HTML), вам потрібно визначити значення в rem, еквівалентне 14 пікселям. Для цього необхідно знати базовий розмір шрифту (font-size) для кореневого елемента."
						/>
						<DrawerBody>
							Сьогоднішній день розпочався яскравим сонячним ранком. Птахи співають на гілках дерев, а вітер легенько
							грає волоссям. Це чудовий день для нових пригод і відкриттів. Нехай ваша уява веде вас туди, де ви ніколи
							не були раніше!
						</DrawerBody>
						<DrawerFooter className="absolute bottom-0 w-full">
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
			</div>
		</main>
	)
}
