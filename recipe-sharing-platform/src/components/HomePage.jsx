
import react, { useState, useEffect } from 'react';

const Homepage = () => {
    const [Recipe, setRecipe] = useState ([]);


	useEffect(() => {
			fetch('/data.json')
			.then((Response) => Response.json ())
			.then((data) => setRecipe.data (data))
			.catch((error) => console.log('Error loading data:', error));
	}, []);

	return (
		<div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-gray-100">
  <h1 className="text-4xl font-black text-center mb-10 text-gray-800 tracking-tight drop-shadow-md">
    🍽️ Recipe List
  </h1>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {Recipe.map((recipe) => (
      <div 
        key={recipe.id} 
        className="bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
      >
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-48 object-cover"
        />
        <div className="p-5">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{recipe.title}</h2>
          <p className="text-blue-600 font-medium text-sm">{recipe.summary}</p>
        </div>
      </div>
    ))}
  </div>
</div>

	);
};
export default Homepage;
