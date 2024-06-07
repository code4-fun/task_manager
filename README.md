## Сборка и запуск

Создать БД Postgres **todos_manager** для пользователя **postgres** с паролем **postgres**

Выполнить команды:

`git clone https://github.com/code4-fun/task_manager.git`

`cd task_manager`

`cp .\.env.example .\.env` для Windows  
`cp ./.env.example ./.env` для Linux

`npm install`

`npm run build`

`npm run migrate`

`npm run seed`

`npm start`

После чего приложение будет доступно на: http://localhost:3001

endpoint-ы в файле **api.http**
