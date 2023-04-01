# Vue 3 BoolFlix

## Installation

Install my-project with npm

```
  npm install 
  npm run dev
```
## Features

- "password" login
- offcanvas with logout and "help center"
- fully reactive
- search Movie and Tv series
- (BUG!) New content with bootstrap tag
## API Documentation

[Documentation](https://developers.themoviedb.org/3/getting-started/introduction)

## API Reference

#### Example: Get the searched movies

(https://developers.themoviedb.org/3/search/search-movies)

```http
  GET /search/movies
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| :-------- | :------- | :------------------------- |
| `query  ` | `string` | **Required**. Pass a text query to search. This value should be URI encoded. |

## Tech Stack

**Client:** VueJs,Vite,Bootstrap 

**Server:** NodeJs 


