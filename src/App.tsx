import React from 'react'
import { PageLayout } from './components/ui/page-layout'
import { Episode, Storyline } from './components/storyline/Storyline'
import { Highlighted } from './components/ui/highlighted'

const testData: Episode[] = [
	{heading: 'Zühlke Group', dates: '2022 - Present', description: 'Mostly frontend development in an international IT group, specialising in React.js. AWS Certified Cloud Practitioner. Research for the Blockchain topic group. Based in Frankfurt am Main, Germany.'},
	{heading: 'Soulbonds.xyz', dates: 'October 2021 - August 2022', description: 'Working on the fullstack DApp - in a small, self-managed team of two developed frontend (React.js, Ethers.js), backend API (Node.js), and a unique EVM Smart Contract (Solidity, Hardhat.js, Foundry).', link: {name: 'soulbonds.xyz', url: 'https://www.soulbonds.xyz/'}},
	{heading: 'Jetbrains Research', dates: 'Summer 2020', description: 'A research project in the R&D unit of the dev tools colossus. Under the supervision developed a code dependency extraction tool, and studied how the obtained data can be user to streamline code review processes.', link: {name: 'Research preprint', url: 'https://arxiv.org/abs/2104.09473'}},
]

function App() {

	return (
		<PageLayout>
			<h1>Welcome, Stranger!</h1>
			<p>
				My name is Vlad Repinskiy, I am a <Highlighted>Fullstack developer</Highlighted> in the making.
			</p>
			<p>Name is Vlad. I am a self-learning (I learn fast though) solidity + web3 developer. I graduated <Highlighted>UCL with MSc in computer science</Highlighted> in 2021, and been exploring the space ever since.</p>
			<p>Even before university, I had experience with programming. Starting off with competitive programming in school left me with a foundation to build upon in low-level languages like C and C++.
			</p>
			<p>Uni projects taught me Java, Kotlin (I really prefer the latter) and Python well. More specifically, I have good experience with OOP development, various build/CI/CD systems, I understand JVM well and I can write good code. I have used python in diverse environments and use cases, for standalone apps and scripts, for making simple web APIs, and most importantly I worked quite a lot with <Highlighted>python notebooks, for data analysis, mining and retrieval</Highlighted> tasks. Frameworks like pandas, numpy, tensorflow, stuff like that.
			</p>
			<p>For some time, I been working on the basic skillset necessary for DeFi development: teaching myself <Highlighted>Solidity & EVM</Highlighted>, along with <Highlighted>JavaScript with all its blockchain dev toolset: hardhat, truffle, foundry, cast</Highlighted>. As a result, I managed to work/cofound closely two DeFi projects.  I am also really keen to capitalize on my understanding on architecture and low-level programming to add Rust to my skillset as soon as possible.
			</p>
			<p>I have plenty of experience in collaborative software development, and have a soft spot for nice products, clean solutions and analytics. Let&apos;s work!
			</p>
			<Storyline episodes={testData} />
		</PageLayout>
	)
}

export default App
