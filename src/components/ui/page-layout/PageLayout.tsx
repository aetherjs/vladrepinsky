import React, { useState } from 'react'
import { Footer } from '../../footer'
import { ToggleTheme } from '../../toggle-theme'

import styles from './PageLayout.module.css'

export type PageLayoutProps = {
	children: JSX.Element | JSX.Element[] | string
}

export const PageLayout = (props: PageLayoutProps) => {
	return (
		<div
			className={styles.pageLayout}
		>
			<ToggleTheme />
			<main className={styles.main}>
				{props.children}
			</main>
			<footer className={styles.footer}>
				<Footer />
			</footer>
		</div>
	)
}
