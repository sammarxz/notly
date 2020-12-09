import Api from './api';

const NotesServices = {
  index: () => Api.get('/notes'),
  create: () => Api.post('/notes', {
    title: 'New Note',
    body: ''
  }),
  delete: (id) => Api.delete(`/notes/${id}`),
  update: (id, params) => Api.put(`/notes/${id}`, params),
  search: (query) => Api.get(`/notes/search?query=${query}`),
};

export default NotesServices;