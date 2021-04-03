import React, {useContext} from 'react';
import {BookContext} from './BookContext';

const Nav = () =>  {
  const [books, setbooks] = useContext(BookContext);
  return (
    <div className = "navbar ">
      <h3> Sepid's list of favorite books: </h3>
      <h3> Number of Books: {books.length} </h3>
    </div>
  )
}

export default Nav