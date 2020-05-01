# Descriptive Play-List

Technical Specifications
Version 1.0.0

Adinan Cenci
Last Updated: April 20, 2019

2019 Adinan Cenci. All Rights Reserved. 

## Overview

Descriptive play-list is a file format to define a music play-list.

This spec is still not complete.

This document specifies the file's structure. 

This is the official implementation to the functional specs v1.0.0 .

## The file

A descriptive play-list is a json file describing a root object with the following properties: 

| Property    | Type   | Description                                                  |
| ----------- | ------ | ------------------------------------------------------------ |
| title       | string | The play-list title                                          |
| description | string | An observation about the play-list contents                  |
| parent      | string | Another descriptive play-list file that contains the definition for the musics in this play-list. |
| list        | array  | A list containing two types of data: <ul><li>[Music objects](#the-music-object) describing a music.</li><li>A id for a Music object, this music may be defined in the same play-list or in the one specified in the **parent** property.</li></ul> |

Example:

```json
{
    "title": "Favorites", 
	"parent": "parent.dpls", 
    "description": "My favorite musics of all time", 
    "list": [
        { ... }, 
        { ... }, 
        { ... }, 
        ...
        ...
    ]
}
```


## The music object

A object that describes a specific music may contain the following properties:

|   Property |  Type  | description                                                  |
| ---------: | :----: | ------------------------------------------------------------ |
|         id | string | **Obligatory**. A unique identifier.                         |
|      title | string | **Obligatory**. The music's title.                           |
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
