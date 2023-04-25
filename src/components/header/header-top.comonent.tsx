import Link from 'next/link';
import styles from './header.module.scss';
import { DownArrowIcon, LanguageIcon } from '@/components';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

interface Props {}

export const HeaderTop: React.FC<Props> = () => {
	const { pathname, push, asPath, query, locale } = useRouter();
	const { t } = useTranslation();

	const switchLangHandler = (lang: string) => {
		// dispatch(switchLang(lang));
		push({ pathname, query }, asPath, { locale: lang });
	};
	return (
		<div
			className={`${styles['header__top']} ${
				pathname === '/contact-us' ? styles['header__top--white'] : ''
			}`}>
			<div className={styles['header__top-wrapper']}>
				<div className={styles['header__top-content']}>
					<p className={styles['header__top-content-text']}>
						{t('common:header.top')}
					</p>

					<Link href={'tel:+4915754411184'}>+49 157 54411184</Link>
				</div>

				<button
					className={styles['header__lang']}
					onClick={() => {
						switchLangHandler(locale === 'de' ? 'en' : 'de');
					}}>
					<span>
						<LanguageIcon />
					</span>{' '}
					{locale === 'de' ? 'English' : 'germany'}{' '}
					<span>
						{' '}
						{/* <DownArrowIcon />{' '} */}
					</span>
				</button>
			</div>
		</div>
	);
};
