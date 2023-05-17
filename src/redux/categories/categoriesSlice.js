const CATEGORY_STATUS = 'bookstore/books/CATEGORY_STATUS';

const initialState = [];

export const categoryStatus = () => ({
  type: CATEGORY_STATUS,
});

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};
export default categoriesReducer;
