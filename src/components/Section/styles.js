import styled from "styled-components"

export const Container = styled.section`
  max-width: 111rem;
  margin: 0 16rem auto;
  padding: 5rem;
  display: flex;
  align-items: center;
  grid-area: section;
  gap: 50rem;
  > h1 {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 3.2rem;
    font-weight: 400;
  }
  > a{
    width: 100%;
  }
`
