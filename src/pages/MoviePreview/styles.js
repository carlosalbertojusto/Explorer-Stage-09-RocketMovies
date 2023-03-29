import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
`

export const Informations = styled.div`
  max-width: 111rem;
  height: 58rem;
  display: flex;
  flex-direction: column;
  margin: 4rem auto;
  padding: 0 2.4rem 0 0;
  gap: 4rem;
  > header {
    display: flex;
    align-items: center;
    a {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.1rem;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
    svg {
      font-size: 1.6rem;
      line-height: 2.1rem;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  > .infoAndRating {
    width: 100%;
    display: flex;
    align-items: center;

    h1 {
      font-weight: 500;
      font-size: 3.6rem;
      line-height: 4.7rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      margin-right: 1.9rem;
    }

    svg {
      fill: ${({ theme }) => theme.COLORS.PINK};
      font-size: 2rem;
      stroke: none;
      margin-right: 0.9rem;
      &:last-child {
        stroke: ${({ theme }) => theme.COLORS.PINK};
        fill: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      }
    }
  }

  > .infoAuthor {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    img {
      width: 1.6rem;
      height: 1.6rem;

      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
      border-radius: 50%;
    }

    svg {
      width: 1.6rem;
      height: 1.6rem;
      stroke: ${({ theme }) => theme.COLORS.PINK};
    }

    span {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      text-align: justify;
    }
  }

  > .tags {
    display: flex;
  }

  > section {
    p {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.1rem;
      text-align: center;
      text-align: justify;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`
