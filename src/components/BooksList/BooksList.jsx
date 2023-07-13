import React from 'react'
import BookCard from '../BookCard/BookCard'

const BooksList = ({books}) => {
  return (
    <div>
      {books.items.map((book) => (
        <BookCard key={book.id} book={book}/>
      ))}
    </div>
  )
}

export default BooksList