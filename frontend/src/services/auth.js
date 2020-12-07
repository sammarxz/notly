export const isAuthenticated = () => localStorage.getItem('user') !== null;
export const getToken = () => localStorage.getItem('user');
