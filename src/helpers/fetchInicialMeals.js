const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const fetchInitialMeals = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchInitialMeals;
