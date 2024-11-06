
# BackEnd Project

This is the BackEnd for my webapp. Generate an API RESTful to manage the elements such as users and tasks for the task list, it uses JWT authentication to protect the routes.


## Tech Stack

Node.js

Express

MySQL

Sequelize

JWT (JSON Web Token)
## Installation

Node.js y npm: Make sure you have Node.js & npm installed.
MySQL: Install & configure MySQL for data.
.env file: Create a .env file on the root of the project with this configuration:

env

DB_URL=mysql://user:password@ip_address_of_the_database:3306/name_of_the_database
PORT=5000
JWT_SECRET=your_secret_password_for_jwt

Clone the repo
```bash
git clone https://github.com/raulgaar/server_raulgaar.git
cd server_raulgaar/backend
```
install dependencies
```bash
npm install
```
Configura la base de datos

Make sure that your MySQL database is configured after the credentials on the .env file. Then execute the next command to sync the Sequelize models:
```bash
npm run migrate
```
## Deployment

To deploy this project run

```bash
npm run dev
```

This initialize the server on http://localhost:5000 or configured port.

## API Reference

#### Register

```http
  POST /api/auth/register
```

| Parameter        | Type     | Description                                     |
| :----------------| :------- | :-----------------------------------------------|
| `name`           | `string` | **Required**. Your name                         |
| `username`       | `string` | **Required**. Your username                     |
| `email`          | `string` | **Required**. Your email                        |
| `password`       | `string` | **Required**. Your password                     |
| `confirmpassword`| `string` | **Required**. Password confirmation             |
| `active`         | `boolean`| If its an active or paused account              |

#### Register

```http
  POST /api/auth/login
```

| Parameter        | Type     | Description                                  |
| :----------------| :------- | :--------------------------------------------|
| `emailUsername`  | `string` | **Required**. Your username or email account |
| `password`       | `string` | **Required**. Your password                  |
## Contributing

Contributions are always welcome!

If you want to contribute:
    Make a fork of the repo.
    Create a branch for your function (git checkout -b feature/new-function).
    Make your changes and commit (git commit -m 'Add new function <name of the function>').
    Push your branch (git checkout -b feature/new-function).
    Make a Pull Request.
    
## Authors

- [@raulgaar](https://www.github.com/raulgaar)

