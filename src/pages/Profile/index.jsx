import { Container, Avatar, Form } from "./styles"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft /> Voltar
        </Link>
      </header>
      <Form>
        <Avatar>
          <img
            src="https://github.com/carlosalbertojusto.png"
            alt="Foto do usúario"
          />

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <Input icon={FiUser} placeholder="Carlos Alberto" />
        <Input icon={FiMail} placeholder="carlosalberto@email.com" />
        <Input icon={FiLock} placeholder="Senha atual" />
        <Input icon={FiLock} placeholder="Nova senha" />
        <Button primary title="Salvar" />
      </Form>
    </Container>
  )
}
