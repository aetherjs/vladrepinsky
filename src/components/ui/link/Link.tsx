import React from 'react'

type LinkProps = {
	children?: JSX.Element | JSX.Element[] | string
	href?: string
	target?: '_self' | '_blank' | '_top' | '_parent'
}

export const Link = (props: LinkProps) => {
	return (
		<a
			data-accent
			href={props.href}
			rel={'noreferrer noopener'}
			target={props.target}
		>
			{props.children}
		</a>
	)
}
