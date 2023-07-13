import React, { useContext } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import BooksLoader from '../BooksLoader/BooksLoader'
import { SearchContext } from '../../context/SearchProvider'

const SearchPage = () => {
  const { setSearchBook } = useContext(SearchContext);
  const submitBook = (value) => {
    console.log(`You searched for books about ${value}`)
    setSearchBook(value)
  }
  return (
    <main>
      <SearchBar formSubmit={submitBook}/>
      <BooksLoader />
    </main>
  )
}

export default SearchPage