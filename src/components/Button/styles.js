import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_RED};
    color: ${({ theme }) => theme.COLORS.WHITE};

    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: 0.5rem;
    gap: 0.8rem;
    font-weight: 500;
    height: 4.8rem;
    padding: 1.2rem 3.3rem;

  &:disabled {
    opacity: 0.5;
  }
`