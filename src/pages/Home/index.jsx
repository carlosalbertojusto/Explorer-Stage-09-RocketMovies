import { Container, Content } from './styles'
import { FiPlus } from 'react-icons/fi'

import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Note } from '../../components/Note'

import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

export function Home() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/moviepreview/${id}`)
  }

  function handleNewMovie() {
    navigate('/newmovie')
  }

  function handleSearchMovie(event) {
    const inputValue = event.target.value
    setSearch(inputValue)
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes?title=${search}`)
      setMovies(response.data)
    }
    fetchMovies()
  }, [search])
  return (
    <Container>
      <Header handleSearchMovies={handleSearchMovie} />
      <Section title="Meus Filmes">
        <Button
          primary
          icon={FiPlus}
          title="Adicionar Filme"
          onClick={handleNewMovie}
        />
      </Section>
      <Content>
        {movies.map((movie) => (
          <Note
            key={movie.id}
            data={{
              title: movie.title,
              description: movie.description,
              rating: movie.rating,
              tags: movie.tags,
            }}
            onClick={(e) => handleDetails(movie.id)}
          />
        ))}
      </Content>
    </Container>
  )
}
