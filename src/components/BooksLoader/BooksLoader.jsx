import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../context/SearchProvider'
import { getBooksBySearch } from '../../services/books-services'
import BooksList from '../BooksList/BooksList';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
const BooksLoader = () => {
  const [fetchState, setFetchState] = useState('')
  const {searchBook} = useContext(SearchContext)
  const [books, setBooks] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    if (searchBook === null) {
      return;
    }
    setFetchState('LOADING');
    getBooksBySearch(searchBook)
      .then((data) => {
        setFetchState('SUCCESS');
        setBooks(data);
      })
      .catch((err) => {
        setFetchState('ERROR');
        setError(err);
      });
  }, [searchBook]);

  return (
    <>
      {fetchState === 'LOADING' && (
          <Box sx={{ width: '100%'}}>
            <p>Searching for Books About: {searchBook}</p>
            <LinearProgress />
          </Box>
      )}
      {fetchState === 'SUCCESS' && <BooksList books={books}/>}
      {fetchState === 'ERROR' && (
        <p>{error.message}</p>
      )}
    </>
  )
}

export default BooksLoader