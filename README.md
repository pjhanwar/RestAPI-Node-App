# RestAPI-Node-App

A web service with a RESTful API using Node.js

The web service is used to query user data. It has the following endpoints: 
<br>
<img src = 'images\Initial_screen.png'/>
<br>
## GET /users 
   Returns a list of all users, e.g.: 
   { "users": [
   { "username": "pjhanwar", "displayName": "Prachi Jhanwar", "department": "Computer Science" }, 
   { "username": "jdoe", "displayName": "John  Doe", "department": "Development" }
   ] } 
  
<br>
<img src = 'images\user_list.png'/>
<br>
## GET /users/{username} 
   Returns the data of a particular user or status code 404 if not found, e.g.:
   { "displayName": "Prachi Jhanwar", "department": "Computer Science" } 
   
<br>
<img src = 'images\display.png'/>
<br>
   
## POST /users/{username} 
   Adds a new user. The request body contains the user data, e.g.: 
   { "displayName": "Prachi Jhanwar", "department": "Computer Science" } 
   If the user exists, returns status code 409.
   
<br>
<img src = 'images\add.png'/>
<br>

## UPDATE /users/{username} 
   Updates an existing user.
   
<br>
<img src = 'images\update.png'/>
<br>

## DELETE /users/{username} 
   Remove an existing user or returns status code 404 if the user does not exist.
   
<br>
<img src = 'images\delete.png'/>
<br>

