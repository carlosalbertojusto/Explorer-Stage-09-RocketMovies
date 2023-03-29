import styled from "styled-components"

export const Container = styled.div`
  padding: 0.5rem 1.6rem;
  margin-right: 0.8rem;
  border-radius: 0.8rem;

  font-size: 1.2rem;
  line-height: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`
