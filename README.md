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



















TASK 2
Data design and retrieval
Create a database of your own choice (either MySQL or MongoDB) where the program can connect to. You can design the database structure as you deem fit, but it needs to able to handle the following:

•	Create an GET endpoint /cafes?location=<location>

The response of this endpoint should be the below and sorted by the highest number of employees first
Key	Description
name	Name of the cafe
description	A short description of the cafe
employees	Number of the employees. 
It must be an integer
logo	Logo of the cafe
location	Location of the cafe
id	UUID

If a valid location is provided, it will filter the list to return only cafes that is within the area
If an invalid location is provided, it should return an empty list

•	Create an GET endpoint	/cafes/employees

The response of this endpoint should be the below and sorted by the highest number of days worked. It should list all the employees.
Key	Description
name	Name of the employee
days_worked	Number of days the employee worked
It must be an integer
cafe	Café’s name that the employee is under
id	Unique identifier in the format ‘UIXXXXXXX’ where the X is replaced with alpha numeric

•	Create a POST endpoint	/cafe

This should create a new café in the database

•	Create a POST endpoint	/cafe/employee

This should add a new employee to the café. HOWEVER, no same employee can work in 2 cafes. 

You should also provide the seed data for the database design you have designed.
