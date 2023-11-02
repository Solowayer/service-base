'use client'

import { Shell } from '@/components/shells/shell'
import { ComboboxTest } from '@/components/ui/combobox-test'
import React from 'react'

const people = [
	'Анна Іванова',
	'Олексій Петренко',
	'Марія Сидоренко',
	'Віталій Григоренко',
	'Ірина Коваль',
	'Дмитро Семенов',
	'Ольга Ткаченко',
	'Павло Мельник',
	'Яна Павленко',
	'Михайло Шевченко',
	'Аліна Козак',
	'Ігор Білецький',
	'Наталія Лисенко',
	'Андрій Мороз',
	'Лариса Шевчук',
	'Олександр Ковальчук',
	'Тетяна Даниленко',
	'Роман Козлов',
	'Ніна Зайцева',
	'Євген Гордієнко',
	'Марина Лавренко',
	'Олесь Марченко',
	'Катерина Полякова',
	'Сергій Шульга',
	'Дарина Кузьменко',
	'Анатолій Савченко',
	'Лідія Тихонова',
	'Андрій Якименко',
	'Тамара Костенко',
	'Максим Ігнатьєв',
	'Валентина Федорова',
	'Юрій Коноваленко',
	'Світлана Бондаренко',
	'Артем Дорошенко',
	'Марія Гончарова',
	'Денис Зінченко',
	'Людмила Мельничук',
	'Володимир Федорчук',
	'Ангеліна Тимченко',
	'Олег Кравченко',
	'Галина Мазур',
	'Сергій Павлюченко',
	'Тетяна Гаврилюк',
	'Євгенія Михайленко',
	'Микола Соколов',
	'Оксана Литвиненко',
	'Арсен Марчук',
	'Софія Руденко',
	'Вікторія Жукова',
	'Максим Білоус'
]

const processors = [
	{ label: 'Intel Core i9-10900K', value: 'intel_core_i9_10900k' },
	{ label: 'AMD Ryzen 9 5900X', value: 'amd_ryzen_9_5900x' },
	{ label: 'Intel Core i7-10700K', value: 'intel_core_i7_10700k' },
	{ label: 'AMD Ryzen 7 5800X', value: 'amd_ryzen_7_5800x' },
	{ label: 'Intel Core i5-10600K', value: 'intel_core_i5_10600k' },
	{ label: 'AMD Ryzen 5 5600X', value: 'amd_ryzen_5_5600x' },
	{ label: 'Intel Core i3-10100', value: 'intel_core_i3_10100' },
	{ label: 'AMD Ryzen 3 3300X', value: 'amd_ryzen_3_3300x' },
	{ label: 'Intel Core i9-11900K', value: 'intel_core_i9_11900k' },
	{ label: 'AMD Ryzen 9 5950X', value: 'amd_ryzen_9_5950x' },
	{ label: 'Intel Core i7-11700K', value: 'intel_core_i7_11700k' },
	{ label: 'AMD Ryzen 7 5700X', value: 'amd_ryzen_7_5700x' },
	{ label: 'Intel Core i5-11400F', value: 'intel_core_i5_11400f' },
	{ label: 'AMD Ryzen 5 5400X', value: 'amd_ryzen_5_5400x' },
	{ label: 'Intel Core i3-12100', value: 'intel_core_i3_12100' },
	{ label: 'AMD Ryzen 3 3100', value: 'amd_ryzen_3_3100' },
	{ label: 'Intel Core i9-12600K', value: 'intel_core_i9_12600k' },
	{ label: 'AMD Ryzen 9 6900X', value: 'amd_ryzen_9_6900x' },
	{ label: 'Intel Core i7-12700K', value: 'intel_core_i7_12700k' },
	{ label: 'AMD Ryzen 7 6800X', value: 'amd_ryzen_7_6800x' }
]

export default function Page() {
	const [newValues, setNewValues] = React.useState<{ label: string; value: string }[]>([])
	const [newValue, setNewValue] = React.useState<{ label: string; value: string } | null>(null)

	console.log(newValue)

	return (
		<Shell className="max-w-[500px]">
			<form>
				<ComboboxTest
					mode="single"
					options={processors}
					value={newValue}
					setValue={setNewValue}
					onChange={newValue => console.log(newValue?.value)}
					placeholder="Виберіть процесор"
				/>
				<ComboboxTest
					mode="multiple"
					options={processors}
					values={newValues}
					setValues={setNewValues}
					placeholder="Виберіть процесор"
				/>
			</form>
		</Shell>
	)
}
