# Unit2-React-Project# Project Overview

## Project Links



## Project Description

I will be building an audio App that allows you to search and play music, using React and import data through a SoundCloud API that will be implemented in my app.

## API

https://developers.soundcloud.com/docs/api/guide#playing

```
<script src="https://connect.soundcloud.com/sdk/sdk-3.3.2.js"></script>
<script>
SC.initialize({
  client_id: 'YOUR_CLIENT_ID'
});

// stream track id 293
SC.stream('/tracks/293').then(function(player){
  player.play().then(function(){
    console.log('Playback started!');
  }).catch(function(e){
    console.error('Playback rejected. Try calling play() from a user interaction.', e);
  });
});
</script>
```


## Wireframes




### MVP/PostMVP



#### MVP EXAMPLE


#### PostMVP EXAMPLE



## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.



| Component | Description | 
| --- | :---: |  
|  |  | 
|  | | 
|  |  |
| | |
|  |  |
|  | |
| | |
|  | |
|  | |
| | |
|  | |
|  |  |



Unless otherwise noted, time is listed in hours:

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
|  |  | | | |
|  |  | |  |  |
| |  | | | |
|  | |  |  |  |
| |  |  |  |  |
|  |  |  |  |  |
| |  | |  |  |
| | |  |  |  |
| | |  |  |  |
| | |  |  |  |


## Additional Libraries


## Code Snippet

