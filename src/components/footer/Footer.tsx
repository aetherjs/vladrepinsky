import * as React from 'react'

import styles from './footer.module.css'

export function Footer() {
	return (
		<footer>
			<ul className={styles.links}>
				<li>Links</li>
				<li><a href="https://github.com/aetherjs">GitHub</a></li>
				<li>And</li>
				<li>Some</li>
				<li>More</li>
				<li>Links</li>
				<li>@aetherjs {new Date().getFullYear()}</li>
			</ul>
		</footer>
	)
}
