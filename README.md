# KKR

KKR is a project that allows You to manage tasks, orders and workers in small company.

Everyone can use this app. In order to do CRUD operations You have to sign up and after this action You can sign in to home panel;
After all You can modify all sections of the KKR.

You can develop and change the code in a very real sense. All You need to know is the basics of MEAN Stack.

## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@StanislawKluczewski](https://github.com/StanislawKluczewski)


## Technological description

Used Technologies:
MongoDB, Angular, ExpressJs, NodeJs, PrimeNG

Available on Windows.

Node version: 16.15.1

ExpressJs version: 4.18.1

Angular version: 14.1.0

PrimeNG version: 14.1.1

MongoDB version: 5.0.9



# How to run app as developer: 

node server - run API

nodemon server - run API with nodemon

ng serve - run GUI



## API Reference

### Orders 
##### Get all orders

```http
  GET /orders
```
##### Get order by name

```http
  GET /orders/:name
```

##### Add order

```http
  POST /orders/add-order
```

##### Edit order by name

```http
  PUT /orders/edit-order/:name
```
##### Delete order by name

```http
  DELETE /orders/delete-order/:name
```

### Tasks 
##### Get all tasks

```http
  GET /tasks
```
##### Get task by name

```http
  GET /tasks/:name
```

##### Add task

```http
  POST /tasks/add-task
```

##### Edit task by name

```http
  PUT /tasks/edit-task/:name
```
##### Delete task by name

```http
  DELETE /tasks/delete-task/:name
```

### Workers 
##### Get all workers

```http
  GET /workers
```
##### Get  workers by name

```http
  GET /workers/:name
```

##### Add worker

```http
  POST /workers/add-worker
```

##### Edit worker by name

```http
  PUT /workers/edit-worker/:name
```
##### Delete worker by name

```http
  DELETE /workers/delete-worker/:name
```

### Workers 
##### Get all workers

```http
  GET /workers
```
##### Get  workers by name

```http
  GET /workers/:name
```

##### Add worker

```http
  POST /workers/add-worker
```

##### Edit worker by name

```http
  PUT /workers/edit-worker/:name
```
##### Delete worker by name

```http
  DELETE /workers/delete-worker/:name
```

### User 
Authentication is made by jsonwebtoken and bcryptjs. In folder helpers there is a check-auth.js file which is used in login method. 

##### Sign up
```http
  POST /users/edit-worker/:name
```

##### Login
```http
  POST /users/login
```

##### Logout
```http
  GET /users/logout
```
