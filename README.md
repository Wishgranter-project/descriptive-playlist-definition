# Descriptive Play-List

Functional Specifications
Version 1.0.2

Adinan Cenci
Last Updated: July 22, 2023

2019 Adinan Cenci. All Rights Reserved. 

## Overview

**Descriptive Playlist (DPLS)** is a file format designed to define a music playlist in a versatile manner.

Please note that this specification is still a work in progress.

This document will not delve into the detailed file structure; instead, it will focus on the core concepts and functionality of the Descriptive Playlist format.

For specifics check the [technical specs](https://github.com/wishgranter-project/descriptive-playlist-definition/blob/master/technical-specifications.md).

## Concept

Traditionally, most playlist formats rely on multimedia availability, either as files on a user's computer or accessible through online streaming services. These playlists essentially act as "maps" to a sequence of resources, be files or streams.

However, this approach results in fragmented music collections, as users are tied to various services depending on the availability of their favorite songs. The Descriptive Playlist aims to address this issue by focusing on the music itself rather than mapping specific resources.

## Scenarios

**Scenario 1: Mike** Mike is a music enthusiast and to him are available several streaming services like Spotify, Deezer, and Youtube Music. Each platform offers a diverse selection of songs, but there are unique music pieces available on different services.

For instance, Mike's favorite Jazz singer's songs are only available on Deezer, while his preferred Metal artists' tracks are exclusively on Spotify. To have access to all his favorite music, Mike creates accounts on each platform.

However, one day, Deezer removes some songs from his favorite Jazz artist due to a copyright dispute Mike has no control over. He now faces the challenge of finding these songs elsewhere, provided he remembers their titles.

To tackle this issue, Mike installs a music player on his computer that supports Descriptive Playlists. This advanced music player can intelligently determine which streaming service offers the music he desires, seamlessly providing an unified experience.
