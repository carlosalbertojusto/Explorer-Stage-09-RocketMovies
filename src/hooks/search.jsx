import { createContext, useState } from 'react'
import { api } from '../services/api'
import { useContext } from 'react'
import { useEffect } from 'react'

export const SearchContext = createContext({})

function SearchProvider({ children }) {
  const [data, setData] = useState({})

  const response = api.get(`/notes?title=${search}`)
  setData(response.data)

  return (
    <SearchContext.Provider value={{ data }}>{children}</SearchContext.Provider>
  )
}

export { SearchProvider }
