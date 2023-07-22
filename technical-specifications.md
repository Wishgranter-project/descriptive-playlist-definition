# Descriptive Playlist

Technical Specifications
Version: 6.0.0

Adinan Cenci
Last Updated: July 22, 2023

2019 Adinan Cenci. All Rights Reserved. 

## Overview

Descriptive playlist is a file format to define a music playlist.

This document specifies the file's structure. 

This is the official implementation to the [functional specs](https://github.com/adinan-cenci/descriptive-playlist-definition/blob/master/functional-specifications.md) v1.0.X .

## The file

A descriptive playlist is a [JSON Lines](https://jsonlines.org/) file. The first line contains a header object describing the playlist followed by the playlist item objects. 

### The header object

| Property        | Type                           | Description                                                                                                                                                                                                                    |
| --------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| title           | string                         | The playlist title                                                                                                                                                                                                             |
| description     | string                         | An observation about the playlist contents                                                                                                                                                                                     |
| xxx[\w]{1,100}$ | string \| num \| null \| array | Custom properties, defined by the user or by the software managing the playlist.<br/>It must be prefixed by `xxx`, contain only letters and numbers and be no more than 100 characters long ( not counting the `xxx` prefix ). |

Example:

```javascript
{
    "title": "Favorites", 
    "description": "My favorite musics of all time"
}
```

```javascript
{
    "title": "Favorites", 
    "description": "My favorite musics of all time"
    "xxxAuthor": "Adinan"
}
```

## The playlist item object

An object that describes a specific music or album may contain the following properties:

| Property        | Type                           | description                                                                                                                                                                                                                    |
| ---------------:|:------------------------------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| uuid            | string                         | **Obligatory**. An unique identifier.                                                                                                                                                                                          |
| title           | string                         | The music's title.                                                                                                                                                                                                             |
| artist          | string\|array                  | The performing artist.                                                                                                                                                                                                         |
| featuring       | string\|array                  | A featured artist.                                                                                                                                                                                                             |
| cover           | string                         | The original artist if the music is being performed by someone else.                                                                                                                                                           |
| album           | string                         | The album's title.                                                                                                                                                                                                             |
| soundtrack      | string\|array                  | An intellectual property featuring the music.                                                                                                                                                                                  |
| genre           | string\|array                  | Musical genre(s).                                                                                                                                                                                                              |
| xxx[\w]{1,100}$ | string \| num \| null \| array | Custom properties, defined by the user or by the software managing the playlist.<br/>It must be prefixed by `xxx`, contain only letters and numbers and be no more than 100 characters long ( not counting the `xxx` prefix ). |

**Note**: Title or album ( or both ) must be informed for the item to be considered valid.

See the examples below, all are valid playlist items:

```json
{
    "uuid": "b040ee44-bd7f-4f93-a53c-3944df6f0cc5", 
    "title": "We Are The Champions"
}
```

```json
{
    "uuid": "ea38305c-a8d6-4272-98ee-0c5e2a8aa495",
    "album":"Sonic Firestorm"
}
```

```json
{
    "uuid": "fb3bdfde-4914-450e-ba04-b3f4fbef6dec",
    "artist":"Freedom Call",
    "album": "Eternity"
}
```

```json
{
    "uuid": "3f702cd2-d36f-45ac-8ada-e67bd6468776", 
    "title": "Twilight Of The Thunder God", 
    "artist": "Sabaton", 
    "album": "Carolus Rex", 
    "cover": "Amon Amarth",
    "genre": "Metal"
}
```

```json
{
    "uuid": "4f3a0346-9338-4993-9830-c9620be2d060", 
    "title": "Easy Living", 
    "artist": "Teddy Wilson And His Orchestra", 
    "feat": "Billie Holiday", 
    "soundtrack": "Fallout 3", 
    "genre": ["Jazz", "Blues"]
}
```

An example with custom properties:

```json
{
    "uuid": "18c79907-6fff-4ebf-b451-6882065fbcb4", 
    "title": "Wind Like Stroke", 
    "xxxRating": 10,
    "xxxCanFindAt": "hppts://spoti......"
}
```
