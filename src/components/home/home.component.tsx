/* eslint-disable @next/next/no-img-element */
import {
	ClockIcon,
	ContactUsForm,
	DatabaseIcon,
	DollarCircleIcon,
	EmailIcon,
	LocationIcon,
	LockIcon,
	PercentageCircleIcon,
	PhoneIcon,
	Tabs,
	WindowsIcon,
} from '@/components';
import styles from './home.module.scss';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

interface Props {}

export const Home: React.FC<Props> = () => {
	const { t } = useTranslation();
	const { locale } = useRouter();
	return (
		<>
			<section className={styles['home__hero']}>
				<div className={styles['home__hero-wrapper']}>
					<div className={styles['home__hero-content']}>
						<h2 className={styles['home__hero-title']}>
							<Trans
								i18nKey='common:hero.title'
								components={[
									<span
										key={'s0'}
										className='text-colorPrimary'
									/>,
									<br key={'b1'} />,
								]}
							/>
						</h2>
						<p className={styles['home__hero-desc']}>
							{t('common:hero.desc')}
						</p>

						<Link
							href='/contact-us'
							className={styles['home__hero-link']}>
							{t('common:start')}
						</Link>
					</div>

					<img
						src='./images/code.svg'
						alt='Software solutions'
						className={styles['home__hero-img']}
					/>
				</div>
			</section>
			<section>
				<div className={styles['home__about']}>
					<div className={styles['home__about-wrapper']}>
						<div className={styles['home__about-content']}>
							<h3 className={styles['home__about-content-title']}>
								<Trans
									i18nKey='common:about.title'
									components={[
										<span
											key={'s0'}
											className='text-colorPrimary'
										/>,
									]}
								/>
							</h3>

							<p className={styles['home__about-content-desc']}>
								{t('common:about.desc-1')}
							</p>
							{/* <p className={styles['home__about-content-desc']}>
								{t('common:about.desc-2')}
							</p>
							<p className={styles['home__about-content-desc']}>
								{t('common:about.desc-3')}
							</p> */}
						</div>
						<img
							src='/images/home-about.png'
							alt='Who we Are?'
							className={styles['home__about-img']}
						/>
					</div>
				</div>
			</section>
			<section id='home'>
				<div className={styles['home__offers']}>
					<h3 className={styles['home__subtitle']}>
						{/* What we&apos;re{' '}
						<span className='text-colorPrimary'>Offering?</span> */}
						<Trans
							i18nKey='common:servcies.title'
							components={[
								<span
									key={'s0'}
									className='text-colorPrimary'
								/>,
							]}
						/>
					</h3>

					<Tabs />
					<div className={styles['home__offers-card-wrapper']}>
						<div
							className={`${styles['home__offers-card']} ${
								locale === 'de'
									? styles['home__offers-card--is-germany']
									: ''
							}`.trim()}>
							<span className={styles['home__offers-card-icon']}>
								<DatabaseIcon />
							</span>
							<h4 className={styles['home__offers-card-title']}>
								{t('common:servcies.database.title')}
							</h4>

							<p className={styles['home__offers-card-desc']}>
								{t('common:servcies.database.desc')}
							</p>

							<div className={styles['home__offers-card-imgs']}>
								<img src='/images/sql-small.svg' alt='SQL' />
								<img
									src='/images/postget-small.svg'
									alt='Postget SQL'
								/>
								<img
									src='/images/oracle-small.svg'
									alt='Oracle'
									className='lg:w-[140px]'
								/>
							</div>
						</div>
						<div
							className={`${styles['home__offers-card']} ${
								locale === 'de'
									? styles['home__offers-card--is-germany']
									: ''
							}`.trim()}>
							<span className={styles['home__offers-card-icon']}>
								<LockIcon />
							</span>
							<h4 className={styles['home__offers-card-title']}>
								{t('common:servcies.security.title')}
							</h4>

							<p className={styles['home__offers-card-desc']}>
								{t('common:servcies.security.desc')}
							</p>

							<div className={styles['home__offers-card-imgs']}>
								<img
									src='/images/cisco-small.svg'
									alt='Cisco'
									className='lg:w-[80px]'
								/>
								<img
									src='/images/kaspersky-small.svg'
									alt='Kaspersky'
									className='lg:w-[120px]'
								/>
								<img
									src='/images/fortinet-small.svg'
									alt='Fortinet'
									className='lg:w-[120px]'
								/>
								<img
									src='/images/paloalto-small.svg'
									alt='Palpalto'
									className=' lg:w-[120px]'
								/>
							</div>
						</div>
						<div
							className={`${styles['home__offers-card']} ${
								locale === 'de'
									? styles['home__offers-card--is-germany']
									: ''
							}`.trim()}>
							<span className={styles['home__offers-card-icon']}>
								<WindowsIcon />
							</span>
							<h4 className={styles['home__offers-card-title']}>
								{t('common:servcies.os.title')}
							</h4>

							<p className={styles['home__offers-card-desc']}>
								{t('common:servcies.os.desc')}
							</p>

							<div className={styles['home__offers-card-imgs']}>
								<img
									src='/images/oracle-small.svg'
									alt='Oracle'
									className='lg:w-[140px]'
								/>
								<img
									src='/images/red-hat-small.svg'
									alt='Red Hat'
									className='lg:w-[140px]'
								/>
								<img
									src='/images/windows-server.svg'
									alt='Windows Server'
									className='lg:w-[200px]'
								/>
							</div>
						</div>
					</div>
					<p className='text-center w-full text-xl md:text-[32px] font-medium'>
						{t('common:more')}
						<Link
							href='/services'
							className='text-xl md:text-[32px] text-colorPrimary font-extrabold hover:underline	hover:decoration-colorPrimary duration-300'>
							{t('common:more-link')}
						</Link>
					</p>
				</div>
			</section>

			<section id='us'>
				<div className={styles['home__us']}>
					<h3 className={styles['home__subtitle']}>
						<Trans
							i18nKey='common:servcies.title'
							components={[
								<span
									key={'s0'}
									className='text-colorPrimary'
								/>,
							]}
						/>
					</h3>
					<div className={styles['home__us-card-wrapper']}>
						<div
							className={`${styles['home__us-card']} ${
								locale === 'de'
									? styles['home__us-card--is-germany']
									: ''
							}`.trim()}>
							<span className={styles['home__us-card-icon']}>
								<DollarCircleIcon />
							</span>
							<h4 className={styles['home__us-card-title']}>
								{t('common:servcies.cost.title')}
							</h4>

							<p className={styles['home__us-card-desc']}>
								{t('common:servcies.cost.desc')}
							</p>
						</div>
						<div
							className={`${styles['home__us-card']} ${
								locale === 'de'
									? styles['home__us-card--is-germany']
									: ''
							}`.trim()}>
							<span className={styles['home__us-card-icon']}>
								<ClockIcon />
							</span>
							<h4 className={styles['home__us-card-title']}>
								{t('common:servcies.fast.title')}
							</h4>

							<p className={styles['home__us-card-desc']}>
								{t('common:servcies.fast.desc')}
							</p>
						</div>
						<div
							className={`${styles['home__us-card']} ${
								locale === 'de'
									? styles['home__us-card--is-germany']
									: ''
							}`.trim()}>
							<span className={styles['home__us-card-icon']}>
								<PercentageCircleIcon />
							</span>
							<h4 className={styles['home__us-card-title']}>
								{t('common:servcies.coverage.title')}{' '}
							</h4>

							<p className={styles['home__us-card-desc']}>
								{t('common:servcies.coverage.desc')}
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className={styles['home__your-projects']}>
				<div className={styles['home__your-projects-wrapper']}>
					<h3 className={styles['home__your-projects-title']}>
						{t('common:build')}
					</h3>
					<Link
						href={'/contact-us'}
						className={styles['home__your-projects-link']}>
						{t('common:start')}
					</Link>
				</div>
			</section>

			<section id='contact-us' className={styles['home__countact-us']}>
				<div className={styles['home__countact-us-wrapper']}>
					<h2 className={styles['home__countact-us-title']}>
						{t('common:contact.title')}
						<br />
						<span className='text-colorPrimary'>
							{t('common:contact.subtitle')}
						</span>
					</h2>

					<div className={styles['home__countact-us-content']}>
						<div className='w-full lg:w-1/2'>
							<h3
								className={
									styles['home__countact-us-content-title']
								}>
								{t('common:contact.talk')}
							</h3>
							<p
								className={
									styles['home__countact-us-content-desc']
								}>
								{t('common:contact.desc')}
							</p>

							<h4
								className={
									styles[
										'home__countact-us-content-contacts-title'
									]
								}>
								{t('common:contact.contacts')}
							</h4>

							<div
								className={
									styles['home__countact-us-content-contacts']
								}>
								<div
									className={
										styles[
											'home__countact-us-content-contacts-item'
										]
									}>
									<span>
										<LocationIcon />
									</span>
									castroper st 273 44791, Germany ,Bochum
								</div>

								<div
									className={
										styles[
											'home__countact-us-content-contacts-item'
										]
									}>
									<span>
										<PhoneIcon />
									</span>
									<Link href={'tel:+4917648985373'}>
										(+49) 176 48985373
									</Link>
								</div>
								<div
									className={
										styles[
											'home__countact-us-content-contacts-item'
										]
									}>
									<span>
										<EmailIcon />
									</span>
									<Link href={'mailto:Sales@iroottech.de'}>
										Sales@iroottech.de
									</Link>
								</div>
							</div>
						</div>
						<div className='w-full lg:w/12'>
							<ContactUsForm />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
