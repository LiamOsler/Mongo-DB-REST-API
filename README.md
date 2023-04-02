CSCI4177 - Tutorial 7
Author: Liam Osler

Last Modification Date: 31 MAR 2023

Repository URLS:
Main Git Repository: https://git.cs.dal.ca/osler/CCSI4177-Tutorial7

Remote Deployment URLs:
https://good-eel-housecoat.cyclic.app/

Running the Project Locally:
Check that you have Node.js installed on your machine. If not, you can download it from https://nodejs.org/en/download/.
```
node -v
```

Clone the repository:
```
git clone https://git.cs.dal.ca/cparker/csci4177_group19_project.git
Navigate to the csci4177_group19_project directory:
```

Change directory to the project directory:
```
cd CCSI4177-Tutorial7
```

Run the project:
```
npm install && npm start
```
## API endpoints:

### Find Users
#### API Route:
GET: 
/users/find/all 
Gets an array of JSON objects with all the users

GET: 
/users/find/id/:id 
Gets a JSON objects for user with :id if it exists

### Create New User
#### API Route:
POST: 
/users/create 
submit a POST request with a JSON body

Required values:
- Username
- Email Address
- Bio

Format:
```
{
  "username": "John Doe",
  "email": "me@johndoe.com",
  "bio": "I am not a deer"
}
```

### Update User
#### API Route:
PUT: 
/users/update/:id 
submit a PUT request with a JSON body to update user with :id

Required values:
- Username
- Email Address
- Bio

Format:
```
{
  "username": "John Doe",
  "email": "me@johndoe.com",
  "bio": "I am not a deer"
}
```
