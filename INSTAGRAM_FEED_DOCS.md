# Instagram Feed Component - Документация

## Обзор

Компонент `InstagramFeed.astro` отображает Instagram reels в сетке с кастомным кадрированием и позиционированием. Поддерживает несколько рядов с индивидуальными настройками смещения для каждого ряда.

## Текущие параметры

### Параметры контейнера
- **Высота контейнера**: `630px` (desktop)
- **Высота контейнера**: `400px` (mobile, < 768px)
- **Стили**: border-radius 16px, box-shadow

### Параметры iframe
- **Высота**: `650px`
- **Scale**: `1.42`
- **Вертикальное смещение**: `-30px` (для всех рядов)

### Параметры смещения по горизонтали
- **Ряд 1**: По центру (`50%`, `translateX(-50%)`)
- **Ряд 2**: Сдвиг вправо на `205px` (`calc(50% + 205px)`)
- **Ряд 3**: Сдвиг вправо на `205px` (`calc(50% + 205px)`)

## Структура компонента

### HTML разметка

Каждый ряд представляет собой отдельный grid контейнер:

```html
<!-- Instagram Reels Grid - Row N -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
  <div class="instagram-video-wrapper" data-row="N">
    <blockquote class="instagram-media"
                data-instgrm-permalink="URL"
                data-instgrm-version="14">
    </blockquote>
  </div>
  <!-- ... еще 2 видео -->
</div>
```

**Важно**: Атрибут `data-row="N"` определяет номер ряда для применения индивидуальных настроек.

### JavaScript логика

```javascript
// Получаем номер ряда
const row = wrapper.dataset.row;

// Настройки по умолчанию (Ряд 1)
let topOffset = '-30px';
let leftOffset = '50%';
let transformX = '-50%';

// Индивидуальные настройки для ряда 2
if (row === '2') {
  topOffset = '-30px';
  leftOffset = 'calc(50% + 205px)';
  transformX = 'calc(-50% + 205px)';
}

// Применяем стили к iframe
iframe.style.transform = `translateX(${transformX}) scale(1.42)`;
```

## Алгоритм добавления нового ряда

### Шаг 1: Добавить HTML разметку

Скопируйте существующий ряд и измените:
1. Номер ряда в комментарии: `<!-- Instagram Reels Grid - Row N -->`
2. Значение `data-row="N"` для всех wrapper'ов
3. URL Instagram reels в `data-instgrm-permalink`
4. Добавьте `mb-6` к предыдущему ряду для отступа

```html
<!-- Instagram Reels Grid - Row 4 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="instagram-video-wrapper" data-row="4">
    <blockquote class="instagram-media"
                data-instgrm-permalink="YOUR_REEL_URL"
                data-instgrm-version="14">
    </blockquote>
  </div>
  <!-- ... копируйте для остальных видео -->
</div>
```

### Шаг 2: Добавить настройки в JavaScript

В блоке `<script>` добавьте условие для нового ряда:

```javascript
// Для четвертого ряда
if (row === '4') {
  topOffset = '-30px';
  leftOffset = '50%'; // или calc(50% + NNNpx) для смещения
  transformX = '-50%'; // или calc(-50% + NNNpx) для смещения
}
```

### Шаг 3: Определить смещение

**Паттерн чередования** (текущий):
- Нечетные ряды (1, 3, 5...): По центру (`50%`)
- Четные ряды (2, 4, 6...): Сдвиг вправо (`calc(50% + 205px)`)

Или используйте собственные значения смещения для создания уникального паттерна.

## Настройка параметров

### Изменение вертикального смещения

Если видео обрезается неправильно сверху/снизу:

```javascript
topOffset = '-30px'; // Измените значение (например, '-40px', '-20px')
```

### Изменение горизонтального смещения

Для сдвига ряда влево/вправо:

```javascript
leftOffset = 'calc(50% + 205px)'; // Увеличьте/уменьшите 205px
transformX = 'calc(-50% + 205px)'; // Должно совпадать с leftOffset
```

### Изменение масштаба

В строке с transform:

```javascript
iframe.style.transform = `translateX(${transformX}) scale(1.42)`;
//                                                           ^^^^ измените
```

### Изменение высоты контейнера

В блоке `<style>`:

```css
.instagram-video-wrapper {
  height: 630px; /* Измените это значение */
}
```

## Советы по отладке

1. **Видео не появляются**:
   - Проверьте консоль браузера на ошибки
   - Убедитесь, что Instagram embed.js загружен
   - Перезагрузите страницу с очисткой кэша (Cmd+Shift+R)

2. **Неправильное кадрирование**:
   - Настройте `topOffset` (вертикальное смещение)
   - Настройте `scale` (масштаб)
   - Настройте `height` iframe (650px по умолчанию)

3. **Ряды сдвинуты неправильно**:
   - Проверьте значение `data-row` в HTML
   - Убедитесь, что условие `if (row === 'N')` существует в JavaScript
   - Проверьте значения `leftOffset` и `transformX` - они должны совпадать

4. **Новый ряд не применяет стили**:
   - Убедитесь, что атрибут `data-row` установлен
   - Проверьте, что JavaScript observer работает
   - Откройте DevTools и проверьте inline стили iframe

## Файлы

- **Компонент**: `/src/components/InstagramFeed.astro`
- **Документация**: `/INSTAGRAM_FEED_DOCS.md`

## История изменений

### v1.0 (2025-10-11)
- Создан компонент с поддержкой 3 рядов
- Реализовано чередование: центр / сдвиг вправо / сдвиг вправо
- Параметры: height 630px, scale 1.42, top -30px, shift 205px
- Добавлен MutationObserver для автоматического применения стилей
