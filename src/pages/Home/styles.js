import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 11rem 15rem;
  grid-template-areas:
    'header'
    'section'
    'content';
`

export const Content = styled.div`
  padding: 4rem 6.4rem 1rem;
  max-width: 111rem;

  margin: 0 auto;
  grid-area: content;

  display: grid;
  align-items: center;
  justify-content: center;

  gap: 2.4rem;
  overflow-y: overlay;
  scroll-behavior: smooth;
  
  &::-webkit-scrollbar {
    width: 1rem;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.8rem;
  }
`
