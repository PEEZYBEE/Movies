document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/series")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(seriesData => {
            const banner = document.getElementById("banner");
            const title = document.getElementById("title");
            const description = document.getElementById("description");
            const runtime = document.getElementById("runtime");
            const hashtag = document.getElementById("hashtag");
            const seriesList = document.getElementById("series");
            const starRatingContainer = document.getElementById("star-rating");

            function updateSeriesDetails(series) {
                banner.src = series.image;
                banner.alt = series.title;
                title.textContent = series.title;
                description.textContent = series.description;
                runtime.textContent = `Runtime: ${series.runtime}`;
                hashtag.textContent = series.hashtag;

                // Display star rating
                displayStars(series.id, series.averageRating || 0);
            }

            if (seriesData.length > 0) {
                updateSeriesDetails(seriesData[0]);
            }

            seriesList.innerHTML = "";
            seriesData.forEach(series => {
                const listItem = document.createElement("li");

                // Create a download button
                const downloadButton = document.createElement("button");
                downloadButton.textContent = "Download";
                downloadButton.addEventListener("click", () => {
                    alert(`Downloading ${series.title}...`);
                    // You can replace this with actual download logic if you have URLs
                });

                // Create a rate button
                const rateButton = document.createElement("button");
                rateButton.textContent = "Rate this Movie";
                rateButton.addEventListener("click", () => {
                    createStarRating(series.id);
                });

                listItem.innerHTML = `
                    <img src="${series.image}" alt="${series.title}" class="series-thumb">
                    <p>${series.title}</p>
                `;

                listItem.appendChild(downloadButton);
                listItem.appendChild(rateButton);

                listItem.addEventListener("click", () => {
                    updateSeriesDetails(series);
                });

                seriesList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});

function displayStars(seriesId, rating) {
    const starRatingContainer = document.getElementById("star-rating");
    starRatingContainer.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement("span");
        star.classList.add("star");
        star.innerHTML = i <= rating ? "★" : "☆";
        starRatingContainer.appendChild(star);
    }
}

function createStarRating(seriesId) {
    const starRatingContainer = document.getElementById("star-rating");
    starRatingContainer.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement("span");
        star.classList.add("star");
        star.innerHTML = "☆";
        star.addEventListener("click", () => {
            updateMovieRating(seriesId, i);
        });
        starRatingContainer.appendChild(star);
    }
}

function updateMovieRating(seriesId, userRating) {
    fetch(`http://localhost:3000/series/${seriesId}`)
        .then(response => response.json())
        .then(series => {
            const newAverageRating = series.averageRating 
                ? ((series.averageRating + userRating) / 2).toFixed(1) 
                : userRating;

            return fetch(`http://localhost:3000/series/${seriesId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ averageRating: newAverageRating })
            });
        })
        .then(() => {
            console.log("Rating updated!");
            displayStars(userRating);
        })
        .catch(error => console.error("Error updating rating:", error));
}
