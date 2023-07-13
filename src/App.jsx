import SearchPage from './components/SearchPage/SearchPage'
import SearchProvider from './context/SearchProvider'

function App() {
  return (
    <>
    <SearchProvider>
      <SearchPage />
    </SearchProvider>
    </>
  )
}

export default App
