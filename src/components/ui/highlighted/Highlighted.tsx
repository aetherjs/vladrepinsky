import React from 'react'

type HighlightedProps = {
	children: JSX.Element | JSX.Element[] | string
}

export const Highlighted = ({children}: HighlightedProps) => {
	return (
		<span data-accent>
			{children}
		</span>
	)
}
