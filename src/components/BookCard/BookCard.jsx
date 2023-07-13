import React from 'react'

const BookCard = ({book}) => {

  const title = book.volumeInfo.title
  const authors = book.volumeInfo.authors
  const image = book.volumeInfo.imageLinks.thumbnail
  const description = book.volumeInfo.description

  return (
    <div>
      <img src={image} alt="" />
      <h1>{title}</h1>
      {/* <h2>Authors: {authors.map(author => author)}</h2> */}
      <p>{description}</p>
    </div>
  )
}

export default BookCard