import  React, {useContext} from 'react';
import BookItem from './BookItem';
import {BookContext} from './BookContext';

const BookList = () =>{
  const [books, setBooks] = useContext(BookContext);
  return(
    <div>
      {books.map(book => (
        <BookItem title={book.title} author={book.author} key = {book.id}/>
      ))}
    </div>
  )

}
export default BookList;