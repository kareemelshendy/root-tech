import styles from './footer.module.scss';

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

					<div className={styles['footer__top-contact']}>aa</div>
				</div>
			</div>
		</footer>
	);
};
