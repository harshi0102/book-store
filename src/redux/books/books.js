const ADDBOOK = 'bookStore/books/ADDBOOK';
const REMOVEBOOK = 'bookStore/books/REMOVEBOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADDBOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVEBOOK,
  id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDBOOK:
      return [...state, {
        ...action.payload,
      }];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
