import React from 'react'
import styles from './Footer.module.css'

const GITHUB_PROFILE_URL = 'https://github.com/aetherjs'

export function Footer() {
	return (
		<>
			<ul className={styles.links}>
				<li>Links</li>
				<li>
					<a
						target={'_blank'}
						rel={'noreferrer'}
						href={GITHUB_PROFILE_URL}
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
		</>
	)
}
