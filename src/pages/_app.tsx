import { Layout } from '@/components';
import '@/styles/index.scss';
import type { AppProps } from 'next/app';
import { Cairo } from 'next/font/google';
const cairo = Cairo({
	weight: ['400', '500', '600', '700', '800'],
	subsets: ['arabic'],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
    <main className={`${cairo.className}`}>
		<Layout>
	
			<Component {...pageProps} />
		</Layout>

    </main>

	);
}
