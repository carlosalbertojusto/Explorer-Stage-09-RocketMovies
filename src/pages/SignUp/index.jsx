import { Container, Form, Background, Text, Paragraph } from './styles'
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { useState } from 'react'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos!')
    }
    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com successo!')
        navigate('/')
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possível cadastrar')
        }
      })
  }
  return (
    <Container>
      <Form>
        <Text>
          <h1>RocketMovies</h1>
          <span>Aplicação para acompanhar tudo que assistir.</span>
        </Text>
        <Paragraph>Crie sua conta</Paragraph>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button primary title="Cadastrar" onClick={handleSignUp} />
        <Link to="/">
          <FiArrowLeft /> Voltar para o login
        </Link>
      </Form>
      <Background />
    </Container>
  )
}
