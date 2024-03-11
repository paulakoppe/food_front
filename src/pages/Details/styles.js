import styled from "styled-components";

export const Container = styled.div`
    
    
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  

`

export const Content = styled.div`

    width: 100%;
    margin: auto;
    padding: 3.5rem 12rem;
    
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    justify-content: center;

 > button {
    font-size: 2.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};

}
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    padding: 3rem;

   .dish {
      width: 300px;
      height: auto;
  }
  .description {
    display: flex;
    flex-direction: column;
    align-items: start;
    color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};  
    
     
    h2 {
        font-weight: bold;
        font-size: 40px;
        font-family: 'Roboto', sans-serif;
        margin-bottom: 3rem;
    }

    p{
        font-weight: lighter;
        font-size: 24px;
        font-family: 'Poppins', sans-serif;
        margin-bottom: 2rem;
    }

    .ingredients {
        display: flex;
        flex-direction: row;
        gap: 1.5rem;
        margin-bottom: 4rem;

    }

    .editar {
      width: 162px;
    }

}
}
@media (max-width: 764px) {

    .container {
    flex-direction: column;

    .dish {
        width: 264px;
        height: auto;
    }
    
    .description {
        text-align: center;
        align-items: center;

        h2 {
            font-size: 24px;
        }
        
        p{
            font-size: 16px;
        }
    }
    
}

}  
`


export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  .counter {
    display: flex;
    justify-self: center;
    align-items: center;
    gap: 1rem;
  }
  
  .quantity {
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 0;
    padding: 0;
    height: 100%;
  }

  .icon {
    color: ${({ theme }) => theme.COLORS.WHITE};
    position: relative;
  }

  .incluir {
    width: 162px;
  }



  @media (max-width: 764px) {
   
     display: flex;
     flex-direction: row;
  
     .incluir {
    width: 162px;
    height: 32px;
    font-size: 14px;
    transition: none;
  }

 
    }
  
`;