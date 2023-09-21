'use client'

import { RadioGroup } from '@/components/ui/radio-group'
import { RadioGroupItem } from '@/components/ui/radio-group'
import React from 'react'

export default function Page() {
	return (
		<RadioGroup defaultValue="comfortable" className="flex flex-col gap-1">
			<RadioGroupItem value="default" id="r1" label="Default" />
			<RadioGroupItem value="comfortable" id="r2" label="Comfortable" />
			<RadioGroupItem value="compact" id="r3" label="Compact" />
		</RadioGroup>
	)
}
