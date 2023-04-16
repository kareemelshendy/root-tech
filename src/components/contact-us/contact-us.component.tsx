import { useForm } from 'react-hook-form';
import styles from './contact-us.module.scss';
import { Input } from '@/components';

interface Props {}

export const ContactUs: React.FC<Props> = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();

	const onSubmit = (data: any) => {
		console.log('data', data);
	};
	return (
		<div className={styles['contact-us']}>
			<div className={styles['contact-us__bg']}>
				<div className='container'>
					<div className={styles['contact-us__form-wrapper']}>
						<h2 className={styles['contact-us__form-title']}>
							Let’s Talk
						</h2>
						<p className={styles['contact-us__form-desc']}>
							We are working with clients of all sizes from new
							start-up business to well-established businesses
						</p>

						<form onSubmit={handleSubmit(onSubmit)}>
							<Input
								name='name'
								placeholder='Your name'
								label='Your name'
								control={control}
							/>
							<Input
								name='email'
								placeholder='Your email'
								label='Your email'
								control={control}
							/>
							<Input
								name='desciption'
								placeholder='Description of your project'
								label='Desciption'
								control={control}
								type='textarea'
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
