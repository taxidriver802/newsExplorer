# News Explorer

News Explorer is a web application that allows users to search for news articles, register/login, and save their favorite articles for easy access later.

# Features

1. User registration and login

2. Search for news articles by keyword

3. Save favorite articles to your profile

4. View and manage saved articles

### Responsive design for desktop and mobile

# Screenshots

<table> <tr> <td><img src="assets/images/IMG_0503.PNG" width="300" /></td> <td><img src="assets/images/IMG_0504.PNG" width="300" /></td> </tr> </table>

# Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/news-explorer.git
```

Navigate to the project directory:

```bash
cd news-explorer
```

Install dependencies:

```bash
npm install
```

Create a .env file in the root directory with the required environment variables (example below):

```bash
PORT=3000
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
NEWS_API_KEY=your_news_api_key
```

Start the development server:

```bash
npm start
```

Open your browser and go to http://localhost:3000

## Usage

Register a new account or log in

Search for news articles using the search bar

Click the “Save” button to add articles to your favorites

View your saved articles in your profile

## Technologies Used

```bash
Frontend: React, JavaScript, HTML, CSS

Backend: Node.js, Express

Database: MongoDB

Authentication: JWT

API: News API

Folder Structure
news-explorer/
│
├── client/ # React frontend
├── server/ # Node.js backend
├── assets/ # Images and other static assets
├── .env # Environment variables
├── package.json
└── README.md
```

### Contributing

Contributions are welcome! Please open an issue or submit a pull request.

### License

This project is licensed under the MIT License.
