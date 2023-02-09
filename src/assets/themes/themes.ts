import styles from './themes.module.css'

export enum Themes {
	Light = 'Light',
	Dark = 'Dark',
}

export interface Theme {
	id: Themes
	next: Themes
	title: string,
	cssClass: string,
}

export const themes: Record<Themes, Theme> = {
	[Themes.Light]: {
		id: Themes.Light,
		next: Themes.Dark,
		title: '🌝',
		cssClass: styles.light,
	},
	[Themes.Dark]: {
		id: Themes.Dark,
		next: Themes.Light,
		title: '🌚',
		cssClass: styles.dark,
	},
}
