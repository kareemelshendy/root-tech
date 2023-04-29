import axios from 'axios';

const sendEmail = async (data: any) => {
	const formData = new FormData();

	Object.entries(data).forEach(([key, value]) => {
		if (value !== undefined) {
			if (Array.isArray(value)) {
				value.forEach((v) => {
					formData.append(key, v);
				});
			} else {
				formData.set(key, value as string);
			}
		}
	});

	return axios({
		method: 'post',
		url: '/api/send-mail',
		data: data,
	});
};

export default sendEmail;
