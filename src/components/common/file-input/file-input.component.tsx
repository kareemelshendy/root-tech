import { AttachIcon, ErrorMessage, TrashIcon } from '@/components';
import styles from './flie-input.module.scss';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Control, FieldValues, useController } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';

interface Props {
	name: string;
	control: Control<FieldValues, object>;
	required?: boolean;
	setValue: any;
	rules?: any;
	trigger: any;
	isFileReset: boolean;
}

export const FileInput: React.FC<Props> = ({
	setValue,
	control,
	name,
	rules,
	trigger,
	isFileReset,
}) => {
	const [fileList, setFileList] = useState<File[]>([]);
	const { pathname } = useRouter();
	const {
		field,
		formState: { errors },
	} = useController({ name, control, rules });
	const { t } = useTranslation();

	const handleFileChange = (e: any) => {
		if (fileList.length < 3) {
			setFileList((oldValues) => [...oldValues, ...e.target.files]);
		}
	};

	useEffect(() => {
		setValue(name, fileList);
		if (fileList.length > 0) {
			// setError(name, );
			trigger(name);
		}
	}, [fileList, setValue, name]);

	useEffect(() => {
		if (isFileReset) {
			setFileList([]);
		}
	}, [isFileReset]);

	const deleteImage = (imageIndex: number) => {
		const updatedFileList = [...fileList];

		updatedFileList.splice(imageIndex, 1);

		setFileList(updatedFileList);
	};

	return (
		<>
			<div className='flex flex-col'>
				<div
					className={`flex flex-col md:flex-row gap-4  ${
						pathname === '/' ? '' : 'items-center'
					}`}>
					<label htmlFor='file' className={styles['input__label']}>
						<span>
							<AttachIcon />
						</span>
						{t('common:contact.form.labels.file')}
					</label>

					<p
						className={` font-semibold  w-[236px] ${
							pathname === '/'
								? 'text-current  '
								: 'text-white text-center md:text-left'
						}`}>
						{t('common:contact.form.max')}
					</p>
				</div>
				<div
					className={`mb-4 ${
						pathname === '/'
							? 'text-current'
							: 'text-white text-center md:text-left'
					}`}>
					{errors[name] ? (
						<ErrorMessage
							message={errors[name]?.message as string}
						/>
					) : null}
				</div>

				{fileList.map((file: File, index) => (
					<div
						className={` mb-4 rounded-default py-[6px] px-[20px] flex items-center w-[256px] gap-4 ${
							pathname === '/'
								? 'border border-colorPrimary'
								: 'bg-colorPrimary text-white'
						}`}
						key={file.name}>
						<button
							className='text-red-700'
							onClick={() => deleteImage(index)}>
							<TrashIcon />
						</button>
						<p className='truncate'>{file.name}</p>
					</div>
				))}
			</div>
			<input
				type='file'
				name=''
				id='file'
				className={styles['input']}
				multiple
				onChange={handleFileChange}
			/>
		</>
	);
};
