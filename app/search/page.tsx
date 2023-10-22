'use client'

import React from 'react'
import { Icons } from '@/components/icons'
import { Input } from '@/components/ui/input'

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
	const [searchTerm, setSearchTerm] = React.useState('')

	const filtered =
		searchTerm === ''
			? people
			: people.filter(p => {
					return p.toLowerCase().includes(searchTerm.toLowerCase())
			  })

	return (
		<div className="flex flex-col gap-4">
			<div>
				<Input
					icon={<Icons.search />}
					placeholder="Шукати"
					shape="round"
					defaultValue={''}
					onChange={e => setSearchTerm(e.target.value)}
				/>
			</div>
			<div className="flex flex-col">
				{filtered.map((p, index) => (
					<span key={index}>{p}</span>
				))}
			</div>
		</div>
	)
}
