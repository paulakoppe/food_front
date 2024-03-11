import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export function Button({ icon: Icon, title, ...rest }) {
    return (
        <Container
        type="button"
        {...rest}
        >
            {Icon && <Icon size={24} />}
            {title}
        </Container>
    );
}