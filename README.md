# Timestamp Microservice - challenge solution

This is a solution to the [Timestamp Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice) challenge. FreeCodeCamp is a platform to help people learn to code for free. :)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [How to run this project locally](#how-to-run-this-project-locally)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Build a full stack JavaScript app that takes a request with a valid date and returns a timestamp.

* A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds
* A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT
* A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }
* The project can handle dates that can be successfully parsed by new Date(date_string)
* If the input date string is invalid, the api returns an object having the structure { error : "Invalid Date" }
* An empty date parameter should return the current time in a JSON object with a unix key
* An empty date parameter should return the current time in a JSON object with a utc key

### How to run this project locally

Install dependencies:

```npm install```

Start server:

```npm start```

The page will be available on (http://localhost:3000/). Nodemon will automatically restart the server if any changes are made.

### Screenshot

![image](https://user-images.githubusercontent.com/64551613/120026408-698aca80-bfc8-11eb-835f-16a8ece0e2a8.png)
![image](https://user-images.githubusercontent.com/64551613/120029553-a658c080-bfcc-11eb-883c-805462f6151d.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- [Node.js](https://nodejs.dev/)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [express](https://www.npmjs.com/package/express)

### What I learned

This was the first microservice I developed and my first time using Node.js on a challenge/project. I tried to keep my code clean by extracting most of my validation and date conversion functions to a external ```helper.js``` file. I also found quite useful to use Nodemon package to automatically restart the node application when file changes in the directory are detected.

### Continued development

I expect to use Express routing on my future projects and explore more of Node.js functionalities.

## Author

- Bárbara Aliverti - [LinkedIn](https://www.linkedin.com/in/barbaraaliverti/)
