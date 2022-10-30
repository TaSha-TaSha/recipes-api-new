import { useEffect, useState } from 'react';
import drink from './drink.mp4';
import PropComponent from './PropComponent';
import search from './search.png';
import './App.css';

function App() {
  const ID = '2cf2b2f5';
  const KEY ='25d093b4676e178edb10a06469faaa6c';

  const [mySearch, setMySearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('tea');

  useEffect( () => {
    const getResult = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${ID}&app_key=${KEY}`);
      const data = await response.json();
      if (data.count === 0) {
        alert(`Sorry, no recipes found ...`);
        setMySearch('');
      }
      setRecipes(data.hits);
    }
    getResult();
  }, [wordSubmitted]);

  const myRecipeChange = (e) => {
    setMySearch(e.target.value);
  }

  const clickToSubmit = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  return (<div className='mainContainer'>
      <video autoPlay muted loop>
        <source src={drink} type='video/mp4' />
      </video>
      <h1>Let's find a dessert racipe</h1>
      <form onSubmit={clickToSubmit}>
          <input onChange={myRecipeChange} value={mySearch} type='text' placeholder='Search ...' className='search' />
          <button><img src={search} alt='pic'  width='33px' /></button>
      </form>
      <div>
        {recipes.map( (element, index) => (
          <PropComponent key={index} 
          label={element.recipe.label} 
          image={element.recipe.image}
          ingredients={element.recipe.ingredientLines}
          nutrientsCA={element.recipe.totalNutrients.CA.quantity}
          nutrientsFE={element.recipe.totalNutrients.FE.quantity}
          nutrientsCHOCDF={element.recipe.totalNutrients.CHOCDF.quantity}
          nutrientsENERC={element.recipe.totalNutrients.ENERC_KCAL.quantity}
          nutrientsFAT={element.recipe.totalNutrients.FAT.quantity}
          />
        ))} 
      </div>
    </div>);
}

export default App;




