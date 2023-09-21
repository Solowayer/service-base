'use client'

import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'

export default function Page() {
	return (
		<>
			<div className="flex items-center space-x-2">
				<Checkbox id="terms" />
				<label htmlFor="terms" className="leading-none peer-disabled:cursor-not-allowed peer-disabled:text-disabled">
					Accept terms and conditions
				</label>
			</div>
		</>
	)
}
