import React from 'react'
import styles from './Storyline.module.css'

export type Episode = {
	heading: string;
	dates: string;
	description: string;
	link?: {
		name: string;
		url: string;
	};
};

export type StorylineProps = {
	episodes: Episode[];
};

export const Storyline = ({ episodes }: StorylineProps) => {
	return (
		<div>
			{episodes.map((episode, index) => (
				<div key={episode.heading} className={styles.item}>
					<h2>{episode.heading}</h2>
					<h3>{episode.dates}</h3>
					<p>{episode.description}</p>
					{episode.link && <a href={episode.link?.url}>{episode.link?.name}</a>}
					{index !== episodes.length - 1 && <div className={styles.connector}></div>}
				</div>
			))}
		</div>
	)
}
