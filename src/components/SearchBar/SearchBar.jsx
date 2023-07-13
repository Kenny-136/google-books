import React , {useState} from 'react'

const SearchBar = ({formSubmit}) => {
  const [searchInput, setSearchInput] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    formSubmit(searchInput)
    setSearchInput('')
  }
  const onSearchInputChange = (e) => {
    setSearchInput(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      placeholder='Type Book Title'
      value={searchInput}
      onChange={onSearchInputChange} />
      <input type="submit" value="Search" />
    </form>
  )
}

export default SearchBar