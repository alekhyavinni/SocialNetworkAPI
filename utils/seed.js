// Imports
const { User, Thought } = require("../models");
const mongoose = require("mongoose");

const connection = require("../config/connection");

// Seed data
const users = [
  {
    username: "Ryan",
    email: "ryan@gmail.com",
    thoughts: [],
  },
  {
    username: "minni",
    email: "minni@gmail.com",
    thoughts: [],
  },
  {
    username: "alekhya",
    email: "alekhya@gmail.com",
    thoughts: [],
  },
  {
    username: "chinnu",
    email: "chinnu@gmail.com",
    thoughts: [],
  },
  {
    username: "uki",
    email: "uki@gmail.com",
    thoughts: [],
  },
  {
    username: "toby",
    email: "toby@gmail.com",
    thoughts: [],
  },
  {
    username: "rishi",
    email: "rishi@gmail.com",
    thoughts: [],
  },
  {
    username: "daisy",
    email: "daisy@gmail.com",
    thoughts: [],
  },

];

const thoughts=[
    {
        thoughtText:"How to make money on the App Store",
        username:"alekhya",
        reactions:[],
    },
    {
        thoughtText:"How to disagree with someone",
        username:"chinnu",
        reactions:[],
    },
    {
        thoughtText:"Submission for startup pitch",
        username:"uki",
        reactions:[],
    },
    {
        thoughtText:"I love choclates",
        username:"toby",
        reactions:[],
    },
    {
        thoughtText:"i am an Artist",
        username:"rishi",
        reactions:[],
    },
    {
        thoughtText:"Like and subscribe to my channel please",
        username:"daisy",
        reactions:[],
    },
     {
        thoughtText:"I am obsessed with yippie",
        username:"minni",
        reactions:[],
    }


]

console.log(connection);

// Connects to server
connection.once("open", async () => {
  console.log("connected");

  // Drop existing students
  await User.deleteMany({});
  await Thought.deleteMany({})

  // Adds seed data to database
  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts)


  console.table(users);
  console.table(thoughts)
  console.info("Seeding complete! 🌱");
  process.exit(0);
});