import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

import React from 'react'

export default function Page() {
	return (
		<div>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>Hover</TooltipTrigger>
					<TooltipContent>
						<Button variant="clear" size="small">
							Add to lib
						</Button>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	)
}
