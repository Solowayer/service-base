'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { toast } from '@/components/ui/toast/use-toast'
import { Textarea } from '@/components/ui/textarea'
import { Rating } from '@/components/rating'

const FormSchema = z.object({
	rating: z
		.number()
		.min(1, { message: 'Вкажіть рейтинг від 1 до 5' })
		.max(5, { message: 'Вкажіть рейтинг від 1 до 5' }),
	text: z.string().trim().min(1, {
		message: 'Напишіть щось пліз'
	})
})

function ProfileForm() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema)
	})

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast({
			description: (
				<pre className="p-4 w-[340px]">
					<code>{JSON.stringify(data, null, 2)}</code>
				</pre>
			)
		})
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-md">
				<FormField
					control={form.control}
					name="rating"
					defaultValue={0}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Рейтинг</FormLabel>
							<FormControl>
								<Rating {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="text"
					defaultValue=""
					render={({ field }) => (
						<FormItem className="flex flex-col">
							<FormLabel>Текст</FormLabel>
							<FormControl>
								<Textarea placeholder={`${form.formState.errors.text ? '' : 'Вкажіть щось'}`} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	)
}

export default ProfileForm
