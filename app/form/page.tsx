'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { toast } from '@/components/ui/toast/use-toast'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const LEGAL_FORMS = ['ФОП', 'ТОВ']

const FormSchema = z.object({
	username: z.string().min(1, {
		message: 'Username must be at least 2 characters.'
	}),
	legalForms: z.string()
})

function ProfileForm() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema)
	})

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast({
			title: 'You did something',
			description: `UserName - ${data.username}, LegalForm - ${data.legalForms}`
		})
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-md">
				<FormField
					control={form.control}
					name="username"
					defaultValue=""
					render={({ field }) => (
						<FormItem className="flex flex-col">
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input
									placeholder={`${form.formState.errors.username ? '' : 'Вкажіть щось'}`}
									{...field}
									variant={`${form.formState.errors.username ? 'error' : 'primary'}`}
								/>
							</FormControl>
							{/* <FormDescription>This is description.</FormDescription> */}
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="legalForms"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Legal form</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Оберіть форму" />
									</SelectTrigger>
								</FormControl>
								<SelectContent className="w-full">
									{LEGAL_FORMS.map((item, index) => (
										<SelectItem key={index} value={item}>
											{item}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
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
