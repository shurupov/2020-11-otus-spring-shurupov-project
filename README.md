# Spring Framework Developer Course Final Project

Course: [Otus Spring Framework Developer Course](https://otus.ru/lessons/javaspring/)

Student: Evgeny Shurupov

Homeworks of the same course: [2020-11-otus-spring-shurupov](https://github.com/shurupov/2020-11-otus-spring-shurupov)

Certificate: [english](https://otus.ru/certificate/d6030b55f7274d0d9b6be132332e9bb6/en/), [english pdf](https://otus.ru/async/docs.certificate?uid=d6030b55f7274d0d9b6be132332e9bb6&lang=en-us), [russian](https://otus.ru/certificate/d6030b55f7274d0d9b6be132332e9bb6/), [russian pdf](https://otus.ru/async/docs.certificate?uid=d6030b55f7274d0d9b6be132332e9bb6&lang=ru-ru)

Project: Joint Purchase Service

Description: Joint Purchase Organization Automation

[Presentation (in russian)](https://docs.google.com/presentation/d/1C9oSKHsEsWiBH7c4Vl7yk4_P6muZYkbibHyJ4GXSw5o)

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