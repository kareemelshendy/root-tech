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
							<img
								src='/images/react-native.png'
								alt='Mobile App System'
							/>
							<img
								src='/images/apple-app.png'
								alt='Mobile App System'
							/>
							<img
								src='/images/flutter-app.png'
								alt='Mobile App System'
							/>
							<img
								src='/images/android-app.png'
								alt='Mobile App System'
							/>
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
							<img
								src='/images/react-native.png'
								alt='Mobile App System'
							/>
							<img src='/images/js.png' alt='Mobile App System' />
							<img
								src='/images/angular.png'
								alt='Mobile App System'
							/>
							<img
								src='/images/php.png'
								alt='Mobile App System'
							/>
							<img
								src='/images/python.png'
								alt='Mobile App System'
							/>
							<img
								src='/images/node.png'
								alt='Mobile App System'
							/>
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
							<img
								src='/images/python.png'
								alt='Mobile App System'
							/>
							<img
								src='/images/django.png'
								alt='Mobile App System'
							/>
							<img
								src='/images/odoo.png'
								alt='Mobile App System'
							/>
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
							<img
								src='/images/figma.png'
								alt='Mobile App System'
							/>
							<img
								src='/images/photoshop.png'
								alt='Mobile App System'
							/>
							<img
								src='/images/illustrator.png'
								alt='Mobile App System'
							/>
							<img
								src='/images/xd.png'
								alt='Mobile App System'
							/>
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
							<img
								src='/images/node.png'
								alt='Mobile App System'
							/>
							<img
								src='/images/js.png'
								alt='Mobile App System'
							/>
							<img
								src='/images/python.png'
								alt='Mobile App System'
							/>
							<img
								src='/images/odoo.png'
								alt='Mobile App System'
							/>
						</div>
					</div>
				</div>
			</TabPanel>
		</Tbs>
	);
};
