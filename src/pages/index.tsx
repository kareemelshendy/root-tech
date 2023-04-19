import { Home } from '@/components';
import { GetStaticProps } from 'next';
import Head from 'next/head';

export default function HomePage() {
	return (
		<>
			<Head>
				<title>I Root Tech | Home</title>
			</Head>
			<Home />
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};
