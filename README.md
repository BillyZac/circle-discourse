# Discourse scripts

Gets user info from Discourse and stores it in a simple json file "database".

## Setup
Put the following into a .env at the root of this folder:
DISCOURSE_API_KEY=your-stuff!
DISCOURSE_USER_NAME=your-stuff!
DISCOURSE_BASE_URI=your-stuff!

## etl.js:
Extract, transform, and load. Meant to run just once to initialize the database with users (and, eventually, their groups).

## query.js
Demonstrates a basic query of the database
