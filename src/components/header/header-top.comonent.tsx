import Link from 'next/link';
import styles from './header.module.scss';
import { DownArrowIcon, LanguageIcon } from '@/components';
import { useRouter } from 'next/router';

interface Props {}

export const HeaderTop: React.FC<Props> = () => {
	const { pathname } = useRouter();
	return (
		<div
			className={`${styles['header__top']} ${
				pathname === '/contact-us' ? styles['header__top--white'] : ''
			}`}>
			<div className={styles['header__top-wrapper']}>
				<div className={styles['header__top-content']}>
					<p className={styles['header__top-content-text']}>
						Need a help? talk to our experts
					</p>

					<Link href={'tel:+4915754411184'}>+49 157 54411184</Link>
				</div>

				<button className={styles['header__lang']}>
					<span>
						<LanguageIcon />
					</span>{' '}
					English{' '}
					<span>
						{' '}
						<DownArrowIcon />{' '}
					</span>
				</button>
			</div>
		</div>
	);
};
