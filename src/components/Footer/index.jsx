import { Container, Content } from "./styles";
import logofooter from "../../assets/logofooter.svg"



export function Footer() {
  return (
    <Container>
      <Content>
      <img src={logofooter} alt="Logo" />
      <p>
      &copy; 2023 - <span>Todos os direitos reservados.</span> 
      </p>
      </Content>
    </Container>
  );
}