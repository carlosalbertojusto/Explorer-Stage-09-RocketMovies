import { Container, Profile } from "./styles"
import { Input } from "../Input"
export function Header() {
  return (
    <Container >
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título" />

      <Profile to="/profile">
        <div>
          <p>Carlos Alberto</p>
          <button>sair</button>
        </div>
        <img
          src="https://github.com/carlosalbertojusto.png"
          alt="Foto do usuário"
        />
      </Profile>
    </Container>
  )
}
