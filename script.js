document.addEventListener("DOMContentLoaded", function () {
    smoothScrolling();
    imageHoverEffects();
});

// Smooth scrolling for better navigation
function smoothScrolling() {
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
}

// Hover effect for images
function imageHoverEffects() {
    const images = document.querySelectorAll(".analysis-box img");
    images.forEach(img => {
        img.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "0.3s ease-in-out";
        });
        img.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
}

// Game Metacritic Score Prediction
function predictScore() {
    let price = parseFloat(document.getElementById("price").value);
    let memory = parseFloat(document.getElementById("memory").value);
    let storage = parseFloat(document.getElementById("storage").value);

    if (isNaN(price) || isNaN(memory) || isNaN(storage)) {
        document.getElementById("predictionResult").innerText = "Please enter valid numbers.";
        return;
    }

    // Simple prediction formula based on dataset trends (adjusted for better accuracy)
    let predictedScore = 88 - (price * 0.7) - (memory * 0.4) - (storage * 0.3);
    predictedScore = Math.max(0, Math.min(100, predictedScore)); // Ensure score is within 0-100 range

    document.getElementById("predictionResult").innerText = `Estimated Metacritic Score: ${predictedScore.toFixed(1)}`;
}
