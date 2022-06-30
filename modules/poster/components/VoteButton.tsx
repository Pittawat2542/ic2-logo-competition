import React from 'react';

type VoteButtonProps = {
	posterID: number;
};

const VOTE_FORM_URL =
	'https://forms.gle/KhE8AS3T9Am9E8jA8';

const VoteButton = ({ posterID }: VoteButtonProps) => {
	return (
		<a className='w-full' onClick={(ev) => ev.stopPropagation()} href={VOTE_FORM_URL}>
			<button className='w-full bg-gray-900 border-2 border-gray-900 text-white p-2 px-5 rounded-md font-bold text-xl uppercase tracking-wider shadow-md hover:shadow-lg hover:text-black hover:bg-white transition-shadow transition-colors'>
				Vote
			</button>
		</a>
	);
};

export default VoteButton;
