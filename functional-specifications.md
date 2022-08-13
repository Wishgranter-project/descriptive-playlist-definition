# Descriptive Play-List

Functional Specifications
Version 1.0.1

Adinan Cenci
Last Updated: November 28, 2020

2019 Adinan Cenci. All Rights Reserved. 

## Overview

Descriptive play-list or DPLS, is a file format to define a music play-list.

This spec is still not complete.

This document does not discuss the file structure.

## Concept

Whether it be files in the user's computer or in a on-line streaming service, most play-list formats are dependent on the availability of multimedia to keep a play-list, being a "map" to a series of resources, files or streaming.

This keeps users from having an unified database of their favorite musics, their collection spread across multiple services depending on the availability of each. The descriptive play-list aims to solve this problem by being independent of multimedia, describing the musics instead of mapping files and streams.

# Scenarios

**Scenario 1: Mike**
Today there are dozens of on-line streaming services to chose like Spotify, Deezer, Youtube Music .etc, the list goes on. Mike loves music and he opts for using Spotify, but it lacks a series of songs from his favorite Jazz singer, songs that are available at Deezer, but Deezer in turn lacks a series of his favorite Metal artists which are available at Spotify.

In order to save all his music, he creates an account in each service. All is fine until one day when Deezer excludes the songs from Mike's favorite Jazz artist because of some copyright dispute Mike has no control over, now he must look for his music elsewhere, if he does remember the titles of the deleted songs.

To solve this problem, he install a music-player on his computer that makes use of Descriptive Play-lists, this music-player is capable of figuring out for him, which streaming service offers the music he desires.