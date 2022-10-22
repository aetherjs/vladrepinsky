import React from 'react'
import './App.css'
import { Footer } from './components/footer/Footer'

function App() {
	return (
		<div className="App">
			<div className="App-welcome">
				<p>Welcome.</p>
				<p>My name is Vlad Repinskiy, I am a <span style={{color: '#FF0000'}}>Fullstack developer</span> in the making.</p>
				<p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim leo erat, non tempus urna imperdiet id.
          Pellentesque sit amet tristique sem. Sed eu <span style={{color: '#FF0000'}}>metus</span> at est venenatis pharetra. Sed in rutrum elit, euismod condimentum sem.
          Aliquam vel nunc ultrices dolor porttitor finibus. Donec bibendum molestie aliquet.
          Nunc vel tellus pretium, aliquet felis ultrices, suscipit magna.
          Nullam dignissim magna metus, at sagittis <span style={{color: '#FF0000'}}>ligula</span> feugiat vitae.
          Morbi vitae sem auctor, pretium quam ac, dignissim erat. Fusce a mauris metus.
          Fusce sed sem eu elit gravida congue non at diam. Aliquam interdum neque enim.
          Quisque et lacus iaculis, viverra libero interdum, ultricies.
				</p>
				<Footer></Footer>
			</div>
		</div>
	)
}

export default App
