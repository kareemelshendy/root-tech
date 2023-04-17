import { About, Services } from '@/components';
import { GetStaticProps } from 'next';
import Head from 'next/head';

export default function ServceisPage() {
	return (
		<>
			<Head>
				<title>I Root Tech | Services</title>
			</Head>
			<Services />
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};
