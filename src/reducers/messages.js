const initialState = [
  {id: 0, content: 'hi'},
  {id: 1, content: 'bye'}
];


const messages = (state = initialState, action) => {
  // console.log(state);
  // console.log(action);

  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        {id: action.id,
        content: action.content}
      ];

    case 'DELETE_MESSAGE':
      return(
        state.filter(message =>
        message.id !== action.id
      ));

    default:
      return state;
    };
};

export default messages;
