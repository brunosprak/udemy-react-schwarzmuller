import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(async () => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://react-food-http-ca90a-default-rtdb.firebaseio.com/meals.json'
      );

      if (!response.ok) {
        throw Error('something went wrong.');
      }

      const loadedMeals = [];

      const data = await response.json();

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsError(true);
      setIsLoading(false);
    });
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && !isError && <p>Loading...</p>}
        {isError && <p>Something went wrong...</p>}
        {!isLoading && !isError && <ul>{mealsList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
