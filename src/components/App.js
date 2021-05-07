import React, { useEffect, useState } from 'react';
import styles from './App.css';
import Recipe from './Recipe';

const Ap = () => {
  const APP_ID = '6e0bc073';
  const APP_KEY = 'b9227dd5411a2b229de23edaf420a162';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);


  const getRecipes = async() => {
    const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await res.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className={styles.App}>
      <form className={styles.searchForm} onSubmit={getSearch}>
        <input type="text" className={styles.searchBar} value={search} onChange={updateSearch}/>
        <button className={styles.searchButton}>Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
      ))}
    </div>
  );

};

export default App;
  
