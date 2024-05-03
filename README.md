# Streamer Spotlight Project

This project is a web application designed for tracking and showcasing favorite streamers. You can learn more about streamers, view their data, and interact with other users.

## Overview

This repository contains the source files of the project. Here you will find both the frontend and backend parts of the application.

## Features

- Viewing the main page with a list of streamers.
- Detailed information about each streamer.
- Adding new streamers.
- Ability to vote for streamers.

## Installation

1. Clone the repository to your computer:

```bash
git clone https://github.com/mendiefendie/streamer-spotlight-project.git
```

2.  Navigate to the project folder:

``` cd streamer-spotlight-project```

3.  Install dependencies:

```npm install```

4.  Start the application:

```npm start```

5.  Open your browser and go to http://localhost:3000

## API Endpoints

GET /api/streamers: Retrieves a list of all streamers.
GET /api/streamers/:streamerId: Retrieves details of a specific streamer.
POST /api/streamers: Adds a new streamer.
PATCH /api/streamers/:streamerId/vote: Casts a vote for a streamer.

## Technologies Used

React: for building the user interface.
React Router: for navigation between pages.
Axios: for interacting with the backend through HTTP requests.
Node.js and Express: for creating the server-side of the application.
MongoDB: for storing data about streamers.
and other technologies.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
