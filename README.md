# Vite Create React App

  <div align="center" >
      <a href="https://vitejs.dev/"  target="_blank" rel="noreferrer">
          <img  alt="firebase" height="100px" style="padding-right:10px;" src="./assets/vite.svg"/>
      </a>
      <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
          <img  alt="firebase" height="100px" style="padding-right:10px;" src="./assets/react.svg"/>
      </a>
  </div>

## Клонування

Клонування репозиторія

```bash
git clone https://github.com/byht1/vite-create-react-app.git <project_name>
```

Перевірка нових версій залежностей

```bash
npx npm-check-updates
```

Оновлення залежностей

```bash
npx npm-check-updates -u
```

Встановлення залежностей

```bash
npm install
```

## Запуск проекту

Запускає проект в режимі розробки

```bash
npm run dev
```

Билдить проект в папку dist (ESLint не можут иметь предупреждения или ошибки)

```bash
npm run build
```

## Кодогенератор

```bash
npm run component AppBar
```

Эта команда создаст папку с именем вашего компонента в каталоге (по умолчанию src/components) и
соответствующие файлы (по умолчанию index.ts, _.styled.ts, _.tsx).

#### Пример структуры файлов компонентов:

```
|-- /src
    |-- /components
        |-- /AppBar
            |-- AppBar.tsx
            |-- AppBar.styled.ts
            |-- index.ts
```

```bash
npm run page HomePage
```

Эта команда создаст папку с именем вашего компонента в каталоге (по умолчанию src/pages) и
соответствующие файлы (по умолчанию index.ts, _.lazy.ts, _.tsx).

#### Пример структуры файлов компонентов:

```
|-- /src
    |-- /pages
        |-- /HomePage
            |-- HomePage.tsx
            |-- HomePage.lazy.ts
            |-- index.ts
```

При необходимосте вы сожите сменить дефолтные настроки кодогенератора в файле
`generate-react-cli.json`. А команди на активацыю в файле `package.json`

## Деплой

Для настройки деплоя проекта необходимо выполнить несколько дополнительных шагов по настройке твоего
репозитория. Зайди во вкладку `Settings` и в подсекции `Actions` выбери выбери пункт `General`.

![GitHub actions settings](./assets/actions-config-step-1.png)

Пролистай страницу до последней секции, в которой выбери опции как на следующем изображении и нажми
`Save`. Без этих настроек у сборки будет недостаточно прав для автоматизации процесса деплоя.

![GitHub actions settings](./assets/actions-config-step-2.png)

Продакшн версия проекта будет автоматически проходить линтинг, собираться и деплоиться на GitHub
Pages, в ветку `gh-pages`, каждый раз когда обновляется ветка `main`. Например, после прямого пуша
или принятого пул-реквеста. Для этого необходимо в файле `package.json` отредактировать поле
`homepage`, заменив `your_username` и `your_repo_name` на свои, и отправить изменения на GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/"
```

Далее необходимо зайти в настройки GitHub-репозитория (`Settings` > `Pages`) и выставить раздачу
продакшн версии файлов из папки `/root` ветки `gh-pages`, если это небыло сделано автоматически.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплоя

Статус деплоя крайнего коммита отображается иконкой возле его идентификатора.

- **Желтый цвет** - выполняется сборка и деплой проекта.
- **Зеленый цвет** - деплой завершился успешно.
- **Красный цвет** - во время линтинга, сборки или деплоя произошла ошибка.

Более детальную информацию о статусе можно посмотреть кликнув по иконке, и в выпадающем окне перейти
по ссылке `Details`.

![Deployment status](./assets/status.png)

### Живая страница

Через какое-то время, обычно пару минут, живую страницу можно будет посмотреть по адресу указанному
в отредактированном свойстве `homepage`.

Если открывается пустая страница, убедись что во вкладке `Console` нет ошибок связанных с
неправильными путями к CSS и JS файлам проекта (**404**). Скорее всего у тебя неправильное значение
свойства `homepage` в файле `package.json`.

### Маршрутизация

Если приложение использует библиотеку `react-router-dom` для маршрутизации, необходимо дополнительно
настроить компонент `<BrowserRouter>`, передав в пропе `basename` точное название твоего
репозитория. Слеши в начале и конце строки обязательны.

```jsx
<BrowserRouter basename="/your_repo_name">
  <App />
</BrowserRouter>
```

В файл `vite.config.ts`

```ts
export default defineConfig({
  ... ,
  base: "/your_repo_name",
})
```

## Как это работает

![How it works](./assets/how-it-works.png)

1. После каждого пуша в ветку `main` GitHub-репозитория, запускается специальный скрипт (GitHub
   Action) из файла `.github/workflows/deploy.yml`.
2. Все файлы репозитория копируются на сервер, где проект инициализируется и проходит линтинг и
   сборку перед деплоем.
3. Если все шаги прошли успешно, собранная продакшн версия файлов проекта отправляется в ветку
   `gh-pages`. В противном случае, в логе выполнения скрипта будет указано в чем проблема.
