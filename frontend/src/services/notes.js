import Api from './api';

const NotesServices = {
  index: () => Api.get('/notes'),
}

export default NotesServices;