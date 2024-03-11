import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export function ButtonText({ icon: Icon, title, ...rest }) {
    return (
        <Container
        type="button"
        {...rest}
        >
            {Icon && <Icon size={34} />}
            {title}
        </Container>
    );
}