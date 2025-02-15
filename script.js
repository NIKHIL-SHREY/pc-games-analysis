document.addEventListener("DOMContentLoaded", function () {
    // Price vs Rating Chart
    new Chart(document.getElementById("priceVsRatingChart"), {
        type: "scatter",
        data: {
            datasets: [{
                label: "Price vs Rating",
                data: [{ x: 10, y: 85 }, { x: 20, y: 78 }, { x: 5, y: 90 }, { x: 50, y: 60 }],
                backgroundColor: "#ffcc00"
            }]
        },
        options: {
            scales: {
                x: { title: { display: true, text: "Price ($)" } },
                y: { title: { display: true, text: "Metacritic Rating" } }
            }
        }
    });

    // Top 10 Genres Chart
    new Chart(document.getElementById("genreChart"), {
        type: "bar",
        data: {
            labels: ["Action", "RPG", "Shooter", "Adventure"],
            datasets: [{
                label: "Popularity",
                data: [200, 180, 160, 140],
                backgroundColor: ["#ff6600", "#ff3300", "#ff0000", "#9900ff"]
            }]
        },
        options: {
            indexAxis: "y",
            scales: {
                x: { title: { display: true, text: "Number of Games" } }
            }
        }
    });

    // Rating Over Time Chart
    new Chart(document.getElementById("ratingOverTimeChart"), {
        type: "line",
        data: {
            labels: ["2000", "2005", "2010", "2015", "2020"],
            datasets: [{
                label: "Average Rating",
                data: [75, 78, 80, 85, 88],
                borderColor: "#00ffcc",
                borderWidth: 2
            }]
        }
    });

    // Prediction Chart
    new Chart(document.getElementById("predictionChart"), {
        type: "line",
        data: {
            labels: ["Game A", "Game B", "Game C"],
            datasets: [{
                label: "Predicted Rating",
                data: [85, 78, 90],
                borderColor: "#00ccff",
                borderWidth: 2
            }]
        }
    });
});
