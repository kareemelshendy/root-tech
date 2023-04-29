import { useForm } from 'react-hook-form';
import styles from './contact-us-form.module.scss';
import {
	ErrorMessage,
	FileInput,
	Input,
	SuccessIcon,
	SuccessModal,
} from '@/components';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import sendEmail from '@/lib/sendEmail';
import { useSendEmail } from '@/hooks';
import { useEffect, useState } from 'react';

interface Props {}
export const ContactUsForm: React.FC<Props> = () => {
	const [isFileReset, setIsFileReset] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const { t } = useTranslation();
	const {
		handleSubmit,
		control,
		register,
		trigger,
		setValue,
		reset,
		formState: { errors },
	} = useForm();
	const { pathname } = useRouter();
	const { error, sendContactEmail, isLoading, success } = useSendEmail();

	const onSubmit = (data: any) => {
		sendContactEmail(data);
	};

	useEffect(() => {
		if (success) {
			setIsFileReset(true);
			reset();
			setShowModal(true);
		}
	}, [success]);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles['form']}>
			{error ? (
				<div className={styles['form__error']}>{t('common:error')}</div>
			) : null}
			<SuccessModal show={showModal} setShow={setShowModal}>
				<div className={styles['form__modal']}>
					<span className={styles['form__modal-icon']}>
						<SuccessIcon />
					</span>
					<h2 className={styles['form__modal-title']}>
						{t('common:request-success')}
					</h2>
					<p className={styles['form__modal-subtitle']}>
						{t('common:request-desc')}
					</p>
				</div>
			</SuccessModal>
			<Input
				name='name'
				placeholder={t('common:contact.form.labels.name')}
				label={t('common:contact.form.labels.name')}
				control={control}
				error={errors}
				required
			/>
			<Input
				name='email'
				placeholder={t('common:contact.form.labels.email')}
				label={t('common:contact.form.labels.email')}
				control={control}
				type='email'
				error={errors}
				required
			/>
			<Input
				name='description'
				placeholder={t('common:contact.form.placeholder.description')}
				label={t('common:contact.form.labels.description')}
				control={control}
				type='textarea'
				error={errors}
				required
			/>

			<div className='mb-6'>
				<div>
					<div className='flex gap-4 items-center '>
						<input
							{...register('subscribe', {})}
							type='checkbox'
							name='subscribe'
							id='subscribe'
							className='accent-colorPrimary w-4 h-4 rounded'
						/>
						<label
							htmlFor='subscribe'
							className={`${
								pathname === '/' ? 'text-current' : 'text-white'
							}`}>
							{t('common:contact.form.labels.subscribe')}
						</label>
					</div>
				</div>
				{errors[`subscribe`] ? (
					<ErrorMessage
						message={errors[`subscribe`].message as string}
					/>
				) : null}
			</div>

			<div
				className={`flex justify-between flex-col  ${
					pathname === '/'
						? 'items-start'
						: 'items-center md:flex-row'
				} gap-6`}>
				<div
					className={`flex flex-col md:flex-row gap-4 ${
						pathname === '/' ? '' : 'items-center'
					}`}>
					<FileInput
						control={control}
						name='files'
						trigger={trigger}
						setValue={setValue}
						isFileReset={isFileReset}
						rules={{
							// required: {
							// 	value: true,
							// 	message: 'Required Field',
							// },
							validate: {
								maxLength: (value: string) => {
									if (
										Array.isArray(value) &&
										value.length > 3
									) {
										return 'Max 3 files';
									} else {
										return true;
									}
								},
							},
						}}
					/>
				</div>
				<button
					type='submit'
					className={`${styles['form__submit']} ${
						pathname === '/' ? styles['form__submit--primary'] : ''
					}`}
					disabled={isLoading}>
					{isLoading ? (
						<div className='lds-dual-ring'></div>
					) : (
						<>{t('common:contact.form.submit')}</>
					)}
				</button>
			</div>
		</form>
	);
};
