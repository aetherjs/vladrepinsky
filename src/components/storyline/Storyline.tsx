import React from 'react'

export type Episode = {
    heading: string
    dates: string
    description: string
    link?: {
        name: string
        url: string
    }
}

export type StorylineProps = {
    episodes: Episode[]
}

export const Storyline = ({episodes}: StorylineProps) => {
	return (
		<div>
			{episodes.map((episode) => (
				<div key={episode.heading}>
					<h2>{episode.heading}</h2>
					<h3>{episode.dates}</h3>
					<p>{episode.description}</p>
					{episode.link && (<a href={episode.link?.url}>{episode.link?.name}</a>)}  
				</div>

			))}
		</div>
	)
}