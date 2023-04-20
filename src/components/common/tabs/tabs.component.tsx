/* eslint-disable @next/next/no-img-element */
import { ErpIcon, MobileIcon, UiIcon, UpdateIcon, WebIcon } from '@/components';
import { Tab, TabList, TabPanel, Tabs as Tbs } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import styles from './tabs.module.scss';
interface Props {}

export const Tabs: React.FC<Props> = () => {
	return (
		<Tbs className={styles['tabs']} selectedTabClassName={'tabs-selected'}>
			<TabList className={styles['tabs__list']}>
				<Tab className={styles['tabs__tab']}>
					<span className={styles['tabs__tab-icon']}>
						<MobileIcon />
					</span>{' '}
					Mobile App System
				</Tab>
				<Tab className={styles['tabs__tab']}>
					<span className={styles['tabs__tab-icon']}>
						<WebIcon />
					</span>{' '}
					Web Development
				</Tab>
				<Tab className={styles['tabs__tab']}>
					<span className={styles['tabs__tab-icon']}>
						<ErpIcon />
					</span>{' '}
					ERP System
				</Tab>
				<Tab className={styles['tabs__tab']}>
					<span className={styles['tabs__tab-icon']}>
						<UiIcon />
					</span>{' '}
					UI/UX Design
				</Tab>
				<Tab className={styles['tabs__tab']}>
					<span className={styles['tabs__tab-icon']}>
						<UpdateIcon />
					</span>{' '}
					Software Update
				</Tab>
			</TabList>

			<TabPanel>
				<div className={styles['tabs__panel']}>
					<img
						src='/images/mobile-img.png'
						alt='Mobile App System'
						className={styles['tabs__panel-img']}
					/>
					<div className={styles['tabs__panel-content']}>
						<p className={styles['tabs__panel-content-text']}>
							With our world-class professional developers and our
							great tools and technologies, we will improve your
							experience and help your business growth with custom
							mobile apps for iOS and Android.
						</p>

						<div className={styles['tabs__panel-content-tech']}>
							<div className={styles['tabs__icon-container']}>
								<div className='relative'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--native']}`}></div>
									<div
										className={`${styles['tabs__icon']}  ${styles['tabs__icon--native-second']}`}></div>
								</div>

								<p className={styles['tabs__icon-text']}>
									React Native App Development
								</p>
							</div>

							<div className={styles['tabs__icon-container']}>
								<div className='relative'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--apple']}`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--apple-second']}`}></div>
								</div>

								<p className={styles['tabs__icon-text']}>
									Apple app development
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--flutter']}`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--flutter-second']}`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Flutter app development
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--android']}`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--android-second']}`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Android app development
								</p>
							</div>
						</div>
					</div>
				</div>
			</TabPanel>
			<TabPanel>
				<div className={styles['tabs__panel']}>
					<img
						src='/images/web-img.png'
						alt='Web Development'
						className={styles['tabs__panel-img']}
					/>
					<div className={styles['tabs__panel-content']}>
						<p className={styles['tabs__panel-content-text']}>
							With our world-class professional developers and our
							great tools and technologies, we will improve your
							experience and help your business growth with custom
							mobile apps for iOS and Android.
						</p>

						<div className={styles['tabs__panel-content-tech']}>
							<div className={styles['tabs__icon-container']}>
								<div className='relative'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--native']}`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--native-second']}`}></div>
								</div>

								<p className={styles['tabs__icon-text']}>
									React Native App Development
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--js']}`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--js-second']}`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Java Script
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--angular']}`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--angular-second']}`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Angular
								</p>
							</div>

							<div className={styles['tabs__icon-container']}>
								<div className='relative'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--php']}`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--php-second']}`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>Php</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--python']}`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--python-second']}`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Python
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--node']}`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--node-second']}`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Node js.
								</p>
							</div>
						</div>
					</div>
				</div>
			</TabPanel>
			<TabPanel>
				<div className={styles['tabs__panel']}>
					<img
						src='/images/erp-img.png'
						alt='ERB System'
						className={styles['tabs__panel-img']}
					/>
					<div className={styles['tabs__panel-content']}>
						<p className={styles['tabs__panel-content-text']}>
							With our world-class professional developers and our
							great tools and technologies, we will improve your
							experience and help your business growth with custom
							mobile apps for iOS and Android.
						</p>

						<div className={styles['tabs__panel-content-tech']}>
							<div className={styles['tabs__icon-container']}>
								<div className='relative'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--python']}`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--python-second']}`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Python
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--django']}`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--django-second']}`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Django
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--odoo']}`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--odoo-second']}`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Odoo
								</p>
							</div>
						</div>
					</div>
				</div>
			</TabPanel>
			<TabPanel>
				<div className={styles['tabs__panel']}>
					<img
						src='/images/ui-img.png'
						alt='UI/UX Desgin'
						className={styles['tabs__panel-img']}
					/>
					<div className={styles['tabs__panel-content']}>
						<p className={styles['tabs__panel-content-text']}>
							With our world-class professional developers and our
							great tools and technologies, we will improve your
							experience and help your business growth with custom
							mobile apps for iOS and Android.
						</p>

						<div className={styles['tabs__panel-content-tech']}>
							<div className={styles['tabs__icon-container']}>
								<div className='relative'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--figma']}`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--figma-second']}`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Figma
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--ps']}`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--ps-second']}`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Photoshop
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--ai']}`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--ai-second']}`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Illustrator
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--xd']}`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--xd-second']}`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>XD</p>
							</div>
						</div>
					</div>
				</div>
			</TabPanel>
			<TabPanel>
				<div className={styles['tabs__panel']}>
					<img
						src='/images/update-img.png'
						alt='Software Update'
						className={styles['tabs__panel-img']}
					/>
					<div className={styles['tabs__panel-content']}>
						<p className={styles['tabs__panel-content-text']}>
							With our world-class professional developers and our
							great tools and technologies, we will improve your
							experience and help your business growth with custom
							mobile apps for iOS and Android.
						</p>

						<div className={styles['tabs__panel-content-tech']}>
							<div className={styles['tabs__icon-container']}>
								<div className='relative'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--node']}`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--node-second']}`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Node js.
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--js']}`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--js-second']}`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Java Script
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--python']}`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--python-second']}`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Python
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--odoo']}`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--odoo-second']}`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Odoo
								</p>
							</div>
						</div>
					</div>
				</div>
			</TabPanel>
		</Tbs>
	);
};
