// Initial array of quotes
const quotes = [
    { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
    { text: "Don't let yesterday take up too much of today.", category: "Life" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", category: "Inspiration" }
];

/**
 * Function to show a random quote
 */
function showRandomQuote() {
    // Get a random index from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteDisplay = document.getElementById("quoteDisplay");

    // Clear previous content
    quoteDisplay.innerHTML = "";

    // Create new elements to display the quote
    const quoteText = document.createElement("p");
    quoteText.innerHTML = `<strong>${quotes[randomIndex].text}</strong>`;
    
    const quoteCategory = document.createElement("p");
    quoteCategory.innerHTML = `<em>- ${quotes[randomIndex].category}</em>`;

    // Append new quote to the display area
    quoteDisplay.appendChild(quoteText);
    quoteDisplay.appendChild(quoteCategory);
}

// Event listener for the "Show New Quote" button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);
