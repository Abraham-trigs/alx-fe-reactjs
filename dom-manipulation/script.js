// Check if there are stored quotes in localStorage, otherwise use default quotes
const quotes = JSON.parse(localStorage.getItem("quotes")) || [
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", category: "Perseverance" },
    { text: "Happiness depends upon ourselves.", category: "Happiness" },
    { text: "Do what you can, with what you have, where you are.", category: "Motivation" }
];

/**
 * Function to save quotes to localStorage
 */
function saveQuotes() {
    localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Variable to track the last shown quote index
let lastQuoteIndex = -1;

/**
 * Function to show a random quote, ensuring it's different from the last one
 */
function showRandomQuote() {
    if (quotes.length === 0) {
        document.getElementById("quoteDisplay").innerHTML = "<p>No quotes available. Please add one.</p>";
        return;
    }

    let randomIndex;
    
    // Ensure the new quote index is different from the last one
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex);

    lastQuoteIndex = randomIndex; // Update last shown index

    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML = ""; // Clear previous content

    // Create new elements to display the quote
    const quoteText = document.createElement("p");
    quoteText.innerHTML = `<strong>${quotes[randomIndex].text}</strong>`;
    
    const quoteCategory = document.createElement("p");
    quoteCategory.innerHTML = `<em>- ${quotes[randomIndex].category}</em>`;

    // Append new quote to the display area
    quoteDisplay.appendChild(quoteText);
    quoteDisplay.appendChild(quoteCategory);
}

/**
 * Function to add a new quote to the array and update the list
 */
function addQuote() {
    // Get user input values
    const newQuoteText = document.getElementById("newQuoteText").value.trim();
    const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();

    // Ensure both fields are filled
    if (newQuoteText && newQuoteCategory) {
        // Add the new quote to the quotes array
        quotes.push({ text: newQuoteText, category: newQuoteCategory });

        // Save updated quotes to localStorage
        saveQuotes();

        // Clear input fields after adding
        document.getElementById("newQuoteText").value = "";
        document.getElementById("newQuoteCategory").value = "";

        // Provide user feedback
        alert("New quote added successfully!");
    } else {
        alert("Please enter both a quote and a category.");
    }
}

// Load a random quote on page load
window.onload = showRandomQuote;

// Event listeners
document.getElementById("newQuote").addEventListener("click", showRandomQuote);
document.getElementById("addQuote").addEventListener("click", addQuote);
