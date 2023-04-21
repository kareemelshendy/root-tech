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

	const networkItems = [
		'Secure design and architecture assessment',
		'Firewalls [Cisco, Palo Alto, Fortinet ...] ',
		'Micro segmentation .',
		'Provide SOC services .',
		'Denial of service attacks (DDOS) mitigation setup and management (CloudFlare, Arbor, ...) .',
		'Jump Server management and setup (CyberArk, Centrify).',
		'Penetration Testing services .',
		'Endpoint Security .',
		'Endpoint Detection and Response (EDR) (CrowdStrike, KasperSky, ...).',
		'Endpoint and Mobile Devices Protection Platforms .',
		' NextGen SIEM OT and IOT Security . ',
		'LAN , WAN design , Routing , Switching.',
		'OSPF, EIGRP,BGP,VoIP.',
		'VLANs, Spanning-tree ,IPSec Tunnels: IKEv1, IKEv2, DMVPN , SDWAN .',
	];

	const osItems = [
		'Operating system management Linux , Windows . Virtual environment setup and management (HyperV, VMWare) .',
		'Storage management and day to day operations .',
		'SAN Switch setup and administration including zoning .',
		'LUN creation and OS mapping (Windows, Linux) .',
		'Active Directory .',
		'DHCP & DNS . Microsoft O365 setup and management .',
		'Support and maintenance ,Remote Help-Desk .',
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

				<div className='mb-[50px] lg:mb-[85px]'>
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

				<div className='flex  flex-wrap justify-around items-center gap-8 mb-[50px] lg:mb-[85px]'>
					<img src='/images/oracle.png' alt='Oracle' />
					<img src='/images/sql.png' alt='SQL' />
					<img src='/images/postget-sql.png' alt='Postget SQL' />
				</div>

				<div className='mb-[50px] lg:mb-[85px]'>
					<h3 className={styles['services__offers-subtitle']}>
						<span className={styles['services__offers-number']}>
							2
						</span>{' '}
						Security & Networks
					</h3>
					<p className={styles['services__offers-desc']}>
						The Expertise that our team possesses embraces a wide
						range of custom services. Providing advanced network
						performance and security solutions. Involving the latest
						and most effective development technologies.
					</p>

					<div className={styles['services__offers-content']}>
						<ul className={styles['services__offers-list']}>
							{networkItems.map((item, index) => (
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
							src='/images/security.png'
							alt='DataBase'
							className={styles['services__offers-content-img']}
						/>
					</div>
				</div>

				<div className='flex flex-wrap justify-center lg:justify-between items-center gap-8 mb-[50px] lg:mb-[85px]'>
					<img src='/images/cisco.png' alt='Cisco' />
					<img src='/images/kaspersky.png' alt='Kaspersky' />
					<img src='/images/fortinet.png' alt='Fortinet' />
					<img src='/images/paloalto.png' alt='Palpalto' />
				</div>

				<div className='mb-[50px] lg:mb-[85px]'>
					<h3 className={styles['services__offers-subtitle']}>
						<span className={styles['services__offers-number']}>
							3
						</span>{' '}
						OS (Operation System)
					</h3>
					<p className={styles['services__offers-desc']}>
						Let Us support and configure your IT structure
						24\7,start your work efficiently and effectively and
						achieve your productivity goals without stopping.
					</p>

					<div className={styles['services__offers-content']}>
						<ul className={styles['services__offers-list']}>
							{osItems.map((item, index) => (
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
							src='/images/os.png'
							alt='DataBase'
							className={styles['services__offers-content-img']}
						/>
					</div>
				</div>

				<div className='flex flex-wrap justify-around items-center gap-8 mb-[50px] lg:mb-[85px]'>
					<img src='/images/oracle.png' alt='Oracle' />
					<img src='/images/redhat.png' alt='Red Hat' />
					<img
						src='/images/windows-server.png'
						alt='Windows Server'
					/>
				</div>
			</div>
		</section>
	);
};
