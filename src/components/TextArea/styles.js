import styled from "styled-components"

export const Container = styled.textarea`
  width: 100%;
  height: 27.5rem;
  padding: 1.9rem 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 1rem;
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  margin-bottom: 0.8rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
