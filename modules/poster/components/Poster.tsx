import PosterImage from '../components/PosterImage';
import PosterType from '../Poster';
import React from 'react';
import VoteButton from './VoteButton';

type PosterProps = {
	poster: PosterType;
	className: string;
	onClick: (posterId: number) => void;
};

const Poster = ({ poster, className, onClick }: PosterProps) => {
	return (
		<div
			onClick={() => onClick(poster.id)}
			className={`flex flex-col justify-between max-w-[600px] w-full p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow ${className} mx-auto mt-5 cursor-pointer`}
		>
			<div>
				<PosterImage imageURL={poster.imageURL} pdfURL={poster.pdfURL} />
				<div className='flex justify-between items-center mb-5'>
					<h1 className='font-bold text-2xl inline-block mt-3 mb-2'>
						Logo #{poster.id}
					</h1>
				</div>
			</div>
			<div className='flex justify-between gap-3'>
				<VoteButton posterID={poster.id} />
			</div>
		</div>
	);
};

export default Poster;
