export const getBooksBySearch = async (searchString) => {
  if (searchString === '') {
    throw new Error('Cannot Seach for nothing')
  }

  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchString}`)

  if (!response.ok) {
    throw new Error('Failed to Fetch Google Books Data')
  }
  const data = await response.json()
  if(data.totalItems === 0) {
    throw new Error(`No books titled ${searchString} were found Google Database.`)
  }
  return data;
}