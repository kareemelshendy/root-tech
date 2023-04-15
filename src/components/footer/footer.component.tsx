import { EmailIcon, LanguageIcon, LocationIcon, PhoneIcon } from '@/components';
import styles from './footer.module.scss';
import Link from 'next/link';

interface Props {}
export const Footer: React.FC<Props> = () => {
	return (
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
							<Link href={'tel:+4915754411184'}>(+49) 157 54411184</Link>
						</div>
						<div className={styles['footer__top-contact-item']}>
							<span>
								<EmailIcon />
							</span>
							<Link href={'mailto:Info@iroottech.com'}>Info@iroottech.com</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
