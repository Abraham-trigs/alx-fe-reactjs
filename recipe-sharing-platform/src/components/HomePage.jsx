
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
		<div className="max-w-4xl mx-auto p-4">
			<h1 className="text-2xl font-bold text-center mb-6">Recipe List</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{Recipe.map((Recipe) => (
					<div key={Recipe.id} className="bg-white shadow-md rounded-lg p-4">
						<img src={Recipe.image} alt={Recipe.title} className="w-full h-40 object-cover rounded-md" />
						<h2 className="text-xl font-bold mt-2">{Recipe.title}</h2>
						<p className="text-gray-600">{Recipe.summary}</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default Homepage;
