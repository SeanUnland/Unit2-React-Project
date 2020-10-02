# Unit2-React-Project# Project Overview

## Project Links

[Git Hub Repo Link](https://github.com/SeanUnland/Unit2-React-Project)

## Project Description

I will be building a music and audio App that allows you to search vinyl records and play music, using React and import data through a Discogs API that will be implemented in my app. I would like it to display a main page with random artists and then give you the ability to search, and add an artist or album to your library. I would also like to include an audio player that would play music of the artist you clicked on.

## API

https://api.discogs.com/artists/1/releases?page=1&per_page=75

```
{
"pagination": {
"page": 1,
"pages": 2,
"per_page": 75,
"items": 114,
"urls": {
"last": "https://api.discogs.com/artists/1/releases?page=2&per_page=75",
"next": "https://api.discogs.com/artists/1/releases?page=2&per_page=75"
}
},
"releases": [
{
"id": 20209,
"status": "Accepted",
"type": "release",
"format": "10\"",
"label": "Svek",
"title": "Kaos",
"resource_url": "https://api.discogs.com/releases/20209",
"role": "Main",
"artist": "Stephan-G* & The Persuader",
"year": 1997,
"thumb": "",
"stats": {
"community": {
"in_wantlist": 1271,
"in_collection": 330
}
}
},
{
"id": 62584,
"status": "Accepted",
"type": "release",
"format": "12\"",
"label": "Svek",
"title": "Snorkelmannen Ø Hans Vänner",
"resource_url": "https://api.discogs.com/releases/62584",
"role": "Main",
"artist": "Mr. Barth* & The Persuader",
"year": 1997,
"thumb": "",
"stats": {
"community": {
"in_wantlist": 683,
"in_collection": 556
}
}
},
```

## Wireframes

[React Architecture](https://docs.google.com/drawings/d/1EWfBiE0ji3c6ADyGAfprCdVKIsoUHxJoCYV4q74ReJs/edit?usp=sharing)

[Wireframe Page 1](https://i.imgur.com/JnuVr21.jpg)

[Wireframe Page 2](https://i.imgur.com/hzAvlXW.jpg)

[Wireframe Page 3](https://i.imgur.com/srTXEsJ.jpg)

### MVP/PostMVP

#### MVP

A functional and interactive music and audio app.

- Can search for vinyl records usnig the API call.
- Can display artist, album, and information from the API call.
- Can add the record to your own library.
  A navbar to navigate to the different pages.
  A header
  A main page.
  A footer
  Library page.
  Artist information page.
  Styling

#### PostMVP

- An audio player that will play teasers of the record.
- Style using SCSS.

## Components

| Component    |                      Description                      |
| ------------ | :---------------------------------------------------: |
| App          | Will make the initial data pull, include React Router |
| Header       |            Will be used to render the nav             |
| Main         |      Will have State and use Route, Switch, Link      |
| Library      | Will render the data you chose into your own library  |
| Information  |     Will render the artist and album information      |
| Footer       |                Will render the footer                 |
| Audio Player |              Will render an audio player              |

Unless otherwise noted, time is listed in hours:

| Component    | Priority | Estimated Time | Time Invetsted | Actual Time |
| ------------ | :------: | :------------: | :------------: | :---------: |
| App          |    H     |       3        |                |             |
| Header       |    H     |       3        |                |             |
| Main         |    H     |       3        |                |             |
| Library      |    H     |       3        |                |             |
| Information  |    H     |       3        |                |             |
| Audio Player |    M     |       4        |                |             |
| Footer       |    H     |       3        |                |             |

## Additional Libraries

## Code Snippet
