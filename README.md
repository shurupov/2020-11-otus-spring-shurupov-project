# Spring Framework Developer Course Final Project

Course: [Otus Spring Framework Developer Course](https://otus.ru/lessons/javaspring/)

Student: Evgeny Shurupov

Certificate: (Link will be here)

Project: Joint Purchase Service

Description: Joint Purchase Organization Automation

<details>
  <summary>Start application in production mode</summary>

## Command to init/start
`docker-compose up -d`

## Command to stop
`docker-compose down`

</details>

<details>
  <summary>Start application in development mode</summary>

## Command to build backend (in root folder)
`mvn clean package`

## Command to prepare frontend (in `ui` folder)
`npm install && npm run build`

## Command to init/start database and backend (in root folder)
`docker-compose --file docker-compose-dev.yml up -d`

## Command to stop
`docker-compose down`
  
</details>