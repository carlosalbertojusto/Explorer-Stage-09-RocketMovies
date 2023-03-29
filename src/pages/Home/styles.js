import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 11rem 15rem;
  grid-template-areas:
    "header"
    "section"
    "content";
`


export const Content = styled.div`
  padding: 36rem 6.4rem 1rem;
  max-width: 111rem;
  margin: 0 auto;
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  overflow-y: auto;
`
