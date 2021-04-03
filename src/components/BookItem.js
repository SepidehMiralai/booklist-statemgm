import React from 'react'

const BookItem = ({title, author})=> {
  return (
    <div className="text-center">
      <h3> {title} </h3>
      <p> {author} </p>
    </div>
  )
}

export default BookItem;