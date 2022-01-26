# Packages required:
- $ npm install mongodb --save
- $ npm install mongoose --save
- $ npm install express --save
- $ npm install body-parser --save

## Install nodemon for hot reload
- $ sudo npm install -g nodemon


# Instructions:
- Run mongoDB on local (mongodb-compass)
  - $ mongodb-compass
Install MongoDB-compass:
https://docs.mongodb.com/compass/master/install/
(Refer to `MongoDB_ref1.png` for preview of how mongoDB looks like running on localhost)
- Setup New Connection in MongoDB-Compass:
    - Hostname: localhost
    - Port: 27017
    - Authentication: None

- Start index.js:
  - $ nodemon index

## Endpoints:
- GET endpoint `/api/cafes/location/<location>`
  - returns record based on cafe location, if invalid location is provided, empty list is returned
- GET endpoint `/cafes/employees`
  - returns all employees records
- POST endpoint `/cafe`
  - creates new cafe in database (schema: cafeModel.js)
- POST endpoint `/cafe/employee`
  - adds a new employee to the cafe


# Example database records:
- Employees: `employeeDB.png`
- Cafes: `cafeDB.png`



