'use client'

import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@/components/ui/combobox'
import React, { useState } from 'react'

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

export default function Page() {
	const [selectedValue, setSelectedValue] = useState(people[0])
	const [searchTerm, setSearchTerm] = useState<string>('')

	const filteredPeople =
		searchTerm === ''
			? people
			: people.filter(person => {
					return person.toLowerCase().includes(searchTerm.toLowerCase())
			  })

	return (
		<>
			<Combobox value={selectedValue} defaultValue={selectedValue}>
				<ComboboxInput value={searchTerm} onValueChange={setSearchTerm} />
				<ComboboxOptions>
					{filteredPeople?.map(item => (
						<ComboboxOption
							key={item}
							selected={item === selectedValue}
							onClick={() => {
								setSelectedValue(item)
							}}
						>
							{item}
						</ComboboxOption>
					))}
				</ComboboxOptions>
			</Combobox>
		</>
	)
}
