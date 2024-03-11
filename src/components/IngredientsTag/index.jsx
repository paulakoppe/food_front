import { Container } from "./styles";
import { Input } from "../../components/Input";

// eslint-disable-next-line react/prop-types
export function IngredientsTag({ title, inputProps, ...rest }) {
  return (
    <Container {...rest}>
      <div>
        <Input
          className="ingredient"
          placeholder="Digite aqui"
          type="text"
          value={title}
          {...inputProps}
        />
      </div>
    </Container>
  );
}
