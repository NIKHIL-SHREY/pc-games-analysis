document.addEventListener("DOMContentLoaded", function () {
    // Price vs Metacritic Rating Chart
    const ctx1 = document.getElementById("priceVsRatingChart").getContext("2d");
    new Chart(ctx1, {
        type: "scatter",
        data: {
            datasets: [{
                label: "Price vs Rating",
                data: [
                    { x: 10, y: 85 }, { x: 20, y: 78 }, { x: 5, y: 90 },
                    { x: 50, y: 60 }, { x: 15, y: 80 }
                ],
                backgroundColor: "#00ffcc"
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
    const ctx2 = document.getElementById("genreChart").getContext("2d");
    new Chart(ctx2, {
        type: "bar",
        data: {
            labels: ["Action", "RPG", "Shooter", "Adventure", "Strategy"],
            datasets: [{
                label: "Popularity",
                data: [200, 180, 160, 140, 120],
                backgroundColor: ["#ffcc00", "#ff6600", "#ff0000", "#6600ff", "#0099ff"]
            }]
        },
        options: {
            indexAxis: "y",
            scales: {
                x: { title: { display: true, text: "Number of Games" } }
            }
        }
    });
});
