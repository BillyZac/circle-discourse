# Discourse ✨ Magic ✨

Gets user info from Discourse and does stuff with it.

## Setup
Put the following into a .env at the root of this folder:
DISCOURSE_API_KEY=your-stuff!
DISCOURSE_USER_NAME=your-stuff!
DISCOURSE_BASE_URI=your-stuff!

## Usage
`node rest` runs a web server on port 3000. Hit `/` to get a list of Discourse users and their groups.

## query.js
Demonstrates a basic query of the LowDB database.

# TODO
- Cache: Use an in memory cache, or low DB, or similar. REST calls should hit the cache instead of Discourse directly.
- Make an ETL for this cache. (I wrote one then deleted it. Oops.)
