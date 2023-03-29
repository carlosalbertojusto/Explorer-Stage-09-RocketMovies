import styled from "styled-components"

export const Container = styled.button`
  height: 4.9rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2.8rem;
  gap: 0.8rem;

  background: ${({ theme, primary }) =>
    primary ? theme.COLORS.PINK : theme.COLORS.BLACK};
  border-radius: 0.8rem;

  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.1rem;
  border: none;
  color: ${({ theme,primary }) => primary ? theme.COLORS.BACKGROUND_700 : theme.COLORS.PINK};
  > svg {
    margin-left: 1.6rem;
  }
`
