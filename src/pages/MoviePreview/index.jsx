import { FiArrowLeft, FiClock } from 'react-icons/fi'
import { Container, Informations } from './styles'
import EmptyStar from '../../assets/emptyStar.svg'
import Star from '../../assets/stars.svg'

import { useParams, useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'

import { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

export function MoviePreview() {
  const { user } = useAuth()

  const [data, setData] = useState(null)
  const [star, setStar] = useState([])

  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    async function fetchDateDatabase() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)

      const { created_at } = response.data

      const dateDatabase = new Date(created_at)
      const dateFormated = dateDatabase.toLocaleDateString()
      setDate(dateFormated)

      const timeFormated = dateDatabase.toLocaleTimeString()
      setTime(timeFormated)
    }

    async function fetchRating() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)

      const { rating } = response.data

      let starArray = Array.from({ length: 5 }, (_, index) => {
        if (index < rating) {
          return <img key={index} src={Star} alt="star-filled" />
        } else {
          return <img key={index} src={EmptyStar} alt="star-empty" />
        }
      })
      setStar(starArray)
    }
    fetchNote()
    fetchDateDatabase()
    fetchRating()
  }, [])

  const avatarFile = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <Container>
      <Header />
      {data && (
        <Informations>
          <header>
            <button type="button" onClick={handleBack}>
              <FiArrowLeft /> Voltar
            </button>
          </header>
          <div className="infoAndRating">
            <h1>{data.title}</h1>
            {star}
          </div>

          <div className="infoAuthor">
            <img src={avatarFile} alt="foto do usúario" />
            <span>Por {user.name}</span>

            <FiClock />
            <span>
              {date} às {time}
            </span>
          </div>

          {data.tags && (
            <div className="tags">
              {data.tags.map((tag) => (
                <Tag key={tag.id} title={tag.name} />
              ))}
            </div>
          )}

          <section>
            <p>{data.description}</p>
          </section>
        </Informations>
      )}
    </Container>
  )
}
