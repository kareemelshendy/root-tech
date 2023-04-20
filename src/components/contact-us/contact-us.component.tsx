import styles from './contact-us.module.scss';
import {
	ContactUsForm,
	EmailIcon,
	LocationIcon,
	PhoneIcon,
} from '@/components';
import Link from 'next/link';

interface Props {}

export const ContactUs: React.FC<Props> = () => {
	return (
		<div className={styles['contact-us']}>
			<div className={styles['contact-us__bg']}>
				<div className='container'>
					<div className={styles['contact-us__form-wrapper']}>
						<h2 className={styles['contact-us__form-title']}>
							Let’s Talk
						</h2>
						<p className={styles['contact-us__form-desc']}>
							We are working with clients of all sizes from new
							start-up business to well-established businesses
						</p>

						<ContactUsForm />
					</div>
				</div>
			</div>

			<div className={styles['contact-us__info']}>
				<div className='w-full lg:w-1/2'>
					<h3 className={styles['contact-us__title']}>
						Get in touch
					</h3>
					<p className={styles['contact-us__desc']}>
						We are working with clients of all sizes from new
						start-up business to well-established businesses
					</p>

					<h4 className={styles['contact-us__contacts-title']}>
						Contacts
					</h4>

					<div className={styles['contact-us__contacts']}>
						<div className={styles['contact-us__contacts-item']}>
							<span>
								<LocationIcon />
							</span>
							castroper st 273 44791, Germany ,Bochum
						</div>

						<div className={styles['contact-us__contacts-item']}>
							<span>
								<PhoneIcon />
							</span>
							<Link href={'tel:+4915754411184'}>
								(+49) 157 54411184
							</Link>
						</div>
						<div className={styles['contact-us__contacts-item']}>
							<span>
								<EmailIcon />
							</span>
							<Link href={'mailto:Info@iroottech.com'}>
								Info@iroottech.com
							</Link>
						</div>
					</div>
				</div>
				{/* <div className={styles['contact-us__map']}>s</div> */}
				<img
					src='/images/map.png'
					alt='map'
					className={styles['contact-us__map']}
				/>
			</div>
		</div>
	);
};
