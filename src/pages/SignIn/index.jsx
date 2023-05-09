import { Container, Form, Background, Text, Paragraph } from "./styles"
import { FiMail, FiLock } from "react-icons/fi"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"


import { useAuth } from '../../hooks/auth'
import { useState } from 'react'
import { Link } from "react-router-dom"

export function SignIn() {
  const { signIn } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignIn() {
    signIn({ email, password })
  }
  
  return (
    <Container>
      <Form>
        <Text>
          <h1>RocketMovies</h1>
          <span>Aplicação para acompanhar tudo que assistir.</span>
        </Text>
        <Paragraph>Faça seu Login</Paragraph>
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
        <Button primary title="Entrar" onClick={handleSignIn} />
        <Link to="/signup">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  )
}
