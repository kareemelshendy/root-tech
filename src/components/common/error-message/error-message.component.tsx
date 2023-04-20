interface Props {
	message: string;
}

export const ErrorMessage: React.FC<Props> = ({ message }) => {
	return <span className='error-message'>{message}</span>;
};
