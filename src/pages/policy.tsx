import { About, Policy } from '@/components';
import { GetStaticProps } from 'next';
import Head from 'next/head';

export default function PolicyPage() {
	return (
		<>
			<Head>
				<title>I Root Tech | Policies</title>
			</Head>
			<Policy />
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};
