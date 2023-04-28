import sendEmail from '@/lib/sendEmail';
import { useState } from 'react';
interface Props {
	name: string;
	phone: string;
	email: string;
	service: string;
	message: string;
}

export const useSendEmail = () => {
	const [error, setError] = useState<Error | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [success, setSuccess] = useState<boolean>(false);

	const sendContactEmail = async (body: Props) => {
		setIsLoading(true);
		setError(null);
		try {
			await sendEmail(body);
			setSuccess(true);
			setIsLoading(false);
		} catch (error: any) {
			setError(error);
			setIsLoading(false);
		}
	};

	return {
		isLoading,
		error,
		sendContactEmail,
		success,
	};
};
