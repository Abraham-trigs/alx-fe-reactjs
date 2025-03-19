import React, { useEffect, useState } from 'react';  // Import React hooks for state and effects
import data from '../data.json';  // Import JSON data file

const Homepage = () => {
    // State to store recipe data
    const [recipe, setRecipe] = useState([]);

    // useEffect runs once (on component mount) to load data
    useEffect(() => {
        setRecipe(data);
    }, []);

    return (
        <div className="relative max-w-6xl mx-auto p-6 z-10">  
            {/* Page Title */}
            <h1 className="text-4xl font-black text-center mb-10 text-white tracking-tight drop-shadow-md">
                🍽️ Recipe List
            </h1>

            {/* Recipe Grid - Displays 3 columns on medium screens and above */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {recipe.map((item) => (
                    <div 
                        key={item.id}  // Unique key for each recipe
                        className="bg-white shadow-3xl shadow-blue-900/50 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0px_10px_30px_rgba(0,0,0,0.7)]"
                    >
                        {/* Recipe Image */}
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-48 object-cover"
                        />
                        
                        {/* Recipe Text Content */}
                        <div className="p-5">
                            {/* Recipe Title - Styled with border and background color */}
                            <h2 className="border-r-8 p-1.5 bg-blue-600 text-2xl font-bold text-[rgb(243,229,171)]">
                                {item.title}
                            </h2>
                            
                            {/* Recipe Summary - Styled with padding and text color */}
                            <p className="text-blue-600 font-medium bg-grey text-sm p-1.5 ">
                                {item.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Homepage;
