import { About } from '@/components';
import { GetStaticProps } from 'next';

export default function AboutPage() {
	return <About />;
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};
