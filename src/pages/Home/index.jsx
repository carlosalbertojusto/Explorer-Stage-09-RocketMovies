import { Container, Content } from "./styles"
import { FiPlus } from "react-icons/fi"
import { Header } from "../../components/Header"

import { Section } from "../../components/Section"

import { Note } from "../../components/Note"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"

export function Home() {
  return (
    <Container>
      <Header />
      <Section title="Meus Filmes">
        <Link to="/newmovie">
          <Button primary icon={FiPlus} title="Adicionar Filme" />
        </Link>
      </Section>

      <Content>
        <Note
          data={{
            title: "Interstellar",
            tags: [
              { id: "1", name: "Ficção Científica" },
              { id: "2", name: "Drama" },
              { id: "3", name: "Família" },
            ],
          }}
        />
        <Note
          data={{
            title: "Interstellar",
            tags: [
              { id: "1", name: "Ficção Científica" },
              { id: "2", name: "Drama" },
              { id: "3", name: "Família" },
            ],
          }}
        />
        <Note
          data={{
            title: "Interstellar",
            tags: [
              { id: "1", name: "Ficção Científica" },
              { id: "2", name: "Drama" },
              { id: "3", name: "Família" },
            ],
          }}
        />
      </Content>
    </Container>
  )
}
