import Api from './api';

const NotesServices = {
  index: () => Api.get('/notes'),
  create: () => Api.post('/notes', {
    title: 'Hello World',
    body: 'Reo latire am dori matiro, latiremo emulari adapare dori me. Imperavi am reo emulari dore latire dori ameno dori me. Dori me imperavi interimo omenare dore matiro latire ameno dimere. Omenare dore matiro me matiremo, emulari interimo reo dori me. Dori me dori dore matiremo, dimere ameno latire interimo reo. Adapare dimere me omenare latire dori me matiro am latiremo. Am dore latiremo matiremo dori, interimo adapare dori me emulari.'
  }),
  delete: (id) => Api.delete(`/notes/${id}`)
}

export default NotesServices;