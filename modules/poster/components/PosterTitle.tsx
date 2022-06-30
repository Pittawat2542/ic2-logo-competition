import React from 'react';

type PosterTitleProps = {
	title: string;
};

const PosterTitle = ({ title }: PosterTitleProps) => {
	return (
		<h1 className='font-bold text-2xl inline-block mt-3 mb-2'>{title}</h1>
	);
};

export default PosterTitle;
