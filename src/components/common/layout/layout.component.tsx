import Head from 'next/head';
import styles from './layout.module.scss';
import { Footer, Header } from '@/components';
import { HTMLProps } from 'react';

interface Props  extends HTMLProps<HTMLDivElement> {}
export const Layout: React.FC<Props> = ({children}) => {
	return (
		<>
			<Head>
				<title>{'title'}</title>
			</Head>
			<div
				className={styles['layout']}>
				{/* <CurrentUserHOC /> */}
				<Header />
				<main className={styles['layout__main']}>{children}</main>
				 <Footer />
			</div>
		</>
	);
};
