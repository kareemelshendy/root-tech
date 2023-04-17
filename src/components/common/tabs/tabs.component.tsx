import { MobileIcon } from '@/components/icons';
import { Tab, TabList, TabPanel, Tabs as Tbs } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
interface Props {}

export const Tabs: React.FC<Props> = () => {
	return (
		<Tbs
			className={'flex gap-[19px]'}
			selectedTabClassName='bg-colorPrimary rounded-default text-whtie'>
			<TabList className={'flex flex-col gap-[21px]'}>
				<Tab className={'border-0 cursor-pointer'}>
					<div className='flex  items-center gap-[11px] text-black py-[20px] rounded-default px-[17px] text-[28px] font-bold'>
						<span className='h-[70px] w-[70px] rounded-full flex items-center justify-center bg-white text-black text-[42px]'>
							<MobileIcon />
						</span>{' '}
						Mobile App System
					</div>
				</Tab>
				<Tab className={'border-0 cursor-pointer'}>
					<div className='flex  items-center gap-[11px]  text-black py-[20px] rounded-default px-[17px] text-[28px] font-bold'>
						<span className='h-[70px] w-[70px] rounded-full flex items-center justify-center bg-white text-black text-[42px]'>
							<MobileIcon />
						</span>{' '}
						Mobile App System
					</div>
				</Tab>
			</TabList>

			<TabPanel>
				<h2>Any content 1</h2>
			</TabPanel>
			<TabPanel>
				<h2>Any content 2</h2>
			</TabPanel>
		</Tbs>
	);
};
