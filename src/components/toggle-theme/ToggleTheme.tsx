import React, { useState } from 'react'
import { Themes, themes } from '../../assets/themes'
import styles from './ToggleTheme.module.css'

export type ToggleThemeProps = {
	changeTheme: (cssClass: string) => void
}

export const ToggleTheme = (props: ToggleThemeProps) => {
	const [theme, setTheme] = useState(themes[Themes.Light])

	const getNextTheme = () => {
		return themes[theme.next]
	}

	const applyNextTheme = () => {
		setTheme(getNextTheme())
		props.changeTheme(getNextTheme().cssClass)
	}

	return (
		<button
			className={styles.toggleTheme}
			onClick={applyNextTheme}
		>
			{getNextTheme().title}
		</button>
	)
}
