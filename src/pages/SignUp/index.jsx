import { Container, Form, Background, Text, Paragraph } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"
export function SignUp() {
  return (
    <Container>
      <Form>
        <Text>
          <h1>RocketMovies</h1>
          <span>Aplicação para acompanhar tudo que assistir.</span>
        </Text>
        <Paragraph>Crie sua conta</Paragraph>
        <Input icon={FiUser} placeholder="Nome" type="text" />
        <Input icon={FiMail} placeholder="E-mail" type="text" />
        <Input icon={FiLock} placeholder="Senha" type="password" />
        <Button primary title="Cadastrar" />
        <Link to="/">
          <FiArrowLeft /> Voltar para o login
        </Link>
      </Form>
      <Background />
    </Container>
  )
}
