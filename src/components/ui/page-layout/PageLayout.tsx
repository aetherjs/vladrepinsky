import React, { useState } from 'react'
import { Footer } from '../../footer/Footer'
import { ToggleTheme } from '../../toggle-theme'

import styles from './PageLayout.module.css'

export type PageLayoutProps = {
	children: JSX.Element | JSX.Element[] | string
}

export const PageLayout = (props: PageLayoutProps) => {
	const [themeClass, setThemeClass] = useState('')

	return (
		<div className={`${themeClass} ${styles.pageLayout}`}>
			<main className={styles.main}>
				{props.children}
			</main>
			<div className={styles.main}>
				<Footer />
				<ToggleTheme handleThemeChange={setThemeClass} />
			</div>
		</div>
	)
}
