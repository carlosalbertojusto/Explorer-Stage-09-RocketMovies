import styled from "styled-components"
import backgroundImg from "../../assets/bg-theater.png"
export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: stretch;
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 4.8rem;

  h1 {
    font-size: 4.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
    line-height: 6.3rem;
  }

  span {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`
export const Paragraph = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 3.2rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-bottom: 4.8rem;
`
export const Form = styled.form`
  padding: 0 16.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > a {
    text-align: center;
    margin-top: 4.2rem;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.1rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.5;
`
