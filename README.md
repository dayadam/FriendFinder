# FriendFinder

This application quizzes users on their temperaments and matches them to the person from in-memory storage with the most similar answers based on their inputs.
---

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Built With](#built-with)

## Organization of the Application

The application uses Bootstrap for the user interface. Immediately upon launch, the application uses axios and cheerio to scrape the headlines, hyperlinks, and snippets (if available) from [Hypepotamus](https://hypepotamus.com/). The application then checks each of these against the database to see if they have been previously saved, and if so, display the previously saved version with any available comments. If the article has not been previously saved, the application will display the new article to the user. Views are server-side rendered with the help of handlebars. Express handles routing and mongoose models the data as an ODM for MongoDB. 

## Getting Started

In order for this application to run on your local computer, you must have Node.js installed as well as the required node modules. 

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

Node.js and express packages are required to run this application locally.  

### Clone

- Clone this repo to your local machine using `https://github.com/dayadam/FriendFinder.git`

---

## Installation

### Install Node and packages

- install Node.js from <https://nodejs.org/en/>

> install npm packages

```shell
$ npm install
```

## Usage

Users can enter their name and comment in those respective fields on an article and click the "Submit" button to save it to the database and display it. Clicking the "Delete" button besides an existing comment will remove it from the database and remove it from the user interface. The article headlines are hyperlinks to the Hypepotamus article itself.  

## Built With

* [Node.js](https://nodejs.org/en/) - Server runtime environment for JavaScript
* [Express.js](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node.
* [jQuery](https://jquery.com/) - Fast, small, and feature-rich JavaScript library
* [Bootstrap](https://getbootstrap.com/) - CSS framework directed at responsive, mobile-first front-end web development

## Authors

* **Adam Day** - [Adam Day](https://github.com/dayadam)

## Acknowledgments

* Thanks to all the open source contributors that helped with the building blocks of this project. 
 