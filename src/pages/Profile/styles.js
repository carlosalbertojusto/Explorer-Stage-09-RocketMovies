import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  > header {
    width: 100%;
    height: 14.4rem;
    background-color: rgba(255, 133, 155, 0.05);
    display: flex;
    align-items: center;
    padding: 0 12.4rem;
    a {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.1rem;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    svg {
      font-size: 1.6rem;
      line-height: 2.1rem;
    }
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 3.2rem;

  width: 18.6rem;
  height: 18.6rem;
  > img {
    width: 18.6rem;
    height: 18.6rem;

    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
  }
`

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto 0;
  > div:nth-child(4) {
    margin-top: 2.4rem;
  }

  > div:nth-child(5){
    margin-bottom: 2.4rem;
  }
`
