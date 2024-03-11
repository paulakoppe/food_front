import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  display: flex;
  height: 104px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`;

export const Menu = styled.div`
  border: none;
  background: none;

  display: flex;
  align-items: center;
  gap: 5rem;
`;

export const MenuOpen = styled.div`
  border: none;
  background: none;

  display: flex;
  align-items: center;

  justify-content: start;

  padding-top: 56px;
  padding-left: 26px;

  > span {
    padding-left: 18px;
    font-family: 'Roboto';
    font-size: 21px;
    font-weight: 400;
  }
`;

export const MenuItems = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100vw;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  padding: 36px 28px 0;
  margin-top: 225px;
  z-index: 999;
  left: 0;
  
  >span {
    margin-top: 36px;
    font-family: 'Poppins';
    font-size: 24px;
    font-weight: 300;
    border-bottom: 0.3px solid ${({ theme }) => theme.COLORS.GRAY_200};
    margin-bottom: 16px;
  }


  .menuAdmin {
    display: flex;
    flex-direction: column;
    margin-bottom: -85px;

    >span {
    margin-top: 36px;
    font-family: 'Poppins';
    font-size: 24px;
    font-weight: 300;
    border-bottom: 0.3px solid ${({ theme }) => theme.COLORS.GRAY_200};
    margin-bottom: 16px;
  }
  }
  
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  width: 100%;
  height: 10.4rem;

  padding: 0 10rem;
  gap: 2.5rem;

  > img {
    height: 30px;
    width: auto;
  }

  @media (max-width: 764px) {
    padding: 3.5rem 0;
    margin: 0 10px 0 10px > icon {
      width: 24px;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 216px;
  height: 5.6rem;

  border: none;
  border-radius: 0.5rem;

  gap: 1.1rem;

  font-size: 1.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_RED};
  color: ${({ theme }) => theme.COLORS.WHITE};

  padding: 0 3rem;
`;
