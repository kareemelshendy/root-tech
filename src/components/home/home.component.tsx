/* eslint-disable @next/next/no-img-element */
import { DatabaseIcon, LockIcon, Tabs, WindowsIcon } from '@/components';
import styles from './home.module.scss';
import Link from 'next/link';

interface Props {}

export const Home: React.FC<Props> = () => {
	return (
		<>
			<section className={styles['home__hero']}>
				<div className={styles['home__hero-wrapper']}>
					<div className={styles['home__hero-content']}>
						<h2>
							Transform your ideas into{' '}
							<span className='text-colorPrimary'>
								Exceptional
							</span>{' '}
							software solutions
						</h2>
						<p>
							Take the next step with your dreams and turn it into
							reality with us
						</p>
					</div>
				</div>
			</section>
			<section>
				<div className={styles['home__about']}>
					<div className={styles['home__about-wrapper']}>
						<div className={styles['home__about-content']}>
							<h3 className={styles['home__about-content-title']}>
								Who we {''}
								<span className='text-colorPrimary'>Are?</span>
							</h3>

							<p className={styles['home__about-content-desc']}>
								We are a leading IT company with headquarters in
								Bochum, Germany , consisting of highly qualified
								software and hardware engineers with the mission
								to provide high quality, innovative and
								cost-effective solutions and professional
								outsourcing services for business processes .
							</p>
						</div>
						<img
							src='/images/home-about.png'
							alt='Who we Are?'
							className={styles['home__about-img']}
						/>
					</div>
				</div>
			</section>
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
								Over 20 years of know-how in database
								development, implementation and maintenance, We
								design a database that is tailored to you.
							</p>

							<div className={styles['home__offers-card-imgs']}>
								<img src='/images/sql-small.png' alt='SQL' />
								<img
									src='/images/postget-sql-small.png'
									alt='Postget SQL'
								/>
								<img
									src='/images/oracle-small.png'
									alt='Oracle'
								/>
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
								wide range of custom services. Providing
								advanced network performance and security
								solutions.
							</p>

							<div className={styles['home__offers-card-imgs']}>
								<img
									src='/images/cisco-small.png'
									alt='Cisco'
								/>
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
								24\7,start your work efficiently and effectively
								and achieve your productivity goals without
								stopping.
							</p>

							<div className={styles['home__offers-card-imgs']}>
								<img
									src='/images/oracle-small.png'
									alt='Oracle'
								/>
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
					<p className='text-center w-full text-xl md:text-[32px] font-medium'>
						and more.{' '}
						<Link
							href='/services'
							className='text-xl md:text-[32px] text-colorPrimary font-extrabold hover:underline	hover:decoration-colorPrimary duration-300'>
							see all of our services
						</Link>
					</p>
				</div>
			</section>
		</>
	);
};
