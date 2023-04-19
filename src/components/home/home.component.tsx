import { DatabaseIcon, LockIcon, Tabs, WindowsIcon } from '@/components';
import styles from './home.module.scss';

interface Props {}

export const Home: React.FC<Props> = () => {
	return (
		<section id='home' className={styles['home']}>
			<div>
				<h3 className={styles['home__subtitle']}>
					What we&apos;re{' '}
					<span className='text-colorPrimary'>Offering?</span>
				</h3>
				<Tabs />
				<div className={styles['home__offers-card-wrapper']}>
					<div className={styles['home__offers-card']}>
						<span className={styles['home__offers-card-icon']}>
							<DatabaseIcon />
						</span>
						<h4 className={styles['home__offers-card-title']}>
							Database
						</h4>

						<p className={styles['home__offers-card-desc']}>
							Over 20 years of know-how in database development,
							implementation and maintenance, We design a database
							that is tailored to you.
						</p>

						<div className={styles['home__offers-card-imgs']}>
							<img src='/images/sql-small.png' alt='SQL' />
							<img
								src='/images/postget-sql-small.png'
								alt='Postget SQL'
							/>
							<img src='/images/oracle-small.png' alt='Oracle' />
						</div>
					</div>
					<div className={styles['home__offers-card']}>
						<span className={styles['home__offers-card-icon']}>
							<LockIcon />
						</span>
						<h4 className={styles['home__offers-card-title']}>
							Security
						</h4>

						<p className={styles['home__offers-card-desc']}>
							The Expertise that our team possesses embraces a
							wide range of custom services. Providing advanced
							network performance and security solutions.
						</p>

						<div className={styles['home__offers-card-imgs']}>
							<img src='/images/cisco-small.png' alt='Cisco' />
							<img
								src='/images/kaspersky-small.png'
								alt='Kaspersky'
							/>
							<img
								src='/images/fortinet-small.png'
								alt='Fortinet'
							/>
							<img
								src='/images/paloalto-small.png'
								alt='Palpalto'
							/>
						</div>
					</div>
					<div className={styles['home__offers-card']}>
						<span className={styles['home__offers-card-icon']}>
							<WindowsIcon />
						</span>
						<h4 className={styles['home__offers-card-title']}>
							OS
						</h4>

						<p className={styles['home__offers-card-desc']}>
							Let Us support and configure your IT structure
							24\7,start your work efficiently and effectively and
							achieve your productivity goals without stopping.
						</p>

						<div className={styles['home__offers-card-imgs']}>
							<img src='/images/oracle-small.png' alt='Oracle' />
							<img
								src='/images/red-hat-small.png'
								alt='Red Hat'
							/>
							<img
								src='/images/windows-server.png'
								alt='Windows Server'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
