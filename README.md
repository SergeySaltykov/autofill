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
npm run flow:update
```
Проверка покрытия кода типами
```sh
npm run flow:coverage
```
Запуск тестов
```sh
npm run test
```
Проверка покрытия кода тестами
```sh
npm run test:coverage 
```
Запуск тестов в режиме просмотра:
```sh
npm run test:watch 
```

------------------------------------

## API

### Autofill props

| name     | description    | type     | default      |
|----------|----------------|----------|--------------|
|label | Названиеa (метка) поля  | String | 'Search' |
|labelClassName | Добавление дополнительных классов для стилизации Названия поля | String | null |
|inputClassName | Добавление дополнительных классов для стилизации поля | String | null |
|name | Название поля | String | 'search' |
|staticFilter | Массив данных для отображения в списке | Array | [] |
|showLabel | Флаг отображания label'a | Boolean | true |
|retrieveDataAsync | Функция вызова экшенов | func | void |

## Screenshots

<img src="https://download.hdd.tomsk.ru/preview/qkrfzydc.jpg" />

P.S. AutoFill компонент так же поддерживает горячие клавыши "Esc, Enter, Arrow UP, Arrow Down"
При написании кода сторонние библиотеки не использовались, за исключеним  "bem-cn", при переиспользовании компонента на разных проектах, конфликтов быть не должно.
Для наибольшей вероятности избежания совместимости лучше компонент Autofill завернуть в отдельный npm пакет, и подключать его уже самостоятельно.
