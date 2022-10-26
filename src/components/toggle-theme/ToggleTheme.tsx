import React, { useEffect, useState } from 'react'
import { themes } from '../../assets/themes'
import styles from './ToggleTheme.module.css'

export type ToggleThemeProps = {
	handleThemeChange: (cssClass: string) => void
}

export const ToggleTheme = (props: ToggleThemeProps) => {
	const [themeIndex, setThemeIndex] = useState(0)

	const getNextThemeIndex = (index: number) => index === themes.length - 1 ? 0 : index + 1
	const getNextTheme = (currIndex: number) => themes[getNextThemeIndex(currIndex)]
	const applyNextTheme = () => {
		setThemeIndex(getNextThemeIndex)
	}

	useEffect(() => {
		props.handleThemeChange(themes[themeIndex].class)
	}, [themeIndex])

	const {icon, name} = getNextTheme(themeIndex)

	return (
		<button
			className={styles.toggleTheme}
			onClick={applyNextTheme}
		>
			<img
				className={styles.toggleThemeIcon}
				alt={name}
				src={icon}
			/>
		</button>
	)
}
