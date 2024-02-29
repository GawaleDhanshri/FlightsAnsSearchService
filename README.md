# WElcome to Flights and services 

## Project Setup 
- clone this project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- creat a `.env` file in the root directory and add the following environment variables
       - `PORT=3000`
- Inslide the `src/config` folder creat a new file `config.json` and then add the following piece of json 
...
{
  "development": {
    "username": "your_DB_login_name",
    "password": "your_DB_password",
    "database": "Flights_Search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
...