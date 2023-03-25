# query_performance_checker

- Check the query performance

## 🧭 Guid

1. Set connection info to connection-config.json
2. Set the queries to queries.json
3. Run the application

## 🏃‍♂️ Run

### Dev

- npm run start:dev

## 🏛️ Directory Structure

### connection-setter

- Set connection info

### query-setter

- Set query to operate

### query-operator

- Operate the setted query

## 👫 dependencies

#### nodejs

#### mysql

- npm install mysql
- npm install @types/mysql

#### typescript

1. npm install -D ts-node typescript nodemon @types/node
2. tsc --init

#### nodemon

- npm install -D nodemon

#### eslint

1. npm install -D eslint
2. node_modules/.bin/eslint --init
3. npm i -D eslint-plugin-import  
   npm i -D eslint-config-airbnb-base  
   npm i -D eslint-config-prettier  
   npm i -D eslint-plugin-node
4. extends: ["airbnb-base", "plugin:node/recommended", "prettier"]

#### prettier

1. npm install -D prettier
2. Editor setting
