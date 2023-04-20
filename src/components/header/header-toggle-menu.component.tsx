// import { CloseIcon } from '@/components';
import { useToggleMenu } from '@/context';
import Link from 'next/link';
import styles from './header.module.scss';
import { CloseIcon, NavLink } from '@/components';

export const HeaderToggleMenu = () => {
	const { showMenu, setShowMenu } = useToggleMenu();

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
							Home
						</NavLink>
					</li>
					<li className={styles['header__toggle-menu-item']}>
						<NavLink
							href={'/services'}
							className='font-bold'
							onClick={() => {
								setShowMenu && setShowMenu(false);
							}}>
							Services
						</NavLink>
					</li>
					<li className={styles['header__toggle-menu-item']}>
						<NavLink
							href={'/policy'}
							className='font-bold'
							onClick={() => {
								setShowMenu && setShowMenu(false);
							}}>
							Policies
						</NavLink>
					</li>
					<li className={styles['header__toggle-menu-item']}>
						<NavLink
							href={'/about'}
							className='font-bold'
							onClick={() => {
								setShowMenu && setShowMenu(false);
							}}>
							About Us
						</NavLink>
					</li>
				</ul>

				<Link
					className={styles['header__toggle-link']}
					href={'/contact-us'}
					onClick={() => {
						setShowMenu && setShowMenu(false);
					}}>
					Contact Us
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
