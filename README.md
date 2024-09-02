# Barcode Generator

This is a simple Node.js application that generates a barcode from user-provided text using the Express framework and the `bwip-js` package. Users can input a URL or any text, and the application will generate a barcode that can be displayed and downloaded.

## Features

- Accepts user input via a web form.
- Generates a barcode (Code 128 format) from the provided input.
- Displays the generated barcode on a new page.
- Allows users to return to the input form to generate another barcode.

## Technologies Used

- `Node.js`
- `Express.js`
- `EJS` (Embedded JavaScript templates)
- `bwip-js` package for barcode generation
- `body-parser` middleware for handling form submissions

## Installation

1. **Clone the repository:**
   git clone https://github.com/sau-rabh-17/bar-code-generator.git

2. **Navigate to the project directory:**
   cd bar-code-generator
   
3. **Install dependencies:**
   npm install

4. **Start the server:**
   npx nodemon index.js

5. **Access the application:**
   Open your browser and go to `http://localhost:4000`.

## Usage
On the homepage, enter the text you want to generate a barcode for.
Click "Submit".
The generated barcode will be displayed on a new page along with the original input.
You can go back to the homepage to generate another barcode.

## Project Structure

- `app.js`: The main application file that sets up the Express server and handles routes.
- `views/`: Directory containing the EJS templates for rendering HTML pages.
  - `index.ejs`: The main page where users input text or URLs.
  - `generate.ejs`: The page where the generated Bar code is displayed.
- `public/`: Directory containing static files like CSS.
  - `style/`: Contains the CSS files for styling the pages.
    - `style.css`: CSS file for styling the main page where users input text or URLs.
    - `generate.css`: CSS file for styling the page where the generated BAR code is displayed.
- `package.json`: Contains the project dependencies and scripts.

## Dependencies
`express`: Web framework for Node.js.
`body-parser`: Middleware to parse incoming request bodies.
`bwip-js`: Library to generate barcodes.
`ejs`: Embedded JavaScript templating engine.
`nodemon`: A utility that monitors for any changes in your source and automatically restarts the server.
- `node`: JavaScript runtime environment.
