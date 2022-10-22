import React from 'react'

export interface ToggleThemeProps {
	test: number
}

export interface ToggleThemeState {
	test: number
}

export class ToggleTheme extends React.Component<ToggleThemeProps, ToggleThemeState> {

	constructor(props: ToggleThemeProps) {
		super(props)
		this.state = {test: props.test}

		this.increment = this.increment.bind(this)
	}

	increment() {
		this.setState((state) => {
			return {test: state.test + 1}
		})
	}

	render() {
		return (
			<>
				<div>{this.props.test}</div>
				<div>{this.state.test}</div>
				<button onClick={this.increment}>+</button>
			</>
		)
	}
}
