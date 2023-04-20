import { useForm } from 'react-hook-form';
import styles from './contact-us-form.module.scss';
import { ErrorMessage, FileInput, Input } from '@/components';
import { useRouter } from 'next/router';
interface Props {}
export const ContactUsForm: React.FC<Props> = () => {
	const {
		handleSubmit,
		control,
		register,
		trigger,
		setValue,
		formState: { errors },
	} = useForm();
	const { pathname } = useRouter();

	const onSubmit = (data: any) => {
		console.log('data', data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles['form']}>
			<Input
				name='name'
				placeholder='Your name'
				label='Your name'
				control={control}
				error={errors}
				required
			/>
			<Input
				name='email'
				placeholder='Your email'
				label='Your email'
				control={control}
				type='email'
				error={errors}
				required
			/>
			<Input
				name='desciption'
				placeholder='Description of your project'
				label='Desciption'
				control={control}
				type='textarea'
				error={errors}
				required
			/>

			<div className='mb-6'>
				<div>
					<div className='flex gap-4 items-center '>
						<input
							{...register('subscibe', {
								required: {
									value: true,
									message: 'Required Field',
								},
							})}
							type='checkbox'
							name='subscibe'
							id='subscibe'
							className='accent-colorPrimary w-4 h-4 rounded'
						/>
						<label
							htmlFor='subscibe'
							className={`${
								pathname === '/' ? 'text-current' : 'text-white'
							}`}>
							Subscribe to newsletter
						</label>
					</div>
				</div>
				{errors[`subscibe`] ? (
					<ErrorMessage
						message={errors[`subscibe`].message as string}
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
						rules={{
							required: {
								value: true,
								message: 'Required Field',
							},
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
					}`}>
					submit
				</button>
			</div>
		</form>
	);
};
