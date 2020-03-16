# KANFUN (KANBAN APPLICATION)

# Third Party

    Google OAUTH

# Server Documentation    

### Dependencies

| Package Name | Version |
| ------------ | ------- |
| bcrypt     | ^2.4.3  |
| cors         | ^2.8.5  |
| dotenv       | ^8.2.0  |
| express      | 4.17.1  |
| googleapis   | ^39.2.0 |
| jsonwebtoken | ^8.5.1  |
| pg           | ^7.18.1 |
| sequelize    | ^5.21.3 |

### Devpendencies

| Package Name | Version |
| ------------ | ------- |
| dotenv     | ^8.2.0  |

### Example .env

secret=cialobaobao

SENDGRID_API_KEY='SG.yW5JelmwQYCo6Dg6znEtCQ ZVmHemhvg0dKz22wvkJ2I6Xt9MoY5bPB6F-2WpVmzQw'
PORT=3000

### Default Port

    SERVER = https://protected-savannah-10852.herokuapp.com
    CLIENT = https://kanfun-1584103939567.firebaseapp.com/

## Server

    Tools: NodeJS, Express, sequelize, postgresql

## Table Responses

| Code | Description                                     |
| ---- | ----------------------------------------------- |
| 200  | Response Sukses                                 |
| 201  | Data berhasil ditambahkan                       |
| 400  | Request yang diberikan tidak lengkap atau salah |
| 403  | Tidak memiliki otoritas                         |
| 404  | Data tidak ditemukan / tidak ada                |
| 500  | Error dari sisi server / tidak diduga-duga :v   |


### USERS

| Url        | Method | Description                            |
| ---------- | ------ | -------------------------------------- |
| /users/register     | POST   | Menambahkan User baru                      |
| /users     | GET   | Mencari atau Melihat daftar Semua User                      |
| /users/login     | POST   | Mendapatkan token dan mengirim token ke client                      |


### 1. POST / Users / register

_Request header:_

```javascript
{
    "Content-Type": "application/json"
}
```

<br>

_Example Input (Request Body) :_

```javascript
{
    "username": "marcel",
    "email": "marcel123@gmail.com",
    "password": "123",	
}
```

_Response (201, Data berhasil ditambahkan):_

```javascript
{
    "username": "marcel",
    "email": "marcel123@gmail.com",
    "password": "1aojadoa2sdasd4adplalaxlasclsml",	
    "updatedAt": "2020-02-03T13:03:50.806Z",
    "createdAt": "2020-02-03T13:03:50.806Z"
}
```


_Example Input (Request Body) :_

```javascript
{
    "username": "marcel",
    "email": "marcel123@gmail.com",
    "password": "",	
}
```

_Response ERROR (400, Request tidak lengkap):_

```javascript
{
	status: 400,
	msg: "Bad Request"
}
```
### 2. POST / users / login

<br>


_Request header:_

```javascript
{
    "Content-Type": "application/json"
}
```

<br>

_Example Input (Request Body) :_

```javascript
{
    "email": "marcel123@gmail.com",
    "password": "123",	
}
```

_Response (200, Respon Sukses ):_

```javascript
{
    "username": "marcel",
    "email": "marcel123@gmail.com",
    "password": "1aojadoa2sdasd4adplalaxlasclsml",	
    "updatedAt": "2020-02-03T13:03:50.806Z",
    "createdAt": "2020-02-03T13:03:50.806Z"
}
```


_Example Error Input (Request Body) :_

```javascript
{
    "username": "marcel",
    "email": "marcel123@gmail.com",
    "password": "",	
}
```

_Response ERROR(400, Data tidak lengkap):_

```javascript
{
	status: 400,
	msg: "Password cannot empty."
}

```


### 3. GET / users 


_Response (200, Respon Sukses):_

```javascript
[
  {
    "id": 1,
    "username": "marcelus",
    "email": "marcel123456@gmail.com",
    "password": "$2b$10$I2JXLSnEFazR50WQ4EiMPuNsYlOgoQBwJMgqG33Q0IrFEZY8HlrFG",
    "createdAt": "2020-03-05T10:51:42.750Z",
    "updatedAt": "2020-03-05T10:51:42.750Z"
  },
  {
    "id": 2,
    "username": "marcellll",
    "email": "marcel1234555@gmail.com",
    "password": "$2b$10$WVYzEHBXfwd1X75iNUmA6OQMN80nrpXnp1VB7VZR/Gf8zGf3vGWlO",
    "createdAt": "2020-03-05T12:51:42.921Z",
    "updatedAt": "2020-03-05T12:51:42.921Z"
  }
]
```

_If the "data" was empty, the response will be :_

