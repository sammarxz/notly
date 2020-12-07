import Api from './api';

const UsersService = {
  register: (params) => Api.post('/users/register', params),
  login: async (params) => {
    const response = await Api.post('/users/login', params);
    const { name, email } = response.data.user;
    const user = {
      name,
      email,
    };
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', response.data.token);
  },
};

export default UsersService;
