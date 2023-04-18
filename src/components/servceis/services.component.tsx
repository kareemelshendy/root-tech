/* eslint-disable @next/next/no-img-element */
import { Tabs } from '@/components';
import styles from './services.module.scss';

interface Props {}

export const Services: React.FC<Props> = () => {
	const offersItems = [
		'Database Management - Oracle, SQLServer, PostgreSQL',
		'Clustering , RAC , Failover Clustering - Always On availability groups .',
		'Exadata ,OCI,OAT .',
		'Data Migration , Integration , implementation , configuration .',
		'Tuning - performance .',
		'Backup ,Recovery and DR solutions .',
		'Support , Monitoring .',
		`Analytics , BI ,ETL's ,DWH .`,
	];
	return (
		<section className={styles['services']}>
			<div className='container'>
				<h2 className={styles['services__title']}>
					What we&apos;re{' '}
					<span className='text-colorPrimary'>Offering?</span>
				</h2>
				<p className={styles['services__desc']}>
					At iRoot Tech, our mission is to provide our clients with
					customized software solutions that solve their unique
					challenges and fulfil their specific needs. We believe that
					every business is different, and therefore, software
					solutions should be tailored to fit their requirements.
				</p>
				<p className={styles['services__desc']}>
					We are committed to delivering high-quality software
					products that are user-friendly, reliable, and scalable. Our
					team of skilled developers, designers, and project managers
					work closely with our clients to ensure that their their
					objectives are achieved.
				</p>
			</div>
			<div className={styles['services__img']}></div>
			<div className='container mb-8 lg:mb-[92px]'>
				<Tabs />
			</div>

			<div className={styles['services__offers']}>
				<h2 className={styles['services__offers-title']}>
					We also <span className='text-colorPrimary'>offering</span>
				</h2>

				<div>
					<h3 className={styles['services__offers-subtitle']}>
						<span className={styles['services__offers-number']}>
							1
						</span>{' '}
						DataBase
					</h3>
					<p className={styles['services__offers-desc']}>
						Over 20 years of know-how in database development,
						implementation and maintenance, We design a database
						that is tailored to you.
					</p>

					<div className={styles['services__offers-content']}>
						<ul className={styles['services__offers-list']}>
							{offersItems.map((item, index) => (
								<li
									key={index}
									className={
										styles['services__offers-list-item']
									}>
									{item}
								</li>
							))}
						</ul>
						<img
							src='/images/database.png'
							alt='DataBase'
							className={styles['services__offers-content-img']}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
