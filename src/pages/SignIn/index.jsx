import { Container, Form, Background, Text, Paragraph } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom"
export function SignIn() {
  return (
    <Container>
      <Form>
        <Text>
          <h1>RocketMovies</h1>
          <span>Aplicação para acompanhar tudo que assistir.</span>
        </Text>
        <Paragraph>Faça seu Login</Paragraph>
        <Input icon={FiMail} placeholder="E-mail" type="text" />
        <Input icon={FiLock} placeholder="Senha" type="password" />
        <Button primary title="Entrar" />
        <Link to="/signup">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  )
}
