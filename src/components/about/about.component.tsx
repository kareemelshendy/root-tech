/* eslint-disable @next/next/no-img-element */
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import styles from './about.module.scss';

interface Props {}

export const About: React.FC<Props> = () => {
	const { t } = useTranslation();
	return (
		<section className={styles['about']}>
			<div className='container'>
				<h2 className={styles['about__title']}>
					{/* Who we <span className='text-colorPrimary'>Are?</span> */}
					<Trans
						i18nKey='common:about.title'
						components={[
							<span key={'s0'} className='text-colorPrimary' />,
						]}
					/>
				</h2>
				<p className={styles['about__desc']}>
					{t('common:about.desc-1')}
				</p>
				<p className={styles['about__desc']}>
					{t('common:about.desc-2')}
				</p>
				<p className={styles['about__desc']}>
					{' '}
					{t('common:about.desc-3')}
				</p>
			</div>
			<div className={styles['about__img']}></div>

			<div className={styles['about__vision']}>
				<div className={styles['about__vision-wrapper']}>
					<div className={styles['about__vision-content']}>
						<h3 className={styles['about__vision-content-title']}>
							<Trans
								i18nKey='common:about.vision'
								components={[
									<span
										key={'s0'}
										className='text-colorPrimary'
									/>,
								]}
							/>
						</h3>

						<p className={styles['about__vision-content-desc']}>
							{t('common:about.vision-desc')}
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
							<Trans
								i18nKey='common:about.mission'
								components={[
									<span
										key={'s0'}
										className='text-colorPrimary'
									/>,
								]}
							/>
						</h3>

						<p className={styles['about__mission-content-desc']}>
							{t('common:about.mission-desc')}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
