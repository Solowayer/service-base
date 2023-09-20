'use client'

import { useToast } from '@/components/ui/toast/use-toast'
import { ToastAction } from '@/components/ui/toast/toast'
import React from 'react'
import { Button } from '@/components/ui/button'

export default function Page() {
	const { toast } = useToast()
	return (
		<div className="flex flex-col gap-4 justify-start items-start">
			<Button
				variant="ghost"
				onClick={() => {
					toast({
						variant: 'default',
						title: 'Ви видалили товар з обраного',
						description: 'Спробуйте ще',
						action: <ToastAction altText={'Cancel'}>Відмінити</ToastAction>
					})
				}}
			>
				Show Default Toast
			</Button>

			<Button
				variant="ghost"
				onClick={() => {
					toast({
						variant: 'accent',
						title: 'Новинки',
						description: 'Доступні нові функції',
						action: <ToastAction altText={'Watch'}>Переглянути</ToastAction>
					})
				}}
			>
				Show Accent Toast
			</Button>

			<Button
				variant="ghost"
				onClick={() => {
					toast({
						variant: 'positive',
						title: 'Успіх',
						description: 'Юзера додано'
					})
				}}
			>
				Show Positive Toast
			</Button>

			<Button
				variant="ghost"
				onClick={() => {
					toast({
						variant: 'danger',
						title: 'Виникла помилка',
						// description: 'Спробуйте ще',
						action: <ToastAction altText={'Try Again'}>Спробувати ще</ToastAction>
					})
				}}
			>
				Show Danger Toast
			</Button>
		</div>
	)
}
