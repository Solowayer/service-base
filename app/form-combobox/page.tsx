'use client'

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { toast } from '@/components/ui/toast/use-toast'
import { Combobox } from '@/components/ui/combobox'

const processors = [
	{ label: 'Intel Core i9-10900K', value: 'intel_core_i9_10900k' },
	{ label: 'AMD Ryzen 9 5900X', value: 'amd_ryzen_9_5900x' },
	{ label: 'Intel Core i7-10700K', value: 'intel_core_i7_10700k' },
	{ label: 'AMD Ryzen 7 5800X', value: 'amd_ryzen_7_5800x' },
	{ label: 'Intel Core i5-10600K', value: 'intel_core_i5_10600k' },
	{ label: 'AMD Ryzen 5 5600X', value: 'amd_ryzen_5_5600x' },
	{ label: 'Intel Core i3-10100', value: 'intel_core_i3_10100' }
]

const memory = [
	{ label: '32GB', value: '32' },
	{ label: '16GB', value: '16' },
	{ label: '64GB', value: '64' },
	{ label: '8GB', value: '8' },
	{ label: '128GB', value: '128' },
	{ label: '4GB', value: '4' },
	{ label: '256GB', value: '256' },
	{ label: '2GB', value: '2' },
	{ label: '512GB', value: '512' },
	{ label: '1GB', value: '1' }
]

const FormSchema = z.any()

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
					name="processor"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Рейтинг</FormLabel>
							<FormControl>
								<Combobox
									mode="single"
									options={processors}
									value={field.value}
									setValue={field.onChange}
									placeholder="Виберіть процесор"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="memory"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Рейтинг</FormLabel>
							<FormControl>
								<Combobox
									mode="single"
									options={memory}
									value={field.value}
									setValue={field.onChange}
									placeholder="Виберіть процесор"
								/>
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
