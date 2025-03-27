document.addEventListener("DOMContentLoaded", () => {
    fetch("https://movies-site-flax.onrender.com/series") // Fetch series data from the JSON server
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

            // Function to update the movie details
            function updateSeriesDetails(series) {
                banner.src = series.image;
                banner.alt = series.title;
                title.textContent = series.title;
                description.textContent = series.description;
                runtime.textContent = `Runtime: ${series.runtime}`;
                hashtag.textContent = series.hashtag;
            }

            // Show the first series as default
            if (seriesData.length > 0) {
                updateSeriesDetails(seriesData[0]);
            }

            
            seriesList.innerHTML = ""; // Clear existing list
            seriesData.forEach(series => {
                const listItem = document.createElement("li");
                
                // Create the download button
                const downloadButton = document.createElement("button");
                downloadButton.textContent = "Download";
                downloadButton.textContent = "Download";                 
                downloadButton.style.marginTop = "20px";                
                downloadButton.style.marginBottom = "20px";                
                downloadButton.style.padding = "5px";              
                downloadButton.style.backgroundColor = "#D4AF37"; 
                downloadButton.style.width = "10%";
                downloadButton.style.borderRadius = "5px";
                
                
                
                
                
                downloadButton.addEventListener("click", () => {
                    alert(`Downloading ${series.title}...`); // Example action
                });

                listItem.innerHTML = `
                    <img src="${series.image}" alt="${series.title}" class="series-thumb">
                    <p>${series.title}</p>
                `;

                listItem.appendChild(downloadButton); // Append the button

                // When a series is clicked, update the details
                listItem.addEventListener("click", () => {
                    updateSeriesDetails(series);
                });

                seriesList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});
