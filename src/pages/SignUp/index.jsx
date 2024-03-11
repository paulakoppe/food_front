import { Container, Form } from "./styles";
import logosign from "../../assets/logosign.svg";
import { useMediaQuery } from "react-responsive";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {api} from "../../services/api";

export function SignUp() {
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

 
        
    const navigate = useNavigate();
   
    function handleSignUp() {
       if(!name || !email || !password ) {
        return alert ("Preencha todos os campos");
       }

       api.post("/users", { name, email, password })
       .then (() => {
        alert("Usuário cadastrado com sucesso");
        navigate("/")
       })
       .catch(error => {
        if(error.response){
            alert(error.response.data.message)
        } else {
            alert("Não foi possível cadastrar o usuário")
        }
       }) 
   
   
    }

    function handleBack() {
        navigate("/")
    }

    return(
        <Container>
            
          <img src={logosign} alt="" />
          

            <Form>
                {isDesktop ? <h2>Crie sua conta</h2> : null}
             
                <Section>
                <h2>Seu nome</h2>
                <Input
                 placeholder="Exemplo: Maria da Silva" 
                 type="text"
                 onChange={e => setName(e.target.value)}
                 />
            </Section>   

             <Section>
                <h2>Email</h2>
                <Input 
                placeholder="Exemplo: exemplo@exemplo.com.br" 
                type="email"
                onChange={e => setEmail(e.target.value)}
                />
            </Section>   

                <Section>
                    <h2>Senha</h2>
                    <Input 
                    placeholder="No mínimo 6 caracteres" 
                    type="password" 
                    onChange={e => setPassword(e.target.value)}
                    />
                </Section>

                <Button
                 className="entrar" 
                 title="Criar uma conta" 
                 onClick={handleSignUp}
                 />

                <h3
                onClick={handleBack}>
                Já tenho uma conta
                </h3>

            </Form>
        </Container>
    )

}