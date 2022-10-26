import React, { useState } from 'react'
import { Footer } from '../../footer'
import { ToggleTheme } from '../../toggle-theme'

import styles from './PageLayout.module.css'

export type PageLayoutProps = {
	children: JSX.Element | JSX.Element[] | string
}

export const PageLayout = (props: PageLayoutProps) => {
	const [themeClass, setThemeClass] = useState('')

	return (
		<div className={`${themeClass} ${styles.pageLayout}`}>
			<ToggleTheme handleThemeChange={setThemeClass} />
			<main className={styles.main}>
				{props.children}
			</main>
			<div className={styles.main}>
				<Footer />
			</div>
		</div>
	)
}
