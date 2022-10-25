import React from 'react'
import styles from './Footer.module.css'

export function Footer() {
	return (
		<footer>
			<ul className={styles.links}>
				<li>Links</li>
				<li>
					<a
						target={'_blank'}
						href="https://github.com/aetherjs"
						rel="noreferrer"
					>
						GitHub
					</a>
				</li>
				<li>And</li>
				<li>Some</li>
				<li>More</li>
				<li>Links</li>
				<li>@aetherjs {new Date().getFullYear()}</li>
			</ul>
		</footer>
	)
}
