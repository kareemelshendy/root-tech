import { Layout } from '@/components';
import '@/styles/index.scss';
import type { AppProps } from 'next/app';
import { Cairo } from 'next/font/google';
const cairo = Cairo({
	weight: ['400', '500', '600', '700', '800'],
	subsets:['latin']
});

export default function App({ Component, pageProps }: AppProps) {
	return (
    <main >
		<Layout>
	
			<Component {...pageProps} />
		</Layout>

    </main>

	);
}
