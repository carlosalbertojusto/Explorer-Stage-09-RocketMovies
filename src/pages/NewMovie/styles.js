import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
`
export const Wrapper = styled.div`
  width: 111rem;
  margin: 4rem auto;
  padding: 0px 2.4rem 1.6rem 0px;
  > a {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    line-height: 2.1rem;
  }

  > svg {
    font-size: 1.6rem;
  }

  > h1 {
    font-size: 3.6rem;
    font-weight: 400;
    line-height: 4.7rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-top: 2.4rem;
    margin-bottom: 4rem;
  }

  > div {
    display: flex;
    margin-top: 4rem;
    gap: 2.4rem;
  }
`

export const Informations = styled.div`
  width: 100%;
  display: flex;
  gap: 4rem;
  margin-bottom: 4rem;
`

export const Section = styled.section`
  width: 100%;
  margin-top: 4rem;
  > h2 {
    margin-bottom: 2.4rem;

    font-weight: 400;
    font-size: 2rem;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  .tags {
    display: flex;
    gap: 2.4rem;
    padding: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    border-radius: 0.8rem;
  }
`
