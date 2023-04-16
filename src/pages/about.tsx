import { GetStaticProps } from 'next';

export default function About() {
	return <>ABOUT</>;
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};
