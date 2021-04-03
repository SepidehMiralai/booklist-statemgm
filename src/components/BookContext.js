import React , {createContext, useState} from 'react';

export const BookContext = createContext();

export const BookProvider = (props) => {
  const [books, setBooks] = useState([
    {
      title: "Missing",
      author: "James Patterson",
      id: "100"
    },
    {
      title: "Mindset",
      author: "Carol S. Dweck",
      id: "101"

    },
    {
      title: "The Rooster Bar",
      author: "John Grisham",
      id: "102"

    }
  ])


  return(
    <BookContext.Provider value = {[books, setBooks]}>
      {props.children}
    </BookContext.Provider>
  )

}