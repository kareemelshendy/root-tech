import Link from 'next/link';
import { useRouter } from 'next/router';
import { HTMLProps } from 'react';
import styles from './nav-link.module.scss';

interface Props extends HTMLProps<HTMLDivElement> {
	href: string;
	className?: string;
}

export const NavLink: React.FC<Props> = ({ className, href, children }) => {
	const { pathname } = useRouter();
	return (
		<Link
			href={href}
			className={`${styles['link']} ${
				pathname === href ? styles['link--active'] : ''
			} ${className ? className : ''}`.trim()}>
			{children}
		</Link>
	);
};
