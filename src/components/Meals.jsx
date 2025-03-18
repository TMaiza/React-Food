import Meal from "./Meal";
import { useEffect, useState } from "react";

export default function Meals({}) {
  const [availableMeals, setAvailableMeals] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");

        if (!response.ok) {
          throw new Error("Error al obtener las meals");
        }

        const data = await response.json();
        setAvailableMeals(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMeals();
  }, []);

  if (loading) return <p>Cargando comidas...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <ul id="meals">
      {availableMeals.map((avMeal) => (
        <Meal key={avMeal.id} {...avMeal} />
      ))}
    </ul>
  );
}
