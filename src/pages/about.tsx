import { About } from '@/components';
import { GetStaticProps } from 'next';
import Head from 'next/head';

export default function AboutPage() {
	return (
		<>
			<Head>
				<title>I Root Tech | About Us</title>
			</Head>
			<About />
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};
