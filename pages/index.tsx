import PosterType, { loadPostersFromJSON } from '../modules/poster/Poster';
import { useEffect, useState } from 'react';

import Head from 'next/head';
import Lightbox from 'react-image-lightbox';
import Loading from '../components/Loading';
import type { NextPage } from 'next';
import PosterList from '../modules/poster/components/PosterList';
import jsonPosters from '../data/posters.json';

const NO_POSTER_SELECTED = -1;

const Home: NextPage = () => {
	const [posters, setPosters] = useState<PosterType[]>([]);
	const [selectedPosterId, setSelectedPosterId] = useState(NO_POSTER_SELECTED);

	useEffect(() => {
		setPosters((_) => loadPostersFromJSON(jsonPosters));
	}, []);

	return (
		<div className='max-w-max m-auto'>
			<Head>
				<title>IC2 Logo Design</title>
			</Head>

			<header className='mt-10 mb-5 text-center'>
				<h1 className='text-5xl font-bold text-center mb-3'>
					IC2 Logo Design Competition
				</h1>
			</header>

			<div className='flex justify-center'>
				<hr className='mt-3 mb-5 w-1/2' />
			</div>

			{posters.length === 0 ? (
				<Loading />
			) : (
				<PosterList posters={posters} onClick={setSelectedPosterId} />
			)}

			<footer className='mt-10 p-10 text-center text-gray-500 text-md'>
				<p>
					Designed and Developed by{' '}
					<a
						className='font-bold hover:underline'
						href='https://petepittawat.dev/about'
					>
						Pittawat Taveekitworachai
					</a>
				</p>
				<p className='mb-5'>
					School of Information Technology, King Mongkut&apos;s University of
					Technology Thonburi
				</p>
				<img
					className='max-w-[350px] md:max-w-[500px] h-auto mx-auto'
					src='images/KMUTT+SIT.png'
					alt='SIT, KMUTT Logo'
				/>
			</footer>

			{selectedPosterId !== NO_POSTER_SELECTED && (
				<Lightbox
					mainSrc={
						posters.find((poster) => poster.id === selectedPosterId)
							?.imageURL || ''
					}
					onImageLoad={() => {
            window.dispatchEvent(new Event('resize'));
          }}
					onCloseRequest={() => setSelectedPosterId(NO_POSTER_SELECTED)}
				/>
			)}
		</div>
	);
};

export default Home;