```javascript
"[]";
```

### 4. PUT / users

_Request header:_

```javascript
{
    "Content-Type": "application/json",
}
```

<br>

_Example Input (Request Body) :_

```javascript
{
    "email": "marcel123@gmail.com",
    "password": "123",	
}
```

_Response (200, Respon Sukses):_

```javascript
{
    "username": "marcel",
    "email": "marcel123@gmail.com",
    "password": "1aojadoa2sdasd4adplalaxlasclsml",	
    "updatedAt": "2020-02-03T13:03:50.806Z",
    "createdAt": "2020-02-03T13:03:50.806Z"
}
```


_Example Error Input (Request Body) :_

```javascript
{
    "username": "marcel",
    "email": "marcel123@gmail.com",
    "password": "",	
}
```

_Response ERROR(400, Data tidak lengkap):_

```javascript
{
	status: 400,
	msg: "Password cannot empty."
}

```


## Kanban


| Url        | Method | Description                            |
| ---------- | ------ | -------------------------------------- |
| /kanbans     | POST   | Menambahkan kanbans baru kedalam kanbans list                      |
| /kanbans     | GET   | Mencari atau Melihat kanbans punya user                     |
| /kanbans/:id     | GET   | Mencari atau Melihat kanbans berdasarkan id                  |
| /kanbans/:id| PUT  | Mengedit Data kanbans         |
| /kanbans/:id | DELETE   | Menghapus kanbans dari table favorite                      |



### 1. POST /kanbans

_Example Input (Request Body) :_

```javascript
{
"name": "Mandi"
"CategoryId": 1,
}
```

_Response (201, data berhasil ditambahkan):_

```javascript
{
  "id": 26,
  "name": "mandi",
  "UserId": 1,
  "CategoryId": 1,
  "updatedAt": "2020-03-16T09:33:50.071Z",
  "createdAt": "2020-03-16T09:33:50.071Z"
}
```

_Example ERROR Input (Request Body) :_

```javascript
{
"name": ""
"CategoryId": 1,
}
```


_Response (400, Bad Request):_

```javascript
[
  "Kanban's Cannot Empty."
]
```

### 2.  GET / kanbans

_Response (200, response sukses):_

```javascript
[
  {
    "id": 22,
    "name": "Mengayak Tepung",
    "CategoryId": null,
    "UserId": 1,
    "createdAt": "2020-03-16T09:20:29.722Z",
    "updatedAt": "2020-03-16T09:20:29.722Z",
    "Category": null
  },
  {
    "id": 25,
    "name": "Owyeaaahhh!",
    "CategoryId": 3,
    "UserId": 1,
    "createdAt": "2020-03-16T09:25:29.123Z",
    "updatedAt": "2020-03-16T09:25:29.123Z",
    "Category": {
      "id": 3,
      "title": "Done",
      "createdAt": "2020-03-13T13:56:56.877Z",
      "updatedAt": "2020-03-13T13:56:56.877Z"
    }
  },
  {
    "id": 26,
    "name": "mandi",
    "CategoryId": null,
    "UserId": 1,
    "createdAt": "2020-03-16T09:33:50.071Z",
    "updatedAt": "2020-03-16T09:33:50.071Z",
    "Category": null
  }
]
```


### 3.  PUT / kanbans /:id


_Example Input (Request Body) :_

```javascript
{
    "name": "Mandi",
    "CategoryId": 2
}
```
_Response (200, response sukses):_

```javascript
{
{
  "id": 26,
  "name": "mandi",
  "UserId": 1,
  "CategoryId": 2,
  "updatedAt": "2020-03-16T09:33:50.071Z",
  "createdAt": "2020-03-16T09:33:50.071Z"
}
}

```

_If the ID wasn't found the respond will be (404, data not found):_

```javascript
{
  status: 404,
  msg: "data not found"
}
```

_Example Input (Request Body) :_

```javascript
{
"name": "",
}

```
_Response ERROR (400, data tidak lengkap):_

```javascript
{
  "status": 400,
  "msg": "Kanban cannot be empty."
}

```

### 4.  DELETE / kanbans /:id



_Example Input (Request Params) :_

```javascript

 req.params.id = 2

```

	
_Response (200, response if success):_

```javascript
1
```


_Example Error Input (Request Body) :_

```javascript
req.params.id = 2
```


_Response ERROR (404, data not found):_

```javascript
{
  status: 404
  msg: 'Data not found'
}

```

### 5.  GET / kanbans /:id



_Example Input (Request Params) :_

```javascript

 req.params.id = 2

```

	
_Response (200, response if success):_

