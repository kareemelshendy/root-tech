/* eslint-disable @next/next/no-img-element */
import { ErpIcon, MobileIcon, UiIcon, UpdateIcon, WebIcon } from '@/components';
import { Tab, TabList, TabPanel, Tabs as Tbs } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import styles from './tabs.module.scss';
import useTranslation from 'next-translate/useTranslation';
interface Props {}

export const Tabs: React.FC<Props> = () => {
	const { t } = useTranslation();
	return (
		<Tbs className={styles['tabs']} selectedTabClassName={'tabs-selected'}>
			<TabList className={styles['tabs__list']}>
				<Tab className={styles['tabs__tab']}>
					<span className={styles['tabs__tab-icon']}>
						<MobileIcon />
					</span>{' '}
					{t('common:servcies.mobile.title')}
				</Tab>
				<Tab className={styles['tabs__tab']}>
					<span className={styles['tabs__tab-icon']}>
						<WebIcon />
					</span>{' '}
					{t('common:servcies.web.title')}
				</Tab>
				<Tab className={styles['tabs__tab']}>
					<span className={styles['tabs__tab-icon']}>
						<ErpIcon />
					</span>{' '}
					{t('common:servcies.erb.title')}
				</Tab>
				<Tab className={styles['tabs__tab']}>
					<span className={styles['tabs__tab-icon']}>
						<UiIcon />
					</span>{' '}
					{t('common:servcies.ui.title')}
				</Tab>
				<Tab className={styles['tabs__tab']}>
					<span className={styles['tabs__tab-icon']}>
						<UpdateIcon />
					</span>{' '}
					{t('common:servcies.software.title')}
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
							{t('common:servcies.mobile.desc')}
						</p>

						<div className={styles['tabs__panel-content-tech']}>
							<div className={styles['tabs__icon-container']}>
								<div className='relative group'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--native']} duration-300 opacity-100  group-hover:opacity-0`}></div>
									<div
										className={`${styles['tabs__icon']}  ${styles['tabs__icon--native-second']}  duration-300 opacity-0 group-hover:opacity-100`}></div>
								</div>

								<p className={styles['tabs__icon-text']}>
									React Native Development
								</p>
							</div>

							<div className={styles['tabs__icon-container']}>
								<div className='relative group'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--apple']} duration-300 opacity-100  group-hover:opacity-0`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--apple-second']} duration-300 opacity-0  group-hover:opacity-100`}></div>
								</div>

								<p className={styles['tabs__icon-text']}>
									Apple app development
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative group'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--flutter']} duration-300 opacity-100  group-hover:opacity-0`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--flutter-second']} duration-300 opacity-0  group-hover:opacity-100`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Flutter app development
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative group'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--android']} duration-300 opacity-100  group-hover:opacity-0`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--android-second']} duration-300 opacity-0  group-hover:opacity-100`}></div>
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
							{t('common:servcies.web.desc')}
						</p>

						<div className={styles['tabs__panel-content-tech']}>
							<div className={styles['tabs__icon-container']}>
								<div className='relative group'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--native']} duration-300 opacity-100  group-hover:opacity-0`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--native-second']} duration-300 opacity-0  group-hover:opacity-100`}></div>
								</div>

								<p className={styles['tabs__icon-text']}>
									React Native Development
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative group'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--js']} duration-300 opacity-100  group-hover:opacity-0`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--js-second']} duration-300 opacity-0  group-hover:opacity-100`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Java Script
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative group'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--angular']} duration-300 opacity-100  group-hover:opacity-0`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--angular-second']} duration-300 opacity-0  group-hover:opacity-100`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Angular
								</p>
							</div>

							<div className={styles['tabs__icon-container']}>
								<div className='relative group'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--php']} duration-300 opacity-100  group-hover:opacity-0`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--php-second']} duration-300 opacity-0  group-hover:opacity-100`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>Php</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative group'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--python']} duration-300 opacity-100  group-hover:opacity-0`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--python-second']} duration-300 opacity-0  group-hover:opacity-100`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Python
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative group'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--node']} duration-300 opacity-100  group-hover:opacity-0`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--node-second']} duration-300 opacity-0  group-hover:opacity-100`}></div>
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
							{t('common:servcies.erb.desc')}
						</p>

						<div className={styles['tabs__panel-content-tech']}>
							<div className={styles['tabs__icon-container']}>
								<div className='relative group'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--python']} duration-300 opacity-100  group-hover:opacity-0`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--python-second']} duration-300 opacity-0  group-hover:opacity-100`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Python
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative group'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--django']} duration-300 opacity-100  group-hover:opacity-0`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--django-second']} duration-300 opacity-0  group-hover:opacity-100`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Django
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative group'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--odoo']} duration-300 opacity-100  group-hover:opacity-0`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--odoo-second']} duration-300 opacity-0  group-hover:opacity-100`}></div>
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
							{t('common:servcies.ui.desc')}
						</p>

						<div className={styles['tabs__panel-content-tech']}>
							<div className={styles['tabs__icon-container']}>
								<div className='relative group'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--figma']} duration-300 opacity-100  group-hover:opacity-0`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--figma-second']} duration-300 opacity-0  group-hover:opacity-100`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Figma
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative group'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--ps']} duration-300 opacity-100  group-hover:opacity-0`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--ps-second']} duration-300 opacity-0  group-hover:opacity-100`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Photoshop
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative group'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--ai']} duration-300 opacity-100  group-hover:opacity-0`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--ai-second']} duration-300 opacity-0  group-hover:opacity-100`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Illustrator
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative group'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--xd']} duration-300 opacity-100  group-hover:opacity-0`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--xd-second']} duration-300 opacity-0  group-hover:opacity-100`}></div>
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
							{t('common:servcies.software.desc')}
						</p>

						<div className={styles['tabs__panel-content-tech']}>
							<div className={styles['tabs__icon-container']}>
								<div className='relative group'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--node']} duration-300 opacity-100  group-hover:opacity-0`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--node-second']} duration-300 opacity-0  group-hover:opacity-100`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Node js.
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative group'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--js']} duration-300 opacity-100  group-hover:opacity-0`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--js-second']} duration-300 opacity-0  group-hover:opacity-100`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Java Script
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative group'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--python']} duration-300 opacity-100  group-hover:opacity-0`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--python-second']} duration-300 opacity-0  group-hover:opacity-100`}></div>
								</div>
								<p className={styles['tabs__icon-text']}>
									Python
								</p>
							</div>
							<div className={styles['tabs__icon-container']}>
								<div className='relative group'>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--odoo']} duration-300 opacity-100  group-hover:opacity-0`}></div>
									<div
										className={`${styles['tabs__icon']} ${styles['tabs__icon--odoo-second']} duration-300 opacity-0  group-hover:opacity-100`}></div>
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
