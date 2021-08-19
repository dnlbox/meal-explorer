import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

    if (response.ok) {
      return response.json();
    }
  };

  useEffect(() => {
    fetchCategories().then((res) => setCategories(res.categories));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {categories.map((category) => (
          <div key={category.idCategory}>
            <img
              src={category.strCategoryThumb}
              className="App-logo"
              alt={category.strCategory}
            />
            <p>{category.strCategory}</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
