import React from 'react'

export function Footer() {
	return (
		<footer>
			<ul>
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
