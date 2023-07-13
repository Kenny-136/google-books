import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

const Header = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
    <CssBaseline />
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Search a Book!
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            You search a book by using the search input on the top right corner.

          </Typography>
        </Container>
      </Box>
    </main>
  </ThemeProvider>
  )
}

export default Header