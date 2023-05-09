import { Container } from './styles'
import { Tag } from '../Tag'

import Star from '../../assets/stars.svg'
import EmptyStar from '../../assets/emptyStar.svg'

export function Note({ data, ...rest }) {
  
  let starArray = Array.from({ length: 5 }, (_, index) => {
    if (index < data.rating) {
      return <img key={index} src={Star} alt="star-filled" />
    } else {
      return <img key={index} src={EmptyStar} alt="star-empty" />
    }
  })

  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      {starArray}
      <p>{data.description}</p>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  )
}
