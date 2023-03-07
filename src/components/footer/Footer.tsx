import React from 'react'
import { Link } from '../ui/link/Link'
import styles from './Footer.module.css'

const GITHUB_PROFILE_URL = 'https://github.com/aetherjs'

export function Footer() {
	return (
		<>
			<ul className={styles.links}>
				<li>Links</li>
				<li>
					<Link
						target={'_blank'}
						href={GITHUB_PROFILE_URL}
					>
						GitHub
					</Link>
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
