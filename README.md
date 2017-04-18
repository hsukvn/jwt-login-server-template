# JWTLoginServerTemplate
This project is a very simple login server template implemented by JSON Web Token.

## Idea
1. login by email and password
2. password is encrypt by bcrypt
3. user data is stored in mongodb
4. authorize with JSON Web Token in header in request

## Before Start
1. Install Mongodb
2. Install httpie (option)
	* you may use curl or any other stuff to query the server

## Setup
1. Clone the project
2. Run `npm install` to install all dependencies
3. Setup db path in `index.js` (default: `mongodb://localhost/auth`)
4. Setup a secret key for bcrypt in `config.js`
5. Run `npm run dev` to run a simple dev server (default port: 3090)

## Methods
1. POST /signup
```
http POST localhost:3090/signup email=test@example.com password=123
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 165
Content-Type: application/json; charset=utf-8
Date: Tue, 18 Apr 2017 15:04:32 GMT
ETag: W/"a5-vwturq1tmW1avLgTqC7AjUpbX0I"
X-Powered-By: Express

{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1OGY2MmIwMGJiNTM4MTI4YmYwNDIzMGQiLCJpYXQiOjE0OTI1Mjc4NzI2Mjl9.NWQkVRf2GEFbYV9bsZVPI0aStb8Cga0hPzLE7PJ6LlM"
}
```

2. POST /signin
```
http POST localhost:3090/signin email=test@example.com password=123
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 165
Content-Type: application/json; charset=utf-8
Date: Tue, 18 Apr 2017 15:37:49 GMT
ETag: W/"a5-U8SAbEul0bRk6a/XLyRwuqAC9Qk"
X-Powered-By: Express

{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1OGY2MmIwMGJiNTM4MTI4YmYwNDIzMGQiLCJpYXQiOjE0OTI1Mjc4NzI2Mjl9.NWQkVRf2GEFbYV9bsZVPI0aStb8Cga0hPzLE7PJ6LlM"
}
```

3. GET / (authorization required)
```
http localhost:3090/ authorization:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1OGY2MmIwMGJiNTM4MTI4YmYwNDIzMGQiLCJpYXQiOjE0OTI1Mjc4NzI2Mjl9.NWQkVRf2GEFbYV9bsZVPI
0aStb8Cga0hPzLE7PJ6LlM
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 14
Content-Type: application/json; charset=utf-8
Date: Tue, 18 Apr 2017 15:06:24 GMT
ETag: W/"e-LXC2LfsckxSMrLTc9qtx7AGzQXE"
X-Powered-By: Express

{
    "hi": "there"
}
```

## Add Route Howto
1. Add controller in `controller/`
2. Add route in `route.js`


