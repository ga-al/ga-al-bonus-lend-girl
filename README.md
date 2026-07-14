# Bonus Lend — промо-лендинг Ringobet

Адаптивный промо-лендинг с входной анимацией сцены: каскад появления элементов, движение мячей, дым и CTA. Чистый HTML / CSS / JS без фреймворков.

**Живой демо:** https://ga-al.github.io/ga-al-bonus-lend-girl

## Стек

- HTML5 (семантика, a11y)
- CSS3 (transitions, `@keyframes`, `transform`, media queries)
- Vanilla JavaScript

## Архитектура анимации

JS только ставит класс `is-ready` и управляет модалкой.  
Появление, мячи и дым — в CSS: меньше нагрузка, проще читать код.

## Что сделано

- Входная сцена (logo → сумма → текст → персонажи → дым)
- Мячи на `transform` (desktop / mobile)
- Модалка: dialog, Escape, focus, scroll-lock
- Адаптив desktop → tablet → mobile → landscape
- `prefers-reduced-motion`

## Структура

```
├── index.html
├── css/style.css
├── js/app.js
├── images/
└── fonts/
```

## Запуск

```bash
npx serve .
```
