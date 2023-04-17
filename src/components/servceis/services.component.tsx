import styles from './services.module.scss';
interface Props {}

export const Services: React.FC<Props> = () => {
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
		</section>
	);
};
