# USER API SPEC

## Register User

Endpoint: POST /api/users

Request Body:

```json
{
  "username": "harundarat",
  "password": "rahasia",
  "name": "Harun Al Rasyid"
}
```

Response Body (Success):

```json
{
  "data": {
    "username": "harundarat",
    "name": "Harun Al Rasyid"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "username already registered!"
}
```

## Login User

Endpoint: POST /api/users/login

Request Body:

```json
{
  "username": "harundarat",
  "password": "rahasia"
}
```

Response Body (Success):

```json
{
  "data": {
    "username": "harundarat",
    "name": "Harun Al Rasyid",
    "token": "session id generated"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "username or password is wrong!"
}
```

## Get User

Endpoint: GET /api/users/current

Headers:

- authorization: token

Response Body (Success):

```json
{
  "data": {
    "username": "harundarat",
    "name": "Harun Al Rasyid"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "unauthorized!"
}
```

## Update User

Endpoint: PATCH /api/users/current

Headers:

- Authorization: token

Request Body:

```json
{
  "password": "rahasia", // optional
  "name": "Harun Al Rasyid" // optional
}
```

Response Body (Success):

```json
{
  "data": {
    "username": "harundarat",
    "name": "Harun Al Rasyid"
  }
}
```

## Logout User

Endpoint: DELETE /api/users/current

Headers:

- Authorization: token

Response Body (Success):

```json
{
  "data": true
}
```
