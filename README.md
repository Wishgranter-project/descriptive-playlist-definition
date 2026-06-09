# Descriptive Playlist

Functional Specifications
Version 1.0.3

Adinan Cenci
Last Updated: May 6, 2026

2019 Adinan Cenci. MIT licensed. 

## Overview

**Descriptive Playlist (DPLS)** is a file format designed to define a music 
playlist in a versatile manner.

Please note that this specification is still a work in progress.

This document will not delve into the detailed file structure; instead, it 
will focus on the core concepts and functionality of the Descriptive Playlist 
format.

For specifics check the [technical specs](https://github.com/wishgranter-project/descriptive-playlist-definition/blob/master/technical-specifications.md).

## Concept

Traditionally, most playlist formats rely on multimedia availability, either 
as files on a user's computer or accessible through online streaming services. 
These playlists essentially act as "maps" to a sequence of resources, be files 
or streams.

However, this approach results in fragmented music collections, as users are 
tied to various services depending on the availability of their favorite 
songs. The Descriptive Playlist aims to address this issue by describing the 
music, title, performing artist, album etc, rather than indexing specific 
resources.

## Scenarios

**Scenario 1: Mike** Mike is a music enthusiast and has access to 
several streaming services like Spotify, Deezer, and Youtube Music. Each 
platform offers a diverse selection of songs, but there are unique music 
pieces available on different services.

For instance, Mike's favorite Jazz songs are only available on Deezer, while 
his preferred Metal tracks are exclusively on Spotify. To have access to all 
his favorite music, Mike creates accounts on each platform.

However, one day, Deezer removes some songs from his favorite Jazz artist due 
to a copyright dispute Mike has no control over. He now faces the challenge of 
finding these songs elsewhere, provided he remembers the titles of the now 
missing songs.

To tackle this issue, Mike installs a music player on his computer that 
supports Descriptive Playlists and uses it to compile his playlists. Not by 
listing .mp3 files, but by describing the music titles, who perform them, 
musical genre etc.

And this advanced music player can intelligently determine where to find the 
media to play, be in Mike's own computer or online streaming services, 
seamlessly providing a unified experience.

So even if Mike deletes his .mp3 files from his computer or the streaming 
service stop providing the music, Mike's music collection will remain intact, 
as long as Mike secures his descriptive playlist files.
