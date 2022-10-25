import React from 'react'
import styles from './App.module.css'
import { PageLayout } from './components/ui/page-layout'

function App() {

	return (
		<PageLayout>
			<h1>Welcome</h1>
			<p>
				My name is Vlad Repinskiy, I am a
				&nbsp;<span className={styles.highlighted}>Fullstack developer</span>
				&nbsp;in the making.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim leo erat, non tempus urna imperdiet id.
				Pellentesque sit amet tristique sem. Sed eu <span className={styles.highlighted}>metus</span> at est venenatis pharetra. Sed in rutrum elit, euismod condimentum sem.
				Aliquam vel nunc ultrices dolor porttitor finibus. Donec bibendum molestie aliquet.
				Nunc vel tellus pretium, aliquet felis ultrices, suscipit magna.
				Nullam dignissim magna metus, at sagittis <span className={styles.highlighted}>ligula</span> feugiat vitae.
				Morbi vitae sem auctor, pretium quam ac, dignissim erat. Fusce a mauris metus.
				Fusce sed sem eu elit gravida congue non at diam. Aliquam interdum neque enim.
				Quisque et lacus iaculis, viverra libero interdum, ultricies.
			</p>
		</PageLayout>
	)
}

export default App
