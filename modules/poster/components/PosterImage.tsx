import Iframe from 'react-iframe';
import React from 'react';
import { getImageSize } from 'next/dist/server/image-optimizer';

type PosterImageProps = {
	imageURL?: string;
	pdfURL?: string;
};

const PosterImage = ({ imageURL, pdfURL }: PosterImageProps) => {
	if (!!imageURL) {
		return imageURL?.includes('drive.google') ||
			imageURL?.includes('images/') ? (
			<div className='w-full h-[300px] md:h-[150px]'>
				<img
					className='rounded-md w-full md:max-w-[300px] h-full object-contain m-auto'
					src={imageURL}
					alt='logo'
				/>
			</div>
		) : (
			<div className='h-80 flex items-center justify-center'>
				<p className='text-3xl text-center'>
					See the poster at{' '}
					<a className='text-blue-500 hover:underline' href={imageURL}>
						this
					</a>
				</p>
			</div>
		);
	} else if (!!pdfURL) {
		return (
			<div className='relative overflow-hidden w-full pt-[56.25%]'>
				<Iframe
					className='absolute top-0 left-0 bottom-0 right-0 w-full h-full'
					url={pdfURL!}
				></Iframe>
			</div>
		);
	} else {
		return <p>Poster not available.</p>;
	}
};

export default PosterImage;
