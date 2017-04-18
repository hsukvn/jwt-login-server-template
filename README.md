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

3. GET /user (authorization required)
```
http  localhost:3090/user authorization:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1OGY2MmIwMGJiNTM4MTI4YmYwNDIzMGQiLCJpYXQiOjE0OTI1Mjc4NzI2Mjl9.NWQkVRf2GEFbYV9b
sZVPI0aStb8Cga0hPzLE7PJ6LlM
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 153
Content-Type: application/json; charset=utf-8
Date: Tue, 18 Apr 2017 16:35:51 GMT
ETag: W/"99-xauVciJnVfxP1XaLqfZ44fOShic"
X-Powered-By: Express

{
	"user": {
		"__v": 0,
		"_id": "58f62b00bb538128bf04230d",
		"email": "test9@example.com",
		"password": "$2a$10$xCB5qaTPjOQBDnSxNTQJgeCbaDBqQPxGVPHwYXlu6H7UenXFkbPKO"
	}
}
```
*Note: This route is just an example. Normally you will not publish these infomations in API.*

## Add Route Howto
1. Add a controller in `controller/`
2. Add routes in `route.js`


