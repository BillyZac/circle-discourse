# Discourse ✨ Magic ✨

Gets user info from Discourse and does stuff with it.

This my playground for the Discourse API. Like, maybe we want to provide a REST api for user info. Or a job that polls Discourse and notifies another service about changes. Or a webhook listener. That kind of thing.

## Setup
Put the following into a .env at the root of this folder:
DISCOURSE_API_KEY=your-stuff!
DISCOURSE_USER_NAME=your-stuff!
DISCOURSE_BASE_URI=your-stuff!

## Usage
### REST service
```
node rest
```
Runs a web server. Hit `/` to get a list of Discourse users and their groups.

POST requests to `/discourse` log out the headers, which I've been using to inspect Discourse webhook messages. Ideally, we could update the queue based on these webhooks, but Discourse isn't currently notifying on the info we want.

Port 3000 is the default, but if you set PORT in a `.env` the server will use that instead.

### Queue updater job thing
```
node addUserToQueue
```
Queries Discourse, then notifies a (pretend) queue. Right now, the queue is in the REST service (kind of circular, but okay for demo purposes, I think) so make sure you've run `node rest` first.

# TODO
- Cache: Use an in memory cache, or low DB, or similar. REST calls should hit the cache instead of Discourse directly.
- Make an ETL for this cache. (I wrote one then deleted it. Oops.)
- Elaborate on the queue idea. See `addUserToQueue` for an initial sketch. This is meant to be run on a cronjob, or in response to a webhook, or something like that, and to send an "Action" to a service that is responsible to syncing data across the system.
- Make use of Discourse webhooks. Discourse currently only notifies on a few things, like post creation and user creation. I'd like to listen for any update to user, but it's not happening. Anyways, the `/discourse` POST route logs out the headers, which is what Discourse uses to tell you what kind of event it's telling you about.
