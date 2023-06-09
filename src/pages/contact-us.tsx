import { About, ContactUs } from '@/components';
import { GetStaticProps } from 'next';
import Head from 'next/head';

export default function ContactUsPage() {
	return (
		<>
			<Head>
				<title>I Root Tech | Contact US</title>
			</Head>
			<ContactUs />
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};
