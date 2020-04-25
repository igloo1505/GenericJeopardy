Jeopardy style game using React, Mongo, and Node.js

-React -MongoDB -Node.js -Express -Lodash -React-Bootstrap

Hosted version: https://igloo-jeopardy.herokuapp.com/
Master Password required to register: Iglooworks


This is a fairly simple Jeopardy style game put together for one of my neighbors that works as a therapist at a hospital here in Milwaukee. 
The idea is simple as you might expect. Users login using there own email and password, but to create an account there is also a "master Password" that was used to only allow access from employees at that specific hospital. Because of this, and the intended narrow scope and limited number of users for what this application was meant for, there was no need to validate emails beyond avoiding duplicates and that the appropriate master password was used. 
Once an account is created, users have access to all question-answer pairs, and are able to add more. When 'Play' is selected the question DB is ran through a couple short functions that group them by category and point value. For questions of the same category, and same point value, another function will randomly select one from that list of the appropriate category and point value, avoiding the need to stop at 5 questions per category. Also, there is one more short function that randomizes categories for each column, which allows this database to grow and shrink appropriately to what the staff sees fit.

