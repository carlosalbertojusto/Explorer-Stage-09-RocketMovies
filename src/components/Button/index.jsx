import { Container } from "./styles"

export function Button({ title, loading = false, icon: Icon, primary = false, ...rest }) {
  return (
    <Container primary={primary} type="button" disabled={loading} {...rest}>
      {Icon && <Icon size={16} />}
      {loading ? "Carregando..." : title}
    </Container>
  )
}
