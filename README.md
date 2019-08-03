# webpack

Запуск локального сервера [http://localhost:8000](http://localhost:8000)
```sh
npm start
```

Сборка билда для продакшена
```sh
npm run build
```
Сборка билда в режиме девелопмента
```sh
npm run dev
```

Запуск тестов (еще нереализовано)
```sh
npm run test
```

Проверка ошибок типизации
```sh
npm run flow
```

Проветкап текуших ошибок типизации
```sh
npm run flow:status
```

Install flow library definitions 
```sh
npm run flow:install
```
Update Flow library definitions 
```sh
npm run flow:update flow:coverage
```
Проверка покрытия кода типами
```sh
npm run flow:coverage
```

Автоматическая компиляция изображений при сборке билда
пример : import img from '../../www/content/img/test.jpg';

TODO: Подключить jest & enzyme, после реализации покрыть unit test.
