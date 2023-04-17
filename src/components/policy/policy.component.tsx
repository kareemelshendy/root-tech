import { Accordion } from '@/components';
import styles from './policy.module.scss';
import { Fragment } from 'react';
interface Props {}

export const Policy = () => {
	return (
		<section className={styles['policy']}>
			<h2 className={styles['policy__title']}>
				Our <span className='text-colorPrimary'>Privacy Policies</span>
			</h2>

			<span className={styles['policy__last-update']}>
				Last update: 25.08.2022
			</span>

			<p className={styles['policy__desc']}>
				At iRoot Tech, we understand the importance of privacy and are
				committed to protecting the confidentiality of our users
				personal information. This Privacy Policy outlines how we
				collect, use, and disclose personal information that we obtain
				through our software products and services.
			</p>

			<p className={styles['policy__desc']}>
				We believe in transparency and want our users to understand how
				their personal information is being used. By using our software
				products and services, you agree to the collection, use, and
				disclosure of your personal information as outlined in this
				Privacy Policy. Please take the time to read this Privacy Policy
				carefully.
			</p>

			<p className={styles['policy__desc']}>
				If you have any questions or concerns about our use of your
				personal information, please do not hesitate to contact us.
			</p>

			<p className={styles['policy__desc']}>
				We may update this Privacy Policy from time to time, and we
				encourage you to review it periodically to stay informed about
				our privacy practices. This Privacy Policy is effective as of
				the date indicated at the top of the page.
			</p>
			<p className={styles['policy__desc']}>
				Thank you for choosing our software products and services. We
				are committed to protecting your privacy and providing you with
				the best possible user experience.
			</p>

			{Array.from({ length: 6 }).map((_, index) => (
				<Fragment key={index}>
					<Accordion
						title={`${index+1}.What is personal data and what is processing of personal data?`}>
						Personal data (or “data”) is any information relating to
						you and that alone or in combination with other pieces
						of information gives the opportunity to the person that
						collects and processes such information to identify you
						as an individual. It can be your name, your
						identification number, your location data, or
						information related to your physical, physiological,
						genetic, mental, economic, cultural or social life.
						Processing of the information means any action with your
						personal data, for example, collection, recording,
						organization, structuring, storage, use, disclosure by
						any means and so on.
					</Accordion>
				</Fragment>
			))}
		</section>
	);
};
