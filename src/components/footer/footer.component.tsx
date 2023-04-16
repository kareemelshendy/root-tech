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

interface Props {}
export const Footer: React.FC<Props> = () => {
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
								<Link href={'tel:+4915754411184'}>
									(+49) 157 54411184
								</Link>
							</div>
							<div className={styles['footer__top-contact-item']}>
								<span>
									<EmailIcon />
								</span>
								<Link href={'mailto:Info@iroottech.com'}>
									Info@iroottech.com
								</Link>
							</div>
						</div>
					</div>

					<div className={styles['footer__body']}>
						<div className='flex gap-0 md:gap-[90px] flex-col flex-wrap md:flex-row  lg:gap-[171px]'>
							<nav className={styles['footer__nav']}>
								<h5 className={styles['footer__nav-title']}>
									I Root Tech
								</h5>

								<ul className={styles['footer__nav-menu']}>
									<li className={styles['footer__nav-item']}>
										<Link
											href={'/'}
											className={
												styles['footer__nav-link']
											}>
											Home
										</Link>
									</li>

									<li className={styles['footer__nav-item']}>
										<Link
											href={'/services'}
											className={
												styles['footer__nav-link']
											}>
											Services
										</Link>
									</li>
									<li className={styles['footer__nav-item']}>
										<Link
											href={'/blog'}
											className={
												styles['footer__nav-link']
											}>
											Blog
										</Link>
									</li>
									<li className={styles['footer__nav-item']}>
										<Link
											href={'/about'}
											className={
												styles['footer__nav-link']
											}>
											About Us
										</Link>
									</li>
								</ul>
							</nav>
							<nav className={styles['footer__nav']}>
								<h5 className={styles['footer__nav-title']}>
									Company
								</h5>

								<ul className={styles['footer__nav-menu']}>
									<li className={styles['footer__nav-item']}>
										<Link
											href={'/about'}
											className={
												styles['footer__nav-link']
											}>
											About
										</Link>
									</li>

									<li className={styles['footer__nav-item']}>
										<Link
											href={'/contact-us'}
											className={
												styles['footer__nav-link']
											}>
											Contact
										</Link>
									</li>
									<li className={styles['footer__nav-item']}>
										<Link
											href={'/cookies-policy'}
											className={
												styles['footer__nav-link']
											}>
											Cookies Policy
										</Link>
									</li>
									<li className={styles['footer__nav-item']}>
										<Link
											href={'/policy'}
											className={
												styles['footer__nav-link']
											}>
											Privacy Policy
										</Link>
									</li>
									<li className={styles['footer__nav-item']}>
										<Link
											href={'/terms'}
											className={
												styles['footer__nav-link']
											}>
											Terms of use
										</Link>
									</li>
								</ul>
							</nav>
							<nav className={styles['footer__nav']}>
								<h5 className={styles['footer__nav-title']}>
									Services
								</h5>

								<ul className={styles['footer__nav-menu']}>
									<li className={styles['footer__nav-item']}>
										<p
											className={
												styles['footer__nav-link']
											}>
											Mobile App System
										</p>
									</li>

									<li className={styles['footer__nav-item']}>
										<p
											className={
												styles['footer__nav-link']
											}>
											Web Development
										</p>
									</li>
									<li className={styles['footer__nav-item']}>
										<p
											className={
												styles['footer__nav-link']
											}>
											ERB System
										</p>
									</li>
									<li className={styles['footer__nav-item']}>
										<p
											className={
												styles['footer__nav-link']
											}>
											UI/UX Design
										</p>
									</li>
									<li className={styles['footer__nav-item']}>
										<p
											className={
												styles['footer__nav-link']
											}>
											Security
										</p>
									</li>
									<li className={styles['footer__nav-item']}>
										<p
											className={
												styles['footer__nav-link']
											}>
											Database
										</p>
									</li>
									<li className={styles['footer__nav-item']}>
										<p
											className={
												styles['footer__nav-link']
											}>
											OS
										</p>
									</li>
								</ul>
							</nav>
						</div>

						<div className={styles['footer__help']}>
							<h5 className={styles['footer__help-title']}>
								Need Help?
							</h5>
							<Link
								href={'/contact-us'}
								className={styles['footer__help-link']}>
								{' '}
								Contact US
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
