import React from 'react'
import styles from './App.module.css'
import { PageLayout } from './components/ui/page-layout'
import { Episode, Storyline, StorylineProps } from './components/storyline/Storyline' 

const testData: Episode[] = [
	{heading: 'Workplace 1', dates: '2022 - Ongoing', description: 'Did some work here. Was cool init.', link: {name: 'GOOGLE', url: 'google.com'}}, 
	{heading: 'Project 2', dates: 'October 2019', description: 'Bier trinken und Pizza essen.'},
]

function App() {

	return (
		<PageLayout>
			<h1>Welcome, Stranger!</h1>
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
			<Storyline episodes={testData} />
		</PageLayout>
	)
}

export default App
