
import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import BookCard from '../BookCard/BookCard'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

const BookList = ({books}) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {books.items.map((book) => (
              <Grid item key={book.id} xs={12} sm={6} md={4}>
                <BookCard book={book}/>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

// Before MaterialUI
// import React from 'react'
// import { Grid } from '@mui/material'

// const BooksList = ({books}) => {
  //   return (
    //     <Grid container spacing={2}>
    //       {books.items.map((book) => (
      //         <Grid item key={book.id} xs={12} sm={6} md={4}><BookCard book={book}/></Grid>
      //       ))}
      //     </Grid>
      //   )
      // }
      
      // export default BooksList
export default BookList