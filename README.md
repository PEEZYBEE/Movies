MOVIES PROJECT
Description
This project displays a collection of popular series with details such as title, description, runtime, and hashtags. It fetches data from a JSON server and dynamically updates the webpage with series information. Users can interact with the series list and view details for each movie, including a "Download" button (placeholder action).

FEATURES

Displays a list of series.

Dynamically updates movie details (image, title, description, runtime, hashtag).

Download button (currently shows an alert for demonstration).

Rotating image slider for featured series.

Responsive and mobile-friendly layout.

TECHNOLOGIES USED:
HTML: For structure and content.

CSS: For styling and animations.

JavaScript: For functionality and dynamic updates.

JSON Server: To serve series data in JSON format.

SETUP AND INSTALLATION
Prerequisites
Make sure you have Node.js installed.

1. Clone the repository
bash
Copy code
git clone https://github.com/PEEZYBEE/movies-project.git
cd movies-project
2. Install dependencies
bash
Copy code
npm install
3. Start the JSON server (for fetching series data)
bash
Copy code
node server.js
The server will run on http://localhost:8080.

4. Open the project in your browser
Simply open the index.html file in your browser to see the Movies Project in action.

PROJECT STRUCTURE
bash
Copy code
/movies-project
│
├── /images         # Folder for movie images and assets
├── /styles         # Folder for CSS files
├── /scripts        # Folder for JavaScript files
│
├── index.html      # Main HTML file
├── server.js       # JSON server setup
└── db.json         # Mock data for series
How It Works
JSON Server: Data for the series is fetched from a local JSON server (db.json).

Dynamic Content: The series list is dynamically created using JavaScript, where each series includes an image, title, and description. Clicking a series updates the movie details.

Image Slider: The featured series are displayed in a rotating image slider.

Download Button: A placeholder download button is provided for each series.

To-do
Implement real download functionality.

Optimize performance and add lazy loading for images.

Improve UI with more interactivity and animations.

License
This project is open-source and available under the MIT License.