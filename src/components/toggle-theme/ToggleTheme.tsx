import React, { useEffect, useState } from 'react'
import { ThemeColors, Themes, themes } from '../../assets/themes'
import styles from './ToggleTheme.module.css'

const setPageColors = (colors: ThemeColors) => {
	const sheet = new CSSStyleSheet()
	sheet.replaceSync(`
			body {
				background: ${colors.background};
				color: ${colors.text};
			}
			[data-accent] {
				color: ${colors.accent};
			}
		`)
	document.adoptedStyleSheets = [sheet]
}

export const ToggleTheme = () => {
	const [theme, setTheme] = useState(themes[Themes.Light])

	const getNextTheme = () => {
		return themes[theme.next]
	}

	useEffect(() => {
		setPageColors(theme.colors)
	})

	const applyNextTheme = () => {
		setTheme(getNextTheme())
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
