import { Container, Informations, Wrapper, Section } from "./styles"
import { Link } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"

export function NewMovie() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Link to="/">
          <FiArrowLeft /> Voltar
        </Link>
        <h1>Novo Filme</h1>
        <Informations>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
        </Informations>
        <TextArea placeholder="Observações" />
        <Section>
          <h2>Marcadores</h2>
          <div className="tags">
            <NoteItem value="Ficção Científica" />
            <NoteItem isNew placeholder="Novo marcador" />
          </div>
        </Section>
        <div>
          <Button title="Excluir filme" />
          <Button title="Salvar alterações" primary />
        </div>
      </Wrapper>
    </Container>
  )
}
