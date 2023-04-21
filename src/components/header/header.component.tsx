import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './header.module.scss';
import {
	HeaderToggleMenu,
	HeaderTop,
	NavLink,
	TogglerIcon,
} from '@/components';
import { useToggleMenu } from '@/context';
interface Props {
	isWhite?: boolean;
}

export const Header: React.FC<Props> = ({ isWhite = false }) => {
	const { pathname } = useRouter();
	const { showMenu, setShowMenu } = useToggleMenu();

	// const { showMenu, setShowMenu } = useToggleMenu();
	const [isStickyHeader, setIsStickyHeader] = useState(false);

	return (
		<>
			<HeaderTop />
			<header
				className={`${styles['header']} ${
					pathname === '/contact-us' ? styles['header--white'] : ''
				} ${
					isStickyHeader ? styles['header__white--active'] : ''
				}`.trim()}>
				<div className='container'>
					<div className={styles['header__wrapper']}>
						{/* right section */}
						<div className={styles['header__menu-wrapper']}>
							{/* logo */}
							<Link href={'/'} className={styles['header__logo']}>
								{/* <LogoIcon /> */}
								{pathname === '/contact-us' ? (
									<img
										src='./images/footer-logo.svg'
										alt='I Root Tech'
									/>
								) : (
									<img
										src='./images/logo.svg'
										alt='I Root Tech'
									/>
								)}
							</Link>
							{/* menu */}
							<nav>
								<ul className={styles['header__menu']}>
									<li className={styles['header__menu-item']}>
										<NavLink href='/'>Home</NavLink>
									</li>
									<li className={styles['header__menu-item']}>
										<NavLink href='/services'>
											Services
										</NavLink>
									</li>
									<li className={styles['header__menu-item']}>
										<NavLink href='/policy'>
											Policies
										</NavLink>
									</li>
									<li className={styles['header__menu-item']}>
										<NavLink href='/about'>
											About Us
										</NavLink>
									</li>
								</ul>
							</nav>
						</div>

						{/* left */}
						<div className={styles['header__actions']}>
							<Link
								href='/contact-us'
								className={styles['header__actions-button']}>
								Contact Us
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

						<button
							className={styles['header__toggle-button']}
							onClick={() => setShowMenu && setShowMenu(true)}>
							<TogglerIcon />
						</button>
					</div>
				</div>
			</header>
			<HeaderToggleMenu />
		</>
	);
};
