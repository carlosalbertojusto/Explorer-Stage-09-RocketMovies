import styled from 'styled-components'

export const Container = styled.div`
  grid-area: header;
  width: 100%;
  height: 11.6rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  gap: 6.4rem;
  padding: 2.4rem 12.3rem;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
  > h1 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.2rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Profile = styled.div`
  display: flex;
  gap: 0.9rem;
  align-items: center;
  width: 20rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 20rem;
    p {
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    button {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      border: none;
      background: transparent;
    }
  }
  img {
    width: 6.4rem;
    height: 6.4rem;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
    border-radius: 50%;

    &:hover {
      cursor: pointer;
    }
  }
`
