// import { CloseIcon } from '@/components';
import { useToggleMenu } from '@/context';
import Link from 'next/link';
import styles from './header.module.scss';
import { CloseIcon, LanguageIcon, NavLink } from '@/components';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

export const HeaderToggleMenu = () => {
	const { showMenu, setShowMenu } = useToggleMenu();
	const { pathname, push, asPath, query, locale } = useRouter();
	const { t } = useTranslation();

	const switchLangHandler = (lang: string) => {
		// dispatch(switchLang(lang));
		push({ pathname, query }, asPath, { locale: lang });
	};

	console.log(showMenu);

	return (
		<>
			<div
				className={`${styles['header__toggle-wrapper']} ${
					showMenu ? styles['header__toggle-wrapper--show'] : ''
				}`}>
				<button
					className={styles['header__toggle-close']}
					onClick={() => setShowMenu && setShowMenu(false)}>
					<CloseIcon />
				</button>

				<ul className={styles['header__toggle-menu']}>
					<li className={styles['header__toggle-menu-item']}>
						<NavLink
							href={'/'}
							className='font-bold'
							onClick={() => {
								setShowMenu && setShowMenu(false);
							}}>
							{t('common:header.home')}
						</NavLink>
					</li>
					<li className={styles['header__toggle-menu-item']}>
						<NavLink
							href={'/services'}
							className='font-bold'
							onClick={() => {
								setShowMenu && setShowMenu(false);
							}}>
							{t('common:header.services')}
						</NavLink>
					</li>
					<li className={styles['header__toggle-menu-item']}>
						<NavLink
							href={'/policy'}
							className='font-bold'
							onClick={() => {
								setShowMenu && setShowMenu(false);
							}}>
							{t('common:header.policies')}
						</NavLink>
					</li>
					<li className={styles['header__toggle-menu-item']}>
						<NavLink
							href={'/about'}
							className='font-bold'
							onClick={() => {
								setShowMenu && setShowMenu(false);
							}}>
							{t('common:header.about-us')}
						</NavLink>
					</li>
				</ul>

				<button
					className={' mb-4 flex items-center gap-2 font-semibold'}
					onClick={() => {
						switchLangHandler(locale === 'de' ? 'en' : 'de');
					}}>
					<span>
						<LanguageIcon />
					</span>{' '}
					{locale === 'de' ? 'English' : 'germany'}{' '}
					<span> {/* <DownArrowIcon />{' '} */}</span>
				</button>

				<Link
					className={styles['header__toggle-link']}
					href={'/contact-us'}
					onClick={() => {
						setShowMenu && setShowMenu(false);
					}}>
					{t('common:header.contact-us')}
				</Link>
			</div>

			<div
				className={`${styles['header__toggle-dropshadow']} ${
					showMenu ? styles['header__toggle-dropshadow--show'] : ''
				}`}
				onClick={() => setShowMenu && setShowMenu(false)}></div>
		</>
	);
};
