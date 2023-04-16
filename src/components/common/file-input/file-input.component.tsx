import { AttachIcon } from '@/components';
import styles from './flie-input.module.scss';

interface Props {}

export const FileInput: React.FC<Props> = () => {
	return (
		<>
			<label htmlFor='file' className={styles['input__label']}>
				<span>
					<AttachIcon />
				</span>
				Attach file
			</label>
			<input type='file' name='' id='file' className={styles['input']} />
		</>
	);
};