```javascript
{
  {
    "id": 25,
    "name": "Owyeaaahhh!",
    "CategoryId": 3,
    "UserId": 1,
    "createdAt": "2020-03-16T09:25:29.123Z",
    "updatedAt": "2020-03-16T09:25:29.123Z",
    "Category": {
      "id": 3,
      "title": "Done",
      "createdAt": "2020-03-13T13:56:56.877Z",
      "updatedAt": "2020-03-13T13:56:56.877Z"
    }
  }

}
```


_Example Error Input (Request Body) :_

```javascript
req.params.id = 2
```


_Response ERROR (404, data not found):_

```javascript
{
  status: 404
  msg: 'Data not found'
}

```


## Category


| Url        | Method | Description                            |
| ---------- | ------ | -------------------------------------- |
| /Categories     | POST   | Menambahkan Categories baru kedalam Categories list                      |
| /Categories     | GET   | Mencari atau Melihat Categories punya user                     |
| /Categories/:id     | GET   | Mencari atau Melihat Categories berdasarkan id                  |
| /Categories/:id| PUT  | Mengedit Data Categories         |
| /Categories/:id | DELETE   | Menghapus Categories dari table favorite                      |



### 1. POST /Categories

_Example Input (Request Body) :_

```javascript
{
  "title": "masyukk",
}
```

_Response (201, data berhasil ditambahkan):_

```javascript
{
  "id": 5,
  "title": "masyukk",
  "updatedAt": "2020-03-16T09:44:26.188Z",
  "createdAt": "2020-03-16T09:44:26.188Z"
}
```

### 2.  GET / Categories

_Response (200, response sukses):_

```javascript
[
  {
    "id": 1,
    "title": "Backlog",
    "createdAt": "2020-03-13T13:56:56.877Z",
    "updatedAt": "2020-03-13T13:56:56.877Z",
    "Kanbans": []
  },
  {
    "id": 2,
    "title": "Todo",
    "createdAt": "2020-03-13T13:56:56.877Z",
    "updatedAt": "2020-03-13T13:56:56.877Z",
    "Kanbans": []
  },
  {
    "id": 3,
    "title": "Done",
    "createdAt": "2020-03-13T13:56:56.877Z",
    "updatedAt": "2020-03-13T13:56:56.877Z",
    "Kanbans": [
      {
        "id": 25,
        "name": "Owyeaaahhh!",
        "CategoryId": 3,
        "UserId": 1,
        "createdAt": "2020-03-16T09:25:29.123Z",
        "updatedAt": "2020-03-16T09:25:29.123Z"
      }
    ]
  },
  {
    "id": 4,
    "title": "Completed",
    "createdAt": "2020-03-13T13:56:56.877Z",
    "updatedAt": "2020-03-13T13:56:56.877Z",
    "Kanbans": []
  },
  {
    "id": 5,
    "title": "masyukk",
    "createdAt": "2020-03-16T09:44:26.188Z",
    "updatedAt": "2020-03-16T09:44:26.188Z",
    "Kanbans": []
  }
]
```


### 3.  PUT / Categories /:id


_Example Input (Request Body) :_

```javascript
{
    "title": "coba"
}
```
_Response (200, response sukses):_

```javascript
[
  1,
  [
    {
      "id": 5,
      "title": "coba",
      "createdAt": "2020-03-16T09:44:26.188Z",
      "updatedAt": "2020-03-16T09:48:53.277Z"
    }
  ]
]

```

_If the ID wasn't found the respond will be (404, data not found):_

```javascript
{
  status: 404,
  msg: "data not found"
}
```

_Example Input (Request Body) :_

```javascript
{
"title": "Summer Paradise",
"artist": ""
}

```
_Response ERROR (400, data tidak lengkap):_

```javascript
{
  "status": 400,
  "msg": "Artist cannot be empty."
}

```

### 4.  DELETE / Categories /:id



_Example Input (Request Params) :_

```javascript

 req.params.id = 2

```

	
_Response (200, response if success):_

```javascript
1
```


_Example Error Input (Request Body) :_

```javascript
req.params.id = 2
```


_Response ERROR (404, data not found):_

```javascript
{
  status: 404
  msg: 'Data not found'
}

```

### 5.  GET / Categories /:id



_Example Input (Request Params) :_

```javascript

 req.params.id = 5

```

	
_Response (200, response if success):_

```javascript
{
    "id": 5,
    "title": "coba",
    "createdAt": "2020-03-16T09:44:26.188Z",
    "updatedAt": "2020-03-16T09:48:53.277Z"
}
```


_Example Error Input (Request Body) :_

```javascript
req.params.id = 5
```


_Response ERROR (404, data not found):_

```javascript
{
  status: 404
  msg: 'Data not found'
}

```
