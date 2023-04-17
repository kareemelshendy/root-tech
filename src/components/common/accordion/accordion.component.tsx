import { HTMLProps, useEffect, useRef, useState } from 'react';
import styles from './accordion.module.scss';
import { DownArrowIcon } from '@/components/icons';

interface Props extends HTMLProps<HTMLDivElement> {
	title: string;
}

export const Accordion: React.FC<Props> = ({ title, children }) => {
	const [show, setShow] = useState(false);
	const [currentHeight, setCurrentHight] = useState<string>();
	const contentRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (show) {
			let height = contentRef.current?.clientHeight!;
			console.log('height', height);

			setCurrentHight(`${height}px`);
		} else {
			setCurrentHight('0px');
		}
	}, [show]);

	return (
		<div className={styles['accordion']}>
			<button
				className={styles['accordion__button']}
				onClick={() => setShow(!show)}>
				<h3 className={styles['accordion__button-text']}>{title}</h3>{' '}
				<DownArrowIcon />
			</button>
			<div
				className={styles['accordion__content']}
				style={{ height: currentHeight }}>
				<div ref={contentRef}>{children}</div>
			</div>
		</div>
	);
};
