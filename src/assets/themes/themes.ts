type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

const Colors = {
	white: '#FFF',
	black: '#000',
	blue: '#0000FF',
	green: '#00FF00',
	yellow: '#FFFF00',
	red: '#FF0000',
} as const

export enum Themes {
	Light = 'Light',
	Dark = 'Dark',
	Clown = 'Clown',
}

export interface ThemeColors {
	background: Color
	text: Color
	accent: Color
}

export interface Theme {
	id: Themes
	next: Themes
	title: string,
	colors: ThemeColors
}

export const themes: Record<Themes, Theme> = {
	[Themes.Light]: {
		id: Themes.Light,
		next: Themes.Dark,
		title: '🌝',
		colors: {
			background: Colors.white,
			accent: Colors.blue,
			text: Colors.black,
		},
	},
	[Themes.Dark]: {
		id: Themes.Dark,
		next: Themes.Clown,
		title: '🌚',
		colors: {
			background: Colors.black,
			accent: Colors.green,
			text: Colors.white,
		},
	},
	[Themes.Clown]: {
		id: Themes.Clown,
		next: Themes.Light,
		title: '🤡',
		colors: {
			background: Colors.red,
			accent: Colors.yellow,
			text: Colors.white,
		},
	},
}
