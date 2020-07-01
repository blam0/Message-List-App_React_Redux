let nextId = 2;

export const addMessage = input => ({
  type: 'ADD_MESSAGE',
  id: nextId++,
  content: input
});

export const delMessage = id => ({
  type: 'DELETE_MESSAGE',
  id
});

// export const showModal = () => ({
//     type: 'SHOW_MODAL',
//     payload: {
//       id: message.id
//     }
//   })
//
// export const hideModal = ()  => ({
//     type: 'HIDE_MODAL',
//     payload: {
//       id: message.id
//     }
//   })
