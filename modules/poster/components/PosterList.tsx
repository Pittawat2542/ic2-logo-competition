import Poster from './Poster';
import PosterType from '../Poster';
import React from 'react';

type PosterListProps = {
	posters: PosterType[];
	onClick: (posterId: number) => void;
};

const PosterList = ({ posters, onClick }: PosterListProps) => {
	return (
		<div className='grid grid-cols-2 md:grid-cols-4 gap-5 lg:grid-cols-6'>
			{posters.map((poster) => (
				<Poster
					className='col-span-2 grid-item'
					key={poster.id}
					poster={poster}
					onClick={onClick}
				/>
			))}
		</div>
	);
};

export default PosterList;
