import { GetStaticProps } from 'next';

export default function Home() {
	return <>home</>;
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};
