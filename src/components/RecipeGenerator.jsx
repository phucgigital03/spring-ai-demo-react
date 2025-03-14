import React, { useState } from "react";

function RecipeGenerator() {
  const [ingredients, setIngredients] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [recipe, setRecipe] = useState("");

  const handleCreate = async () => {
    try {
        const response = await fetch(`http://localhost:8080/recipe-creator?ingredients=${ingredients}&cuisine=${cuisine}&dietaryRestriction=${dietaryRestrictions}`)
        const data = await response.text();
        console.log("Recipe data",data)
        setRecipe(data)
    } catch (error) {
        console.log("Error generating recipe", error)
    }
  };

  return (
    <div className="tab-content">
      <h2>Recipe Generator</h2>
      <input
        type="text"
        placeholder="Enter ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter cuisine"
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter dietary restriction"
        value={dietaryRestrictions}
        onChange={(e) => setDietaryRestrictions(e.target.value)}
      />

      <button
        onClick={handleCreate}
      >
        Generate
      </button>

      <div className="output">
        <pre className="recipe-text">{recipe}</pre>
      </div>
    </div>
  );
}

export default RecipeGenerator;
