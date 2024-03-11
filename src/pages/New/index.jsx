import { useParams } from "react-router-dom";
import { Container, Content, Form, Category, TextArea } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";
import { FiArrowLeft, FiUpload } from "react-icons/fi";
import { Button } from "../../components/Button";
import { IngredientsTag } from "../../components/IngredientsTag";
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function New() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState(null); // Corrected to null

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState({});

  const navigate = useNavigate();
  const params = useParams();
  const dishId = params.id;

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${dishId}`);
        const dish = response.data;

        setName(dish.name);
        setDescription(dish.description);
        setPrice(dish.price);
        setImage(dish.image);
        setIngredients(dish.ingredients);
        setCategory(dish.category);
        console.log(ingredients);
      } catch (error) {
        console.error("Error fetching dish:", error);
      }
    }

    fetchDish();
  }, [dishId]);

  function handleAddIngredient() {
    setIngredients([...ingredients, { name: "" }]);
    setNewIngredient({});
  }

  function updateIngredient(name, index, newIngredient) {
    const updatedIngredients = [...ingredients];
    let toUpdate = { ...updatedIngredients[index], name };
    if (newIngredient) {
      toUpdate = { name, dish_id: dishId };
    }
    updatedIngredients[index] = toUpdate;
    setIngredients(updatedIngredients);
  }



  async function create() {
    try {
      const payload = {
        name,
        description,
        category,
        price,
        ingredients,
      };

      await api.post(`/dishes`, payload);

      if (imageFile) {
        const form = new FormData();
        form.append("file", imageFile);
        await api.patch(`/dishes/${dishId}/image`, form);
      }

      goBack();
    } catch (error) {
      console.error("Error updating dish:", error);
    }
  }

  function handleChangeImage(event) {
    const file = event.target.files[0];

    setImageFile(file);

    const imagePreview = URL.createObjectURL(file);
    setImage(imagePreview);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleAddIngredient();
    }
  }

  function goBack() {
    navigate("/");
  }

  return (
    <Container>
      <Header />

      <Content>
        <ButtonText icon={FiArrowLeft} title="voltar" onClick={goBack} />

        <h2>Editar prato</h2>

        <Form>
          <div className="row">
            <Section>
              <h2>Imagem do prato</h2>
              <img className="imgedit" src={`${api.defaults.baseURL}/files/${image}`} alt="Dish" />
              <Input
                className="image"
                id="image"
                name="image"
                accept="image/*"
                src={image}
                icon={FiUpload}
                type="file"
                onChange={handleChangeImage}
              />
            </Section>
            <Section>
              <h2>Nome</h2>
              <Input
                className="name"
                placeholder="Ex.: Salada Ceasar"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Section>

            <Section>
              <h2>Categoria</h2>
              <Category className="category">
                <label htmlFor="category">
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Selecionar</option>
                    <option value="meal">Refeição</option>
                    <option value="dessert">Sobremesa</option>
                    <option value="beverage">Bebida</option>
                  </select>
                </label>
              </Category>
            </Section>
          </div>

          <div className="row">
            <Section>
              <h2>Ingredientes</h2>

              <div className="ingredients">
                {ingredients.length > 0 ? (
                  ingredients &&
                  ingredients.map((ingredient, index) => (
                    <IngredientsTag
                      key={String(index)}
                      title={ingredient.name}
                      index={String(index)}
                      inputProps={{
                        onChange: (e) =>
                          updateIngredient(
                            e.target.value,
                            String(index),
                            false
                          ),
                        onKeyDown: (e) => handleKeyDown(e),
                      }}
                    />
                  ))
                ) : (
                  <IngredientsTag
                    value={newIngredient}
                    inputProps={{
                      onChange: (e) =>
                        updateIngredient(e.target.value, 0, true),
                      onKeyDown: (e) => handleKeyDown(e),
                    }}
                  />
                )}
              </div>

              <h2>Preço</h2>
              <Input
                className="price"
                placeholder="R$ 00,00"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Section>
          </div>

          <div className="row">
            <Section>
              <h2>Descrição</h2>
              <TextArea
                placeholder="Descreva o item"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Section>
          </div>
        </Form>

        <div className="button-actions">
         
          <Button title={"Salvar alterações"} onClick={create} />
        </div>
      </Content>

      <Footer />
    </Container>
  );
}
