import Head from 'next/head';
import styles from './layout.module.scss';
import { Footer, Header } from '@/components';
import { HTMLProps, useState } from 'react';
import { ToggleMenu } from '@/context';

interface Props extends HTMLProps<HTMLDivElement> {}
export const Layout: React.FC<Props> = ({ children }) => {
	const [showMenu, setShowMenu] = useState<boolean | undefined>(false);
	return (
		<>
			<Head>
				<title>{'title'}</title>
			</Head>
			<div className={styles['layout']}>
				{/* <CurrentUserHOC /> */}
				<ToggleMenu.Provider
					value={{
						showMenu,
						setShowMenu,
					}}>
					<Header />
				</ToggleMenu.Provider>

				<main className={styles['layout__main']}>{children}</main>
				<Footer />
			</div>
		</>
	);
};
