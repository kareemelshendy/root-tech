/* eslint-disable @next/next/no-img-element */
import { Tabs } from '@/components';
import styles from './services.module.scss';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
interface Props {}

export const Services: React.FC<Props> = () => {
	const { t } = useTranslation();
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
					<Trans
						i18nKey='common:servcies.title'
						components={[
							<span key={'s0'} className='text-colorPrimary' />,
						]}
					/>
				</h2>
				<p className={styles['services__desc']}>
					{t('common:servcies.desc')}
				</p>
				{/* <p className={styles['services__desc']}>
					We are committed to delivering high-quality software
					products that are user-friendly, reliable, and scalable. Our
					team of skilled developers, designers, and project managers
					work closely with our clients to ensure that their their
					objectives are achieved.
				</p> */}
			</div>
			<div className={styles['services__img']}></div>
			<div className='container mb-8 lg:mb-[92px]'>
				<Tabs />
			</div>

			<div className={styles['services__offers']}>
				<h2 className={styles['services__offers-title']}>
					<Trans
						i18nKey='common:servcies.also-offering'
						components={[
							<span key={'s0'} className='text-colorPrimary' />,
						]}
					/>
				</h2>

				<div className='mb-[50px] lg:mb-[85px]'>
					<h3 className={styles['services__offers-subtitle']}>
						<span className={styles['services__offers-number']}>
							1
						</span>{' '}
						{t('common:servcies.database.title')}
					</h3>
					<p className={styles['services__offers-desc']}>
						{t('common:servcies.database.desc')}
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
						{t('common:servcies.security.title')}
					</h3>
					<p className={styles['services__offers-desc']}>
						{t('common:servcies.security.desc')}
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
						{t('common:servcies.os.title')}
					</h3>
					<p className={styles['services__offers-desc']}>
						{t('common:servcies.os.desc')}
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
