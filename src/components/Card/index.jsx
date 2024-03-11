/* eslint-disable react/prop-types */
import { Container, Details } from "./styles";
import { BiPencil } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Button } from "../Button";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom"; 
import { api } from "../../services/api";



export function Card({ data, ...rest }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const increase = () => {
    setQuantity((count) => count + 1);
  };

  const decrease = () => {
    setQuantity((count) => (count > 1 ? count - 1 : 1));
  };

  const handleEdit = () => {
    navigate(`/edit/${data.id}`);
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Container {...rest}>
      <div className="container">
        {user.is_admin ? (
          isFavorite ? (
            <AiFillHeart onClick={handleFavorite} />
          ) : (
            <AiOutlineHeart onClick={handleFavorite} />
          )
        ) : (
          <BiPencil onClick={handleEdit} size={24} />
        )}

        <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="Imagem do prato" />
        <h3 className="title">{data.name}</h3>
        <p className="description">{data.description}</p>
        <h1 className="price">{data.price}</h1>

        {user.is_admin ? (
          <Details>
            <div className="counter">
              <img src={minus} onClick={decrease} />
              <span className="quantity">
                {quantity.toString().padStart(2, "0")}
              </span>
              <img src={plus} onClick={increase} />
            </div>
            <Button className="incluir" title="incluir" />
          </Details>
        ) : null}
      </div>
    </Container>
  );
}
