1. Запуск проекта:
девелопмент: npm run dev
сборка: npm run build + npm run start
Порт http://localhost:3000

2. Рабочая папка - src:
Componets - компоненты
Pages - страницы:
    _app.tsx - корень проекта.
    index.tsx - главная страница. На ней есть пример использования store на TypeScript.
    404 - страница ошибки.
    сatalog - каталог.
ВАЖНО! Роутинг Next предполагает, что путь к странице === имя папки, где она находится

Mocks - временные заглушки, заменить на API.
Store - все, что относится к redux store. В папке user - примеры настройки slices на TS.
Styles - стили.
Types - для описания типов TS, в файле user - пример описания типа.

3. Finder
Компоненты: component/_finder
Стили: styles/scss
Основные настройки: _variables.scss

4. Файл constant.ts - временный файл для описания констант (url и т.п.) Затем перенесем всю информацию в .env

5. Добавленные иконки:
    fi-motor-ship - теплоход
    fi-sailboat - яхта
    fi-tent - шатёр
    fi-umbrella - зонт
    fi-castle - замок
    fi-party-popper - хлопушка
    fi-union - вилка и нож
    fi-cake - торт
    
6. http://localhost:3000/addproperty  - ссылка для перехода на страницу addproperty
