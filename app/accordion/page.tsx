import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function Page() {
	return (
		<>
			<Accordion type=''>
				<AccordionItem value="item-1">
					<AccordionTrigger>Важлива інформація</AccordionTrigger>
					<AccordionContent>
						На вулиці сонячний день, і птахи співають свої пісні. Люди поспішають на роботу, а діти грають у парку.
						Аромат кави лягає в повітря, а міський ринок розцвітає багатовіковими кольорами. У цьому місті завжди є
						якась цікава подія або пригода, яка чекає на своїх учасників.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>Характеристики</AccordionTrigger>
					<AccordionContent>
						У глибокому лісі велика частина природи залишилася недоторканою. Дерева височені і столітні, а під ними
						росте густий папороть. Лісові стежки завивають між деревами, і здається, ніхто не ходив цими місцями
						століттями. Звірі та птахи лунають своїми голосами, створюючи симфонію природи. Це місце, де можна відчути
						спокій і відвідати світ природи в його найприроднішому вигляді.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</>
	)
}
