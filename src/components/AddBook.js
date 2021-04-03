import React, {useState, useContext} from 'react';
import {BookContext} from './BookContext';

const AddBook = () => {
  const [title, setTitle]= useState('');
  const [author, setAuthor] = useState('');
  const [boos, setBooks] = useContext(BookContext);

  const updateTitle = e => {
    setTitle(e.target.value);
  }
  const updateAuthor = e => {
    setAuthor(e.target.value);
  }
  const addBook = e => {
    e.preventDefault(e);
    setBooks(prevBooks => [...prevBooks, {title, author}]);
  }
  return (
    <div className="container">
      <form onSubmit={addBook}>
        <input type="text" name="title" value={title} onChange={updateTitle}/>
        <input type="text" name="author" value={author} onChange={updateAuthor}/>
        <button className="btn-light"> Submit </button>
      </form>
    </div>
  )
}

export default AddBook;
