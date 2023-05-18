// eslint-disable jsx-props-no-spreading
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { checkPropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import { getBooks, deleteBook } from '../redux/books/booksSlice';

const props = {
  id: 0,
  percent: Math.floor(Math.random() * 100 + 1), // is required
  colorSlice: '#00a1ff',
  colorCircle: '#00a1ff',
  fontColor: '#365b74',
  fontSize: '1.6rem',
  fontWeight: 400,
  size: 100,
  opacity: 10,
  stroke: 10,
  strokeBottom: 5,
  speed: 60,
  cut: 0,
  rotation: -90,
  unit: '%',
  textPosition: '0.35em',
  animationOff: false,
  inverse: false,
  round: false,
  number: false,
  linearGradient: ['#00a1ff', '#00a1ff'],
};

function BookElement() {
  const bookShow = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const clearHandler = (id) => {
    dispatch(deleteBook(id));
  };
  props.checkPropTypes = {
    percent: checkPropTypes.random,
  };
  return (
    <li className="bookList">
      <div className="bookContainer">
        <div>
          {bookShow.map((book) => (
            <div key={book.id} className="card">
              <div>
                <h3 className="category">{book.category}</h3>
                <h1 className="bookTitle">{book.title}</h1>
                <h2 className="bookAuthor">{book.author}</h2>
                <div className="element">
                  <span className="bookElement">Comments</span>
                  <span className="rightBorder" />
                  <span>
                    <button
                      type="button"
                      className="clear"
                      onClick={() => {
                        clearHandler(book.id);
                      }}
                    >
                      Remove
                    </button>
                  </span>
                  <span className="rightBorder" />
                  <span className="bookElement edit">Edit</span>
                </div>
              </div>
              <div>
                <span className="progress">
                  {/* eslint-disable-next-line */}
                  <CircularProgressBar {...props} />
                  <span className="progReport">
                    <p className="propPercent">{`${props.percent}%`}</p>
                    <p className="rate">completed</p>
                  </span>
                </span>
              </div>
              <span className="distribution" />
              <div className="chapter">
                <h2>CURRENT CHAPTER</h2>
                <h3>CHAPTER 17</h3>
                <button type="button" className="progButton">
                  UPDATE PROGRESS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
}

export default BookElement;
