import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Props {
	isWhite?: boolean;
}

import styles from './header.module.scss';
export const Header: React.FC<Props> = ({ isWhite = false }) => {
	const router = useRouter();

	// const { showMenu, setShowMenu } = useToggleMenu();
	const [isStickyHeader, setIsStickyHeader] = useState(false);

	return (
		<>
			<header
				className={`${styles['header']} ${
					isWhite ? styles['header__white'] : ''
				} ${
					isStickyHeader ? styles['header__white--active'] : ''
				}`.trim()}>
				<div className='container'>
					<div className={styles['header__wrapper']}>
						{/* right section */}
						<div className={styles['header__menu-wrapper']}>
							{/* logo */}
							<Link href={'/'} className={styles['header__logo']}>
								<span className={styles['header__logo-icon']}>
									{/* <LogoIcon /> */}
									<img src='./images/logo.svg' alt='' />
								</span>
							</Link>
							{/* menu */}
							<nav>
								<ul className={styles['header__menu']}>
									<li className={styles['header__menu-item']}>
										<Link
											href={'home'}
											className={
												styles['header__menu-link']
											}>
											Home
										</Link>
									</li>
									<li className={styles['header__menu-item']}>
										<Link
											href={'home'}
											className={
												styles['header__menu-link']
											}>
											Services
										</Link>
									</li>
									<li className={styles['header__menu-item']}>
										<Link
											href={'home'}
											className={
												styles['header__menu-link']
											}>
											Policies
										</Link>
									</li>
									<li className={styles['header__menu-item']}>
										<Link
											href={'home'}
											className={
												styles['header__menu-link']
											}>
											About us
										</Link>{' '}
									</li>
								</ul>
							</nav>
						</div>

						{/* left */}
						<div className={styles['header__actions']}>
							<Link
								href='#'
								className={styles['header__actions-button']}>
								contact us
							</Link>

							{/* <button> */}
							{/* <span>En</span>
								<span>
									<DownArrowIcon />
								</span> */}

							{/* {i18nextConfig.i18n.locales.map((locale) => {
								if (locale === currentLocale) return null;
								return (
									<LanguageSwitchLink
										locale={locale}
										key={locale}
									/>
								);
							})} */}
							{/* </button> */}
						</div>

						{/* <button
							className={styles['header__toggle-button']}
							onClick={() => setShowMenu && setShowMenu(true)}>
							<TogglerIcon />
						</button> */}
                        
					</div>
					{/* left */}
					<div></div>
				</div>
			</header>
		</>
	);
};
