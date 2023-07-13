import React from 'react'
import defaultCover from '../../assets/defaultCover.png'
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material'
import CardActions from '@mui/material/CardActions';
const BookCard = ({book}) => {

  const title = book.volumeInfo.title
  const authors = book.volumeInfo.authors ?? ['Author not known']
  const image = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : defaultCover
  const description = book.volumeInfo.description


  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
      component="div"
      sx={{
        pt: '100%'
      }}
      image={image}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h4" component="h2">
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="h3">
          {authors}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More Details</Button>
      </CardActions>
    </Card>
  )
}
// Before MaterialUI
    // <Card sx={{ maxWidth: 300, height: '100%', maxheight: 800 }}> 
    //   <CardMedia
    //   sx={{
    //     height: 400
    //   }}
    //   image={image}
    //   />
    //   <CardContent>
    //     <h1>{title}</h1>
    //     <h2>Authors: {authors.length > 1 ? authors.map(author => author) : authors}</h2>
    //     <p>{description}</p>
    //   </CardContent>
    // </Card>
export default BookCard