<div align="center">

# SocialNetworkAPI

<p align="center">
    <img src="https://img.shields.io/badge/Javascript-yellow" />
    <img src="https://img.shields.io/badge/mongoDB-blue"  />
    <img src="https://img.shields.io/badge/-node.js-green" />
    <img src="https://img.shields.io/badge/-MVC-red" >
    <img src="https://img.shields.io/badge/-json-orange" />
    <img src="https://img.shields.io/badge/express.js-green" />
</p>
</div>

## Description
 
An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Using Express.js for routing, a MongoDB database, and the Mongoose ODM.

This application will use Express.js for routing, a MongoDB datasbase, Mongoose ODM, and also moment.js.

The URL of the GitHub repository is **https://github.com/alekhyavinni/SocialNetworkAPI**
 
The repository name is **SocialNetworkAPI**

## Table of Contents

* [Installation](#installation)
* [Walkthrough Videos](#walkthrough-videos)
* [Usage](#usage)
* [References](#references)
* [License](#license)

## Installation

*   This application requires the installation of node.js from the website, https//wwww.node.org.

*   Node Package Manager (npm) is a software manager and installer which puts the modules in place so that the node project can utilize it, and also, it manages dependency conflicts intelligently and initialized using **npm init**. The package.json will be generated and will contains all the details of the application in which the user have inputted during the npm initialization. 

*  This application will use the following npm packages:-

  
         - npm install express
         - npm install mongoose
         - npm i moment

* Nodemon is installed as development dependency meaning that if our application ever goes in production, this package will not be included. The command to install for in this case is **npm i -D nodemon**. The purpose of this package is to watch for any changes in our files and restart the server instead of us having to do that manually ourselves. The screenshot show the working of the nodemon.

   ![alt text](/Assets/insomnia.png)



* This project also requires MongoDB to be installed.   As would be the *USER STORY* who want an API that uses a NoSQL database, MongoDB is a general purpose NoSQL document database that uses documents to store data.  MongoDB stores data as a BSON object, making a great fit for JavaScript apps.  In this application, the user want the website to handle large mounts of unstructured data and MongoDB is a great choice for *heterogeneous data*, and scales easily. Below shows that when the server is started, the mongoose models are synced to the MongoDB database. 

    ![alt text](/Assets/users.png)
    ![alt text](/Assets/thoughts.png)

* After the API have been created,  data would then be created through Insomnia.  The overview of data is shown below:-

    ![alt text](/Assets/insomnia.png)

* The data created also synced to the MongoDB database.


# Walkthrough Video

*   Overview of MongoDB and the Mongoose models are synced to the MongoDB database.

*   To demonstrate the GET routes for all users and all thoughts being tested in Insomnia.

*   To demonstrate the GET routes for a single user and a single thought tested in Insomnia.

*   To demonstrate POST, PUT and DELETE routes for users tested in Insomnia.

*   To demonstrate POST, PUT and DELETE routes for thoughts tested in Insomnia.

*   To demonstrate POST and DELETE routes for a user's friend list being tested in Insomnia.

*   To demonstrate POST and DELETE routes for reactions to thoughts being tested in Insomnia.

![GIF of my project in action](./Assets/Socialnetwork.gif)


# Usage
```md
GIVEN a social network API
I enter the command to invoke the application - npm start
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
## License

[MIT License](https://opensource.org/licenses/MIT)

## Contributing

This project was created as a challenge assignment for the UT Full Stack Boot Camp. Contact me with any ideas or requests.

## Contact
  If you have any questions about this projects, please contact me directly at alekhyavinni12@gmail.com. You can view more of my projects at https://github.com/alekhyavinni


