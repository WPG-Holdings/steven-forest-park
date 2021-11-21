import { DungJingMemberInstance } from '@/api/instances';

export default {
  login: (userAccount, password) => {
    const url = '/login';
    const data = {
      account: userAccount,
      password: password,
    };

    return DungJingMemberInstance.post(url, data);
  },
  register: (userAccount, password) => {
    const url = 'register';
    const data = {
      account: userAccount,
      email: '',
      name: '',
      password: password,
      phone: '',
      termsFlag: '',
    };

    return DungJingMemberInstance.post(url, data);
  },
};
