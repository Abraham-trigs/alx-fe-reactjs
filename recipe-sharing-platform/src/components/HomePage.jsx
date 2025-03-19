import React, { useEffect, useState } from 'react';
import data from '../data.json'; 

const Homepage = () => {
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        setRecipe(data);
    }, []);

    return (
        <div className="relative max-w-6xl mx-auto p-6 z-10">  
            <h1 className="text-4xl font-black text-center mb-10 text-white tracking-tight drop-shadow-md">
                🍽️ Recipe List
            </h1>

            {/* ✅ Change grid-cols-2 to grid-cols-3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {recipe.map((item) => (
                    <div 
                        key={item.id} 
                        className="bg-white shadow-3xl shadow-blue-900/50 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0px_10px_30px_rgba(0,0,0,0.7)]"
                    >
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-48 object-cover"
                        />
                        
                        <div className="p-5">
                            <h2 className=" border-r-8 p-1.5 bg-blue-600 text-2xl font-bold text-[rgb(243,229,171)]">{item.title}</h2>
                            <p className="text-blue-600 font-medium bg-grey text-sm p-1.5 ">{item.summary}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Homepage;
