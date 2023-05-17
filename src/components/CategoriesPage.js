import React from 'react';
import { useDispatch } from 'react-redux';
import { categoryStatus } from '../redux/categories/categoriesSlice';

// eslint-disable-next-line react/prop-types
function CategoriesPage({ categories }) {
  const dispatch = useDispatch();

  const handleStatus = () => {
    dispatch(categoryStatus());
  };
  return (
    <div className="checkstatus">
      <button type="button" onClick={() => handleStatus()}>Check status</button>
      <br />
      { categories }
    </div>
  );
}
CategoriesPage.defaultProps = {
  categories: [],
};
export default CategoriesPage;
