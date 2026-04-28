# Pokemon Team Builder API

## Description
This is a backend API that allows users to create and manage Pokémon teams. Users can register, log in, create teams, and add Pokémon to those teams.

## Tech Stack
- Node.js
- Express
- PostgreSQL
- express-session
- bcrypt

## Setup Instructions

1. Install dependencies:
npm install

2. Set up PostgreSQL database:
Create a database named `pokemon_api`

3. Run server:
node server.js

Server runs on http://localhost:3000

## API Endpoints

### Auth
POST /auth/register
POST /auth/login
POST /auth/logout

### Teams
GET /teams
POST /teams
POST /teams/:teamId/pokemon
DELETE /teams/:id

## Features
- Session-based authentication
- Protected routes
- CRUD operations for teams
- Pokémon team limit of 6

## Screenshots
(Include images in /screenshots folder)
