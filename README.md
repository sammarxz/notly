# notly
> Note taking web-app with node+express REST API and React on front-end. Created initially as a personal Challenge: Create a MVP product in one week. I opted to use Node, Express and Mongo in Back-end and use ReactJS in front-end. 

![Preview](https://github.com/sammarxz/notly/blob/master/frontend/src/assets/prev.png?raw=true)

### How to use

##### Clone the project
```sh
git clone git@github.com:sammarxz/notly.git
cd notly
```

##### create a .env file in backend with some variables inside
```sh
cd backend
touch .env
```
###### .env
```sh
PORT=3333
MONGO_URL=mongodb://localhost/<dbname>
JWT_TOKEN=yourtoken
```

##### Run Server
```sh
nodemon start
```
##### create a .env file in frontend with this variable inside
```sh
cd frontend
touch .env
```
###### .env
```sh
REACT_APP_BASE_API=http://localhost:3333
```

##### Run Server
```sh
npm start
```

## Routes
To check the routes, open [Insomnia](https://insomnia.rest/) and [import file](https://github.com/sammarxz/notly/blob/master/backend/insomnia.json)
* User
  * **POST** - /users/register
  * **POST** - /users/login
* Notes
  * **POST** - /notes
  * **GET** - /notes
  * **GET** - /notes/<note:id>
  * **PUT** - /notes/<note:id>
  * **DELETE** - /notes/<note:id>
  * **GET** - /notes/search?query=<query>

## Meta

Sam Marxz – [@sammarxz](https://twitter.com/sammarxz) – sammarxz@protonmail.com

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/sammarxz/notly](https://github.com/sammarxz/notly)

## Contributing

1. Fork it (<https://github.com/sammarxz/notly/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## ToDo
* [ ] - Add Oauth
* [ ] - Add Profile Edit
* [ ] - Send email confirmation. Add Forgot Password
* [ ] - Add Google Drive Sync


## Final Toughts
It was an interesting challenge for me because I haven't created and finished something from end to end in a long time. I really liked the challenge, from the beginning to create the Application Layout, create the landing page, make everything responsible, think about the components and create reusable css classes. Anyway it was and is a good learning experience.
