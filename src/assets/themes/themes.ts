import sun from './sun.svg'
import moon from './moon.svg'
import styles from './themes.module.css'

export interface Theme {
	name: string,
	icon: string,
	class: string,
}

export const themes: Theme[] = [
	{
		name: 'Light',
		icon: sun,
		class: styles.bright,
	},
	{
		name: 'Dark',
		icon: moon,
		class: styles.dark,
	},
]
