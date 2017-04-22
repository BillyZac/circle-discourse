# Discourse ✨ Magic ✨

Gets user info from Discourse and does stuff with it.

## Setup
Put the following into a .env at the root of this folder:
DISCOURSE_API_KEY=your-stuff!
DISCOURSE_USER_NAME=your-stuff!
DISCOURSE_BASE_URI=your-stuff!

## Usage
`node rest` runs a web server. Hit `/` to get a list of Discourse users and their groups.

Port 3000 is the default, but if you set PORT in a `.env` the server will use that instead.

# TODO
- Cache: Use an in memory cache, or low DB, or similar. REST calls should hit the cache instead of Discourse directly.
- Make an ETL for this cache. (I wrote one then deleted it. Oops.)
- Make an update script for SalesForce. See `updateSalesForce` for a sketch of the idea. This is meant to be run on a cronjob, or in response to a webhook, or something like that.
