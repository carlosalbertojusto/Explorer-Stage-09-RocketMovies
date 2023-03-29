import styled from "styled-components"
import { Link } from "react-router-dom"
export const Container = styled(Link)`
  width: 100%;
  height: 22rem;
  background-color: rgba(255, 133, 155, 0.05);
  border: none;
  border-radius: 1.6rem;
  padding: 3.2rem;
  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > img {
    margin-top: 0.8rem;
  }

  > p {
    margin-top: 1.5rem;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
    text-align: justify;
    
    width: 100%;
    height: 5.2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    overflow: hidden;
  }
  > footer {
    width: 100%;
    display: flex;
    margin-top: 1.5rem;
  }
`
