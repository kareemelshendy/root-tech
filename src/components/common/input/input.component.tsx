import { Control, Controller, FieldValues } from 'react-hook-form';
import styles from './input.module.scss';

interface Props {
	name: string;
	control: Control<FieldValues, any>;
	placeholder?: string;
	type?: string;
	defaultValue?: string;
	label: string;
}

export const Input: React.FC<Props> = ({
	name,
	control,
	placeholder = '',
	type = 'text',
	defaultValue = '',
	label,
}) => {
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			render={({ field, formState: { errors } }) => (
				<>
					<label className={styles['label']} htmlFor={name}>
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
	);
};
