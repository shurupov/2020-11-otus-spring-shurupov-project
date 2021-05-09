# Spring Framework Developer Course Final Project

Course: [Otus Spring Framework Developer Course](https://otus.ru/lessons/javaspring/)

Student: Evgeny Shurupov

Certificate: (Link will be here)

Project: Joint Purchase Service

Description: Joint Purchase Organization Automation

<details>
  <summary>Start application in development mode</summary>
  
## Command to init postgres container image and start it (You need to have docker installed)
`docker run -d --name jppostgres -p 5432:5432 -e POSTGRES_PASSWORD=springpassword -e POSTGRES_USER=springuser -e POSTGRES_DB=jpurchase postgres:13.2`

## Command to stop postgres container
`docker stop jppostgres`

## Command to start postgres (You need to have postgres container initialized)
`docker start jppostgres`

## Command to remove postgres container image
`docker rm postgres`

## Command to build the core backend application
`mvn clean spring-boot:run`
  
</details>