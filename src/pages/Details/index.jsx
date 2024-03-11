import { Container, Content, Actions } from "./styles";
import { Header } from "../../components/Header";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { FiArrowLeft } from "react-icons/fi";
import { IngredientsTag } from "../../components/IngredientsTag";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Details() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const params = useParams();

  const increase = () => {
    setQuantity((count) => count + 1);
  };

  const decrease = () => {
    setQuantity((count) => count - 1);
  };

  useEffect(() => {
    async function fetchDishDetail() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }

    fetchDishDetail();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <Content>
          <ButtonText
            icon={FiArrowLeft}
            title="voltar"
            onClick={() => navigate("/")}
          />

          <div className="container">
            <img src={`http://localhost:5000/files/${data.image}`} className="dish" alt="" />

            <div className="description">
              <h2>{data.name}</h2>
              <p>{data.description}</p>

              <div className="ingredients">
                {data.ingredients.map((ingredient) => (
                  <IngredientsTag
                    key={String(ingredient.id)}
                    title={ingredient.name}
                  />
                ))}
              </div>
              {user.is_admin ? (
                <Actions>
                  <div className="counter">
                    <img src={minus} className="icon" onClick={decrease} />
                    <span className="quantity">
                      {quantity.toString().padStart(2, "0")}
                    </span>
                    <img src={plus} className="icon" onClick={increase} />
                  </div>
                  <Button className="incluir" title="incluir . {data.price}" />
                </Actions>
              ) : (
                <Button
                  className="editar"
                  title="Editar prato"
                  onClick={`/edit/${data.id}`}
                />
              )}
            </div>
          </div>
        </Content>
      )}
      <Footer />
    </Container>
  );
}
