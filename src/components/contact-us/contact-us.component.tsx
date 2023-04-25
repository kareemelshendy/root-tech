import styles from './contact-us.module.scss';
import {
	ContactUsForm,
	EmailIcon,
	LocationIcon,
	PhoneIcon,
} from '@/components';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

interface Props {}

export const ContactUs: React.FC<Props> = () => {
	const { t } = useTranslation();
	return (
		<div className={styles['contact-us']}>
			<div className={styles['contact-us__bg']}>
				<div className='container'>
					<div className={styles['contact-us__form-wrapper']}>
						<h2 className={styles['contact-us__form-title']}>
							{t('common:contact.talk')}
						</h2>
						<p className={styles['contact-us__form-desc']}>
						{t('common:contact.vision')}
						</p>

						<ContactUsForm />
					</div>
				</div>
			</div>

			<div className={styles['contact-us__info']}>
				<div className='w-full lg:w-1/2'>
					<h3 className={styles['contact-us__title']}>
					{t('common:contact.touch')}
					</h3>
					<p className={styles['contact-us__desc']}>
					{t('common:contact.desc')}
					</p>

					<h4 className={styles['contact-us__contacts-title']}>
						{t('common:contact.contacts')}
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
							<Link href={'tel:+4917648985373'}>
							(+49) 176 48985373
							</Link>
						</div>
						<div className={styles['contact-us__contacts-item']}>
							<span>
								<EmailIcon />
							</span>
							<Link href={'mailto:Sales@iroottech.de'}>
								Sales@iroottech.de
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
