import styles from './about.module.scss';

interface Props {}

export const About: React.FC<Props> = () => {
	return (
		<section className={styles['about']}>
			<div className='container'>
				<h2 className={styles['about__title']}>
					Who we <span className='text-colorPrimary'>Are?</span>
				</h2>
				<p className={styles['about__desc']}>
					We are a leading IT company with headquarters in Bochum,
					Germany , consisting of highly qualified software and
					hardware engineers with the mission to provide high quality,
					innovative and cost-effective solutions and professional,
					outsourcing services for business processes .
				</p>
			</div>
			<div className={styles['about__img']}></div>

			<div className={styles['about__vision']}>
				<div className={styles['about__vision-wrapper']}>
					<div className={styles['about__vision-content']}>
						<h3 className={styles['about__vision-content-title']}>
							Our{' '}
							<span className='text-colorPrimary'>Vision</span>
						</h3>

						<p className={styles['about__vision-content-desc']}>
							At iRoot Tech, our vision is to Build a healthy
							societies at various levels & strong economy, and
							create innovative and intuitive software solutions
							that empower businesses and individuals to achieve
							their goals with ease. We believe that technology
							should be accessible to everyone and that software
							should be designed with the user in mind.
						</p>
					</div>
					<img
						src='/images/vision.png'
						alt=''
						className={styles['about__vision-img']}
					/>
				</div>
			</div>
			<div className={styles['about__mission']}>
				<div className={styles['about__mission-wrapper']}>
					<img
						src='/images/mission.png'
						alt=''
						className={styles['about__mission-img']}
					/>
					<div className={styles['about__mission-content']}>
						<h3 className={styles['about__mission-content-title']}>
							Our{' '}
							<span className='text-colorPrimary'>Mission</span>
						</h3>

						<p className={styles['about__mission-content-desc']}>
							We help companies to process the data with new ways,
							discovering hidden insights & patterns by using the
							most efficient and effective technologies. We
							believe that every business is different, and
							therefore, software solutions should be tailored to
							fit their requirements. We are committed to
							delivering high-quality software products that are
							user-friendly, reliable, and scalable.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
