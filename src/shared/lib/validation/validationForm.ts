
export interface IValidation {
  message: string;
  isValid: boolean;
}


export const validatorEmail = (value: string): IValidation => {
  const regMail = /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z0-9-]{2,6}$/;
  const regMails = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!value) {
    const validDatas = {
      message: "Please input your email",
      isValid: true
    }
    return validDatas;
  } if (!regMails.test(value) || !regMail.test(value)) {
    const validDatas = {
      message: "Please input a valid email",
      isValid: false
    }
    return validDatas;
  } 
  const validDatas = {
    message: "P",
    isValid: true
  }
  return validDatas;
  
};
