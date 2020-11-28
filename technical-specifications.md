# Descriptive Play-List

Technical Specifications
Version 2.0.0

Adinan Cenci
Last Updated: November 28, 2020

2019 Adinan Cenci. All Rights Reserved. 

## Overview

Descriptive play-list is a file format to define a music play-list.

This spec is still not complete.

This document specifies the file's structure. 

This is the official implementation to the functional specs v1.0.X .

## The file

A descriptive play-list is a [JSON Lines](https://jsonlines.org/) file. The first line contains a header object describing the play-list followed by the musics objects. These objects either describe a music or make reference to another object as to avoid describing the same music twice.

### The header object

| Property    | Type   | Description                                                  |
| ----------- | ------ | ------------------------------------------------------------ |
| title       | string | The play-list title                                          |
| description | string | An observation about the play-list contents                  |
| parent      | string | **Optional**. Path to another play-list file that contains the definition for the musics in this one. The objective of having musics defined in another file is to avoid repetition. |


Example:

```javascript
// favorites.dpls
{
    "title": "Favorites", 
    "description": "My favorite musics of all time"
}
```

Example 2:

```javascript
// power-metal.dpls
{
    "title": "Power Metal", 
    "parent": "favorites.dpls", 
    "description": "Only power metal"
}
```



## The music object

An object that describes a specific music may contain the following properties:

|   Property |  Type  | description                                                  |
| ---------: | :----: | ------------------------------------------------------------ |
|         id | string | **Obligatory**. A unique identifier.                         |
|      title | string | The music's title.                                           |
|     artist | string | The performing artist.                                       |
|       feat | string | A featured artist.                                           |
|      cover | string | The original artist if the music is being performed by someone else. |
|      album | string | Self explanatory.                                            |
| soundtrack | string | An intellectual property featuring the music.                |
|     genres | array  | Musical genre(s).                                            |

See the examples below, all are valid DPLS music objects:

```json
{
    "id": "b4de2a49c8ffa3fbee04446f045483b2", 
    "title": "We Are The Champions"
}
```
```json
{
    "id": "04446f04548b4de2a49c8ffa3fbee3b2", 
    "title": "Twilight Of The Thunder God", 
    "artist": "Sabaton", 
    "album": "Carolus Rex", 
    "cover": "Amon Amarth",
    "genres": ["Metal"]
}
```
```json
{
    "id": "4de446f04548b8ffa3fbee3b22a49c04", 
    "title": "Easy Living", 
    "artist": "Teddy Wilson And His Orchestra", 
    "feat": "Billie Holiday", 
    "soundtrack": "Fallout 3", 
    "genres": ["Jazz", "Blues"]
}
```

In order to avoid repetition, it is possible to point to an existing object by simple providing its ID. This object may be specified in the same play-list or in an external one defined in the `parent`property of the header object.

```json
{
    "id": "b4de2a49c8ffa3fbee04446f045483b2"
}
```

