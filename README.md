<p align="center">
  <img src="https://raw.githubusercontent.com/Bookshlf-in/Website/main/public/images/smallLogo.png" width="100px" />
  <h1 align="center">Bookstore</h1>
</p>

## Project for IIIT Lucknow
#### Online Second Hand book store to buy, sell used books & specially for Competitive Exams.

## Contributors

- **Abhishek Singh** (LIT2019008)
  - Frontend Lead, API calling and exception handeling, Testing
- **Sumit Kumar** (LIT2019009)
  - UI/UX design, Skeleton modeling of frontend, Breakdowns testing, basic css support
- **Kushagra Patel** (LCS2019071)
  - React Component handeling, raw html css handeling, resolving warnings
- **Rohit Kumar** (LIT2019037)
  - Backend Lead, Database Creation & handeling, API creation & handeling.
- **Rahul Yadav** (LIT2019010)
  - API testing with Postman, Added express validators in all APIs, and resolved bugs

## Built With

### Frontend
- [React](https://reactjs.org)
- [Firebase](https://firebase.google.com/)
- [Axios](https://axios-http.com/docs/intro)

### Backend
- [MongoDB](https://www.mongodb.com/)
- [NodeJS](https://nodejs.org/en/)
- [ExpressJs](https://expressjs.com/)
- [Postman](https://www.postman.com/)

## Requirements

You will need `node` and `npm` installed globally on your machine.

- [Download and Install Nodejs](https://nodejs.org/en/download/)

- Open terminal, write the following command and press enter.

```
$ npm -v
```

The terminal should return your npm version.

## How to set up your local environment

### Clone App

- Make a new folder and open the terminal there.
- Write the following command and press enter.

```
$ git clone https://github.com/RohitKumar-200/Bookstore.git
```

### For Frontend

#### 1. Move to Frontend directory

```
$ cd Frontend
```

#### 2. Install node packages

```
$ npm install
```

#### 3. Run Locally

```
$ npm start
```

### For Backend

#### 1. Move to Backend directory

```
$ cd Backend
```

#### 2. create a .env file in Backend directory and add following variables in it

```
DATABASE=<MongoDB connection string>
JWT_SECRET=<Any randomly created secret>
SENDGRID_API_KEY=<Sendgrid API to send e-mails>
```

#### 3. Install node packages

```
$ npm install
```

#### 4. Run Locally

```
$ npm start
```

### Some points to consider

- Currently frontend is connected to a api which is hosted in heroku
- To connect locally hosted backend to frontend, change base API url in frontend to `http://localhost:4000`

## Links

* [Website URL](https://bookstore-in.web.app/)
* [Deployed backend](http://bookstore-in.herokuapp.com/)
* [Github repository](https://github.com/RohitKumar-200/Bookstore)
* [Database models](https://whimsical.com/database-9wXQGVEwVbm8UMYrUFGQsw)
