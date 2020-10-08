# Unit2-React-Project# Project Overview

## Project Links

[Git Hub Repo Link](https://github.com/SeanUnland/Unit2-React-Project)

## Project Description

I will be building a music and audio App that will play my music, using React and import data through a Contenful API that will be implemented in my app. I would like it to display a main page with album artwork and then give you the ability to list albums, songs, and artist information. I would also like to include an audio player that would play music of the artist you clicked on.

## API

https://app.contentful.com/spaces/5swixu5p2lln/content_types

```
Music Info -
{sys: {…}, fields: {…}}
fields:
myBio: "I am a record producer, composer, and recording engineer based in New York City."
__proto__: Object
sys: {space: {…}, id: "1rAqa5CXtxv7wlqe47tvTX", type: "Entry", createdAt: "2020-10-06T13:46:33.604Z", updatedAt: "2020-10-06T13:46:33.604Z", …}
__proto__: Object
Library.js:5 Music Info -
{sys: {…}, fields: {…}}
fields:
artistName: "Analog Robot"
__proto__: Object
sys: {space: {…}, id: "4jA91L6iJB9FvYNQqSJzcu", type: "Entry", createdAt: "2020-10-06T03:07:32.398Z", updatedAt: "2020-10-06T03:07:32.398Z", …}
__proto__: Object
Library.js:5 Music Info -
{sys: {…}, fields: {…}}
fields:
album: "Welcome To The Coffee Shop"
albumArtwork:
fields: {title: "Artwork", file: {…}}
sys: {space: {…}, id: "5EQqlkDgCGXPOLVusfGuay", type: "Asset", createdAt: "2020-10-05T16:44:58.233Z", updatedAt: "2020-10-05T16:44:58.233Z", …}
__proto__: Object
artist: "Analog Robot "
song:
fields: {title: "Black Coffee (feat. Bridjaî Chanî)", description: "Composed and Produced by Analog Robot.↵Vocals and Lyrics by Bridjaî Chanî", file: {…}}
sys: {space: {…}, id: "2HDAL81zVPTYE37uGv0kMX", type: "Asset", createdAt: "2020-10-05T16:43:53.851Z", updatedAt: "2020-10-05T16:43:53.851Z", …}
__proto__: Object
__proto__: Object
sys: {space: {…}, id: "1AoCoR7mbYXbrC8uIorUfz", type: "Entry", createdAt: "2020-10-05T16:45:03.847Z", updatedAt: "2020-10-05T16:45:03.847Z", …}
__proto__: Object
Library.js:5 Music Info -
{sys: {…}, fields: {…}}
fields:
album: "Passing Memories: Single"
albumArtwork:
fields: {title: "Artwork", file: {…}}
sys: {space: {…}, id: "Lzb3zZjK7TZRC1wEyVK2w", type: "Asset", createdAt: "2020-10-05T16:40:29.051Z", updatedAt: "2020-10-05T16:40:29.051Z", …}
__proto__: Object
artist: "Analog Robot"
song:
fields: {title: "Passing Memories", description: "Composed and Produced by Analog Robot", file: {…}}
sys: {space: {…}, id: "1J7VwQ6RLVt2laaVgd6GT4", type: "Asset", createdAt: "2020-10-05T16:34:42.768Z", updatedAt: "2020-10-05T16:34:42.768Z", …}
__proto__: Object
__proto__: Object
sys: {space: {…}, id: "5uqPNGqAZSwhNvQXRBxiv0", type: "Entry", createdAt: "2020-10-05T16:34:50.751Z", updatedAt: "2020-10-05T16:40:34.147Z", …}
__proto__: Object
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
| App          |    H     |       3        |       3        |      3      |
| Header       |    H     |       3        |       2        |      2      |
| Main         |    H     |       3        |       4        |      4      |
| Library      |    H     |       3        |       3        |      3      |
| Song         |    H     |       3        |       2        |      2      |
| Audio Player |    M     |       4        |       4        |      4      |
| Artist       |    H     |       3        |       3        |      3      |

## Additional Libraries

Contentful

SCSS

## Code Snippet

This is the code I used to bring in my API data through Contenful. I used a class component which fetched my API through my client.js component which stored my data for the Contenful API.

```
class App extends React.Component {
  state = {
    music: [],
  };

  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        console.log("Response -", response);
        this.setState({
          music: response.items,
        });
      })
      .catch(console.error);
  }
```
