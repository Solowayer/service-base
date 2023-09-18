'use client'

import { ColumnDef } from '@tanstack/react-table'

export type Customer = {
	id: number
	first_name: string
	last_name: string
	email: string
}

export const columns: ColumnDef<Customer>[] = [
	{
		accessorKey: 'id',
		header: 'id'
	},
	{
		accessorKey: 'first_name',
		header: 'First Name'
	},
	{
		accessorKey: 'last_name',
		header: 'Last Name'
	},
	{
		accessorKey: 'email',
		header: 'Email'
	}
]
