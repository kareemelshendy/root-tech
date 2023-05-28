import { Layout } from '@/components';
import '@/styles/index.scss';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { Cairo } from 'next/font/google';
import { useRouter } from 'next/router';
import { SEO_DEFAULT_KEYWORDS } from '@/utils';
const cairo = Cairo({
	weight: ['400', '500', '600', '700', '800'],
	subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const localeLang = router.locale === 'ar' ? 'ar-EG' : 'en-US';

	const SEO = () => (
		<DefaultSeo
			description={
				'Transform your ideas into Exceptional software solutions'
			}
			additionalMetaTags={[
				{ name: 'keywords', content: SEO_DEFAULT_KEYWORDS },
			]}
			openGraph={{
				title: 'IRoottech',
				locale: localeLang,
				type: 'website',
				site_name: 'IRootTech',
				description:
					'Transform your ideas into Exceptional software solutions',
				url: process.env.NEXT_PUBLIC_SITE_URL,
				images: [
					{
						url: '/images/footer-logo.svg',
						width: 512,
						height: 512,
						alt: 'IRoottech',
						type: 'image/png',
					},
				],
			}}
			twitter={{
				handle: '@handle',
				site: '@site',
				cardType: 'summary_large_image',
			}}
		/>
	);
	return (
		<>
			<SEO />
			<main >
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</main>
		</>
	);
}
