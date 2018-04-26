# RestAPI-Node-App

A web service with a RESTful API using Node.js

The web service is used to query user data. It has the following endpoints: 
```html
<img src = 'images\Initial_screen.png'>
```
## GET /users 
   Returns a list of all users, e.g.: 
   { "users": [
   { "username": "pjhanwar", "displayName": "Prachi Jhanwar", "department": "Computer Science" }, 
   { "username": "jdoe", "displayName": "John  Doe", "department": "Development" }
   ] } 
  
  ```html
<img src = 'images\user_list.png'>
```
## GET /users/{username} 
   Returns the data of a particular user or status code 404 if not found, e.g.:
   { "displayName": "Prachi Jhanwar", "department": "Computer Science" } 
   
   ```html
<img src = 'images\display.png'>
```
   
## POST /users/{username} 
   Adds a new user. The request body contains the user data, e.g.: 
   { "displayName": "Prachi Jhanwar", "department": "Computer Science" } 
   If the user exists, returns status code 409.
   
   ```html
<img src = 'images\add.png'>
```

## UPDATE /users/{username} 
   Updates an existing user.
   
   ```html
<img src = 'images\update.png'>
```

## DELETE /users/{username} 
   Remove an existing user or returns status code 404 if the user does not exist.
   
   ```html
<img src = 'images\delete.png'>
```

