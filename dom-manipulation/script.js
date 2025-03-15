/**
 * Function to add a new quote to the array and update the list
 */
function addQuote() {
    // Get user input values
    const newQuoteText = document.getElementById("newQuoteText").value;
    const newQuoteCategory = document.getElementById("newQuoteCategory").value;

    // Ensure both fields are filled
    if (newQuoteText && newQuoteCategory) {
        // Add the new quote to the quotes array
        quotes.push({ text: newQuoteText, category: newQuoteCategory });

        // Clear input fields after adding
        document.getElementById("newQuoteText").value = "";
        document.getElementById("newQuoteCategory").value = "";

        // Provide user feedback
        alert("New quote added successfully!");
    } else {
        alert("Please enter both a quote and a category.");
    }
}

// Event listener for the "Add Quote" button
document.getElementById("addQuote").addEventListener("click", addQuote);
