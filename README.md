yarn add @nestjs/core @nestjs/common rxjs reflect-metadata @nestjs/config

yarn add prisma -D
yarn add @prisma/client

yarn add class-validator class-transformer


chmod +x .docker/entrypoint.sh

rm -rf node_modules
docker-compose up

```
se der erro de docker endpoint for "default" not found no "docker-compose up"
excluir o meta.json no diretorio "%USER_PROFILE%\.docker\contexts\meta\{random characters}\meta.json"
ou a propria .docker
```

docker-compose down

docker-compose up -d
docker-compose exec app bash
npm install prisma -D

npx prisma init

prisma db pull -> para criar o schema de um banco de dados já pronto na aplicação
prisma generate -> executar em cada alteração nos schema do prisma

npx prisma migrate dev --name init
npx prisma generate


npx prima studio -> para acessar o cliente do banco de dados

nest g res posts
