import axios from "axios";

const sendEmail = async (data: any) => {
  return axios({
    method: "post",
    url: "/api/send-mail",
    data,
  });
};

export default sendEmail;
