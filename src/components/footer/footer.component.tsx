/* eslint-disable @next/next/no-img-element */
import {
	EmailIcon,
	FacebookIcon,
	InstagramIcon,
	LanguageIcon,
	LinkedinIcon,
	LocationIcon,
	PhoneIcon,
	TwitterIcon,
	YoutubeIcon,
} from '@/components';
import styles from './footer.module.scss';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

interface Props {}
export const Footer: React.FC<Props> = () => {
	const { t } = useTranslation();
	const { locale } = useRouter();
	return (
		<>
			<footer className={styles['footer']}>
				<div className='container'>
					<div className={styles['footer__top']}>
						<div>
							<img src='./images/footer-logo.png' alt='' />
							<p className={styles['footer__top-title']}>
								Let’s start with your story
							</p>
						</div>

						<div className={styles['footer__top-contact']}>
							<div className={styles['footer__top-contact-item']}>
								<span>
									<LocationIcon />
								</span>
								castroper st 273 44791, Germany ,Bochum
							</div>

							<div className={styles['footer__top-contact-item']}>
								<span>
									<PhoneIcon />
								</span>
								<Link href={'tel:+4917648985373'}>
									(+49) 176 48985373
								</Link>
							</div>
							<div className={styles['footer__top-contact-item']}>
								<span>
									<EmailIcon />
								</span>
								<Link href={'mailto:Sales@iroottech.de'}>
									Sales@iroottech.de
								</Link>
							</div>
						</div>
					</div>

					<div className={styles['footer__body']}>
						<div
							className={`flex gap-0 md:gap-[50px] flex-col flex-wrap md:flex-row ${
								locale === 'de'
									? 'lg:gap-[130px]'
									: 'lg:gap-[171px]'
							}`.trim()}>
							<nav className={styles['footer__nav']}>
								<h5 className={styles['footer__nav-title']}>
									IROOT Technology
								</h5>

								<ul className={styles['footer__nav-menu']}>
									<li className={styles['footer__nav-item']}>
										<Link
											href={'/'}
											className={
												styles['footer__nav-link']
											}>
											{t('common:footer.home')}
										</Link>
									</li>

									<li className={styles['footer__nav-item']}>
										<Link
											href={'/services'}
											className={
												styles['footer__nav-link']
											}>
											{t('common:footer.services')}
										</Link>
									</li>
									<li className={styles['footer__nav-item']}>
										<Link
											href={'/policy'}
											className={
												styles['footer__nav-link']
											}>
											{t('common:footer.policies')}
										</Link>
									</li>
									<li className={styles['footer__nav-item']}>
										<Link
											href={'/about'}
											className={
												styles['footer__nav-link']
											}>
											{t('common:footer.about-us')}
										</Link>
									</li>
								</ul>
							</nav>
							<nav className={styles['footer__nav']}>
								<h5 className={styles['footer__nav-title']}>
									{t('common:footer.company')}
								</h5>

								<ul className={styles['footer__nav-menu']}>
									<li className={styles['footer__nav-item']}>
										<Link
											href={'/about'}
											className={
												styles['footer__nav-link']
											}>
											{t('common:footer.about')}
										</Link>
									</li>

									<li className={styles['footer__nav-item']}>
										<Link
											href={'/contact-us'}
											className={
												styles['footer__nav-link']
											}>
											{t('common:footer.contact')}
										</Link>
									</li>
									<li className={styles['footer__nav-item']}>
										<Link
											href={'/policy'}
											className={
												styles['footer__nav-link']
											}>
											{t('common:footer.cookies-policy')}
										</Link>
									</li>
									<li className={styles['footer__nav-item']}>
										<Link
											href={'/policy'}
											className={
												styles['footer__nav-link']
											}>
											{t('common:footer.privacy-policy')}
										</Link>
									</li>
									{/* <li className={styles['footer__nav-item']}>
										<Link
											href={'/terms'}
											className={
												styles['footer__nav-link']
											}>
											Terms of use
										</Link>
									</li> */}
								</ul>
							</nav>
							<nav className={styles['footer__nav']}>
								<h5 className={styles['footer__nav-title']}>
									{t('common:footer.services')}
								</h5>

								<ul className={styles['footer__nav-menu']}>
									<li className={styles['footer__nav-item']}>
										<p
											className={
												styles['footer__nav-link']
											}>
											{t('common:servcies.mobile.title')}
										</p>
									</li>

									<li className={styles['footer__nav-item']}>
										<p
											className={
												styles['footer__nav-link']
											}>
											{t('common:servcies.web.title')}
										</p>
									</li>
									<li className={styles['footer__nav-item']}>
										<p
											className={
												styles['footer__nav-link']
											}>
											{t('common:servcies.erb.title')}
										</p>
									</li>
									<li className={styles['footer__nav-item']}>
										<p
											className={
												styles['footer__nav-link']
											}>
											{t('common:servcies.ui.title')}{' '}
										</p>
									</li>
									<li className={styles['footer__nav-item']}>
										<p
											className={
												styles['footer__nav-link']
											}>
											{t(
												'common:servcies.security.title'
											)}
										</p>
									</li>
									<li className={styles['footer__nav-item']}>
										<p
											className={
												styles['footer__nav-link']
											}>
											{t(
												'common:servcies.database.title'
											)}
										</p>
									</li>
									<li className={styles['footer__nav-item']}>
										<p
											className={
												styles['footer__nav-link']
											}>
											{t('common:servcies.os.title')}
										</p>
									</li>
								</ul>
							</nav>
						</div>

						<div className={styles['footer__help']}>
							<h5 className={styles['footer__help-title']}>
								{t('common:footer.need-help')}
							</h5>
							<Link
								href={'/contact-us'}
								className={styles['footer__help-link']}>
								{' '}
								{t('common:footer.contact-us')}
							</Link>
						</div>
					</div>
				</div>
			</footer>
			<div className={styles['footer__bottom']}>
				<div className={styles['footer__bottom-wrapper']}>
					<p className={styles['footer__bottom-copy']}>
						copyright©iroottech 2022-2023
					</p>
					<div className={styles['footer__bottom-social']}>
						<Link
							href={'/#'}
							className={styles['footer__bottom-social-link']}>
							<FacebookIcon />
						</Link>
						<Link
							href={'/#'}
							className={styles['footer__bottom-social-link']}>
							<TwitterIcon />
						</Link>
						<Link
							href={'/#'}
							className={styles['footer__bottom-social-link']}>
							<InstagramIcon />
						</Link>
						<Link
							href={'/#'}
							className={styles['footer__bottom-social-link']}>
							<LinkedinIcon />
						</Link>
						<Link
							href={'/#'}
							className={styles['footer__bottom-social-link']}>
							<YoutubeIcon />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
