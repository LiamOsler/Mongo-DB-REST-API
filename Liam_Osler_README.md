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

/users/ - GET - Returns a JSON object with all the users
/users/:id - GET - Returns a JSON object for a specific user id
/users/create - POST - Creates a new user
/users/delete/:id - GET - Deletes a user with the specified id
/users/update/:id - PUT - Updates a user with the specified id

i.e. https://good-eel-housecoat.cyclic.app/users
