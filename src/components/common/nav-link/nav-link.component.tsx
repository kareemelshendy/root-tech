import Link from 'next/link';
import { useRouter } from 'next/router';
import { HTMLProps, MouseEventHandler } from 'react';
import styles from './nav-link.module.scss';

interface Props extends HTMLProps<HTMLDivElement> {
	href: string;
	className?: string;
}

export const NavLink: React.FC<Props> = ({
	className,
	href,
	children,
	...props
}) => {
	const { pathname } = useRouter();

	return (
		<Link
			href={href}
			className={`${styles['link']} ${
				pathname === href ? styles['link--active'] : ''
			} ${className ? className : ''} ${
				pathname === '/contact-us' ? styles['link--white'] : ''
			}`.trim()}
			onClick={
				props.onClick as
					| MouseEventHandler<HTMLAnchorElement>
					| undefined
			}>
			{children}
		</Link>
	);
};
