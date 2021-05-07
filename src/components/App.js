import React, { useEffect, useState } from 'react';
import styles from './App.css';

const App = () => {
  const APP_ID = '6e0bc073';
  const APP_KEY = 'b9227dd5411a2b229de23edaf420a162';

  useEffect(() => {
    getRecipes();
  }, []);

 = async() => {
    const res = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className={styles.App}>
      <form className={styles.searchForm}>
        <input type="text" className={styles.searchBar} />
        <button className={styles.searchButton}>Search</button>
      </form>
      <h1>Working</h1>
    </div>
  );

};

export default App;
  
