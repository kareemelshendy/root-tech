/* This example requires Tailwind CSS v2.0+ */
import { HTMLProps } from 'react';
import styles from './success-modal.module.scss';
import { CloseIcon } from '@/components';

interface Props extends HTMLProps<HTMLDivElement> {
	show: boolean;
	setShow: any;
}

export const SuccessModal: React.FC<Props> = ({ show, setShow, children }) => {
	return (
		<div
			className={`${styles['modal']} ${
				show ? styles['modal--show'] : ''
			}`.trim()}
			onClick={() => setShow(false)}>
			<div
				onClick={(e) => e.stopPropagation()}
				className={`${styles['modal__content']} ${
					show ? styles['modal__content--show'] : ''
				}`.trim()}>
				<button
					className={styles['modal__close-button']}
					onClick={() => setShow(false)}
					type='button'>
					<CloseIcon />
				</button>
				{children}

				{/* <img
					src='./images/green-bubbles.png'
					alt=''
					className='absolute left-0 bottom-0'
				/> */}
			</div>
		</div>
	);
};
