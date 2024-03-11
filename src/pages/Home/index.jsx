import { Container, Content, Banner } from "./styles.js";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import banner from "../../assets/banner.svg";

export function Home() {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState("");
  const [beverages, setbeverages] = useState("");
  const [deserts, setDeserts] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?search=${search}`);
      console.log(response.data.map((dish) => dish.category));
      filterDishes(response.data);
    }

    fetchDishes();
  }, [search]);

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?name=${search}`);
      const dishes = response.data;
      filterDishes(dishes);
    }
    fetchDishes();
  }, [search]);

  function handleDetails(id) {
    navigate(`/dish/${id}`);
  }

  function filterDishes(dishes) {
    const meals = dishes.filter((dish) => dish.category === "meal");
    setMeals(meals);
    const beverages = dishes.filter((dish) => dish.category === "beverage");
    setbeverages(beverages);
    const deserts = dishes.filter((dish) => dish.category === "dessert");
    setDeserts(deserts);
  }

  return (
    <Container>
      <Header search={setSearch} />

      <Content>
        <Banner>
          <img src={banner} alt="Imagem de ingredientes" />

          <div className="banner">
            <div className="title">
              <h1>Sabores inigualáveis</h1>
              <span>
                Sinta o cuidado do preparo com ingredientes selecionados
              </span>
            </div>
          </div>
        </Banner>

        <Section title="Refeições">
          <div className="home-items">
            {meals &&
              meals.map((dish) => (
                <Card
                  key={String(dish.id)}
                  data={dish}
                  handleDetails={() => handleDetails(dish.id)}
                />
              ))}
          </div>
        </Section>

        <Section title="Sobremesas">
          <div className="home-items">
            {deserts &&
              deserts.map((dish) => (
                <Card
                  key={String(dish.id)}
                  data={dish}
                  handleDetails={() => handleDetails(dish.id)}
                />
              ))}
          </div>
        </Section>

        <Section title="Bebidas">
          <div className="home-items">
            {beverages &&
              beverages.map((dish) => (
                <Card
                  key={String(dish.id)}
                  data={dish}
                  handleDetails={() => handleDetails(dish.id)}
                />
              ))}
          </div>
        </Section>
      </Content>

      <Footer />
    </Container>
  );
}
