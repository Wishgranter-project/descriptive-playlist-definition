# Descriptive Playlist

Technical Specifications
Version 3.0.0

Adinan Cenci
Last Updated: June 11, 2022

2019 Adinan Cenci. All Rights Reserved. 

## Overview

Descriptive playlist is a file format to define a music playlist.

This spec is still not complete.

This document specifies the file's structure. 

This is the official implementation to the functional specs v1.0.X .

## The file

A descriptive playlist is a [JSON Lines](https://jsonlines.org/) file. The first line contains a header object describing the playlist followed by the musics objects. These objects either describe a music or make reference to another object as to avoid describing the same music twice.

### The header object

| Property    | Type   | Description                                |
| ----------- | ------ | ------------------------------------------ |
| title       | string | The playlist title                         |
| description | string | An observation about the playlist contents |

Example:

```javascript
// favorites.dpls
{
    "title": "Favorites", 
    "description": "My favorite musics of all time"
}
```

## The music object

An object that describes a specific music may contain the following properties:

| Property   | Type          | description                                                          |
| ----------:|:-------------:| -------------------------------------------------------------------- |
| uuid       | string        | **Obligatory**. An unique identifier.                                |
| title      | string        | The music's title.                                                   |
| artist     | string\|array | The performing artist.                                               |
| feat       | string\|array | A featured artist.                                                   |
| cover      | string        | The original artist if the music is being performed by someone else. |
| album      | string        |                                                                      |
| soundtrack | string\|array | An intellectual property featuring the music.                        |
| genres     | string\|array | Musical genre(s).                                                    |
| reference  | string        | The uuid of another object.                                          |

See the examples below, all are valid DPLS music objects:

```json
{
    "uuid": "b040ee44-bd7f-4f93-a53c-3944df6f0cc5", 
    "title": "We Are The Champions"
}
```

```json
{
    "uuid": "3f702cd2-d36f-45ac-8ada-e67bd6468776", 
    "title": "Twilight Of The Thunder God", 
    "artist": "Sabaton", 
    "album": "Carolus Rex", 
    "cover": "Amon Amarth",
    "genres": "Metal"
}
```

```json
{
    "uuid": "4f3a0346-9338-4993-9830-c9620be2d060", 
    "title": "Easy Living", 
    "artist": "Teddy Wilson And His Orchestra", 
    "feat": "Billie Holiday", 
    "soundtrack": "Fallout 3", 
    "genres": ["Jazz", "Blues"]
}
```

In order to avoid repetition, it is possible to point to an existing object by simple providing the original's uuid. 

```json
{
    "uuid": "55b27284-8c5e-416d-87a6-8a51d25dcf4b",
    "reference": "4f3a0346-9338-4993-9830-c9620be2d060" // Easy Living
}
```
