document.addEventListener("DOMContentLoaded", function () {
    // Ratings Over Time Chart
    new Chart(document.getElementById("ratingsChart"), {
        type: "line",
        data: {
            labels: ["2010", "2012", "2014", "2016", "2018", "2020", "2022"],
            datasets: [{
                label: "Average Metacritic Score",
                data: [75, 78, 80, 77, 76, 74, 72],
                borderColor: "cyan",
                fill: false
            }]
        }
    });

    // Price vs. Rating Chart
    new Chart(document.getElementById("priceChart"), {
        type: "scatter",
        data: {
            datasets: [{
                label: "Game Prices vs Ratings",
                data: [
                    { x: 0, y: 85 }, { x: 10, y: 80 }, { x: 20, y: 78 }, { x: 40, y: 70 }
                ],
                backgroundColor: "lime"
            }]
        }
    });

    // Genre Popularity Chart
    new Chart(document.getElementById("genreChart"), {
        type: "bar",
        data: {
            labels: ["Action", "RPG", "Indie", "Strategy", "Sports"],
            datasets: [{
                label: "Number of Games",
                data: [1200, 900, 850, 600, 400],
                backgroundColor: "yellow"
            }]
        }
    });
});

// Game Rating Predictor Function
function predictRating() {
    const price = document.getElementById("gamePrice").value;
    const genre = document.getElementById("gameGenre").value;
    
    let baseRating = 75;
    if (genre === "Action") baseRating += 5;
    if (genre === "Indie") baseRating -= 5;
    if (price > 50) baseRating -= 3;
    if (price < 10) baseRating += 2;

    document.getElementById("predictedRating").innerText = `Predicted Rating: ${baseRating}`;
}
