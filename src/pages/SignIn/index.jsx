import { Container, Form } from "./styles";
import logosign from "../../assets/logosign.svg";

import { useMediaQuery } from "react-responsive";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";

import { useState } from "react";

import { useAuth } from "../../hooks/auth";

import { useNavigate } from "react-router-dom";

export function SignIn() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  const navigate = useNavigate();

  function handleSignIn() {
    signIn({ email, password });
  }

  function handleCreate() {
    navigate("/register");
  }

  return (
    <Container>
      <img src={logosign} alt="" />

      <Form>
        {isDesktop ? <h2>Faça login</h2> : null}

        <Section>
          <h2>Email</h2>
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Section>

        <Section>
          <h2>Senha</h2>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="No mínimo 6 caracteres"
            type="password"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSignIn();
              }
            }}
          />
        </Section>

        <Button className="entrar" title="Entrar" onClick={handleSignIn} />

        <h3 onClick={handleCreate}>Criar uma conta</h3>
      </Form>
    </Container>
  );
}
