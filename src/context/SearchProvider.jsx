import { createContext, useState } from "react";

export const SearchContext = createContext(null);

const SearchProvider = ({children}) => {
  const [searchBook, setSearchBook] = useState(null);
  return (
    <SearchContext.Provider value={{searchBook, setSearchBook}}>
      {children}
    </SearchContext.Provider> )
}
export default SearchProvider;