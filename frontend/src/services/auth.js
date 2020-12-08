export const isAuthenticated = () => localStorage.getItem('user') !== null;
export const getToken = () => localStorage.getItem('token');
export const getUser = () => localStorage.getItem('user');
