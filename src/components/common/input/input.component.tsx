import { Control, Controller, FieldValues } from 'react-hook-form';
import styles from './input.module.scss';
import { useRouter } from 'next/router';
import { ErrorMessage } from '@/components';

interface Props {
	name: string;
	control: Control<FieldValues, any>;
	placeholder?: string;
	type?: string;
	defaultValue?: string;
	label: string;
	error?: any;
	required?: boolean;
	rules?: any;
}

export const Input: React.FC<Props> = ({
	name,
	control,
	placeholder = '',
	type = 'text',
	defaultValue = '',
	label,
	error,
	rules = {},
	required,
}) => {
	const { pathname } = useRouter();

	return (
		<div className={styles['wrapper']}>
			<Controller
				name={name}
				control={control}
				defaultValue={defaultValue}
				rules={{
					...rules,
					validate: {
						...(required
							? {
									required: (value: string | number) => {
										if (typeof value === 'string') {
											if (value?.trim() !== '') {
												return true;
											}
										} else if (value) {
											return true;
										}

										return 'Required Field';
									},
							  }
							: {}),
						...rules?.validate,
					},
				}}
				render={({ field, formState: { errors } }) => (
					<>
						<label
							className={` ${styles['label']} ${
								pathname === '/' ? styles['label--black'] : ''
							}`}
							htmlFor={name}>
							{label}
						</label>
						{type === 'textarea' ? (
							<textarea
								className={styles['textarea']}
								placeholder={placeholder}
								{...field}
							/>
						) : (
							<input
								{...field}
								type={type}
								placeholder={placeholder}
								className={styles['input']}
							/>
						)}
					</>
				)}
			/>
			{error[name] ? (
				// <span className='error-message'>{}</span>
				<ErrorMessage message={error[name].message} />
			) : null}
		</div>
	);
};
