import React from 'react'

import styles from './toggle-theme.module.css'

export interface ToggleThemeProps {
	icon: string
	name: string
	handleClick: () => void
}

export class ToggleTheme extends React.Component<ToggleThemeProps> {

	constructor(props: ToggleThemeProps) {
		super(props)
	}

	render() {
		return (
			<button
				className={styles.toggleTheme}
				onClick={this.props.handleClick}>
				<img
					className={styles.toggleThemeIcon}
					src={this.props.icon}
				/>
			</button>
		)
	}
}
