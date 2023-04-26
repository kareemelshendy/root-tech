/* eslint-disable @next/next/no-img-element */
import { About } from '@/components';
import { GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Link from 'next/link';

export default function NotFound() {
	const { t } = useTranslation();
	return (
		<>
			<Head>
				<title>I Root Tech | Not Found</title>
			</Head>
			<div className='h-screen flex items-center justify-center flex-col'>
				<img
					src='/images/404.jpg'
					alt='404'
					className='w-[300px] h-[300px]'
				/>
				<Link
					href={'/'}
					className='bg-colorPrimary  text-white py-[8px] w-[200px] rounded-default flex justify-center items-center font-semibold'>
					{t('common:back')}
				</Link>
			</div>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};
