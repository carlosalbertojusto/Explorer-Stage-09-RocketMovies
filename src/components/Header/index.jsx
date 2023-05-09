import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Container, Profile } from './styles'
import { Input } from '../Input'

import { api } from '../../services/api'

import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

export function Header({ handleSearchMovies }) {
  const { signOut, user } = useAuth()
  const navigation = useNavigate()

  function handleSignOut() {
    navigation('/')
    signOut()
  }
  function handleProfile() {
    navigation('/profile')
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input
        placeholder="Pesquisar pelo título"
        onChange={handleSearchMovies}
      />

      <Profile>
        <div>
          <p>{user.name}</p>
          <button type="button" onClick={handleSignOut}>
            sair
          </button>
        </div>
        <img src={avatarUrl} alt="Foto do usuário" onClick={handleProfile} />
      </Profile>
    </Container>
  )
}
