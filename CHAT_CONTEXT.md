# Контекст проекту BY INVEST — для продовження чату

## Проект
Next.js 14 App Router + TypeScript + Tailwind CSS  
Репозиторій: GitHub — RomanNikitiuk/by_invest_v3  
Деплой: Vercel  
Папка: `/Users/romannikitiuk/Documents/Projects/by_invest_v3`

---

## Поточний стан (оновлено 22 травня 2026)

### Git
- HEAD: `6a46aab` — chore: update worktree files and add chat context
- Локальна гілка **повністю синхронізована** з origin/main
- Немає uncommitted змін

### Структура ключових файлів
```
app/
  page.tsx              — головна сторінка
  layout.tsx
  globals.css
  diagnostics/page.tsx  — форма для заявок на консультацію
  privacy/page.tsx      — Політика конфіденційності
  offer/page.tsx        — Публічна оферта
  api/
    track/route.ts      — трекінг подій → Google Sheets
    submit/route.ts     — відправка форм → Google Sheets + Telegram

lib/
  trackEvent.ts         — об'єднаний трекер (Vercel Analytics + Google Sheets)
  trackSheet.ts         — fetch до /api/track
```

---

## Система трекінгу

### Як працює
- `lib/trackEvent.ts` → викликає `trackSheet` (спочатку) і `track` Vercel Analytics
- `lib/trackSheet.ts` → POST на `/api/track` з `keepalive: true`
- `app/api/track/route.ts` → проксі до Google Apps Script (GAS)
- GAS `doPost()` → записує рядок у Google Sheets

### Env змінні
- `GAS_SCRIPT_URL` — URL Google Apps Script (є у Vercel і `.env.local`)
- `GAS_SECRET` — секрет для форми заявок
- `TG_BOT_TOKEN` — токен Telegram-бота для заявок
- `TG_CHAT_ID` — chat_id для отримання заявок

### Google Sheets Analytics
- SHEET_ID: `1vDiwMERTbND51aCfCRo_K05usKh5YthbqnW3hPKoojY`
- GID: `754404709`

### Поля в Google Sheets (трекінг)
`timestamp, event, location, tariff, section, direction, module, question_idx, country, city`

> `country` і `city` беруться з Vercel headers (`x-vercel-ip-country`, `x-vercel-ip-city`) — безкоштовно, без зовнішніх API

### Які події трекуються
| Подія | Де |
|---|---|
| `cta_click { location: "hero" }` | Hero |
| `cta_click { location: "header" }` | Header (desktop + mobile) |
| `cta_click { location: "about" }` | About |
| `cta_click { location: "tariffs_guarantee" }` | Tariffs (guarantee) |
| `tariff_buy_click { tariff }` | Tariffs (buy) |
| `tariff_reserve_click { tariff }` | Tariffs (reserve) |
| `slider_click { section: "cases", direction }` | Cases slider |
| `slider_click { section: "reviews", direction }` | Reviews slider |
| `reviews_click { location: "telegram_reviews" / "youtube_tv" }` | Reviews external links |
| `program_accordion_click { module }` | Program accordion |
| `faq_accordion_click { question_idx }` | FAQ accordion |
| `cta_click { location: "cta_section" }` | CTASection |
| `cta_click { location: "cta_bottom" }` | CTABottom |
| `cta_click { location: "footer" }` | Footer CTA |
| `social_click { location: "footer_telegram/youtube/instagram" }` | Footer соцмережі |
| `legal_click { page: "privacy/offer" }` | Footer посилання |
| `form_submit { section: "diagnostics", location: "success/error/validation_error" }` | Форма заявок |
| `hero_learn_more_click` | Hero "Дізнатись більше" |

> Платформа соцмереж закодована в `location` (напр. `"footer_telegram"`), бо `platform` поле не форвардиться через API route.

---

## Форма заявок (`/diagnostics`)

- Поля: ім'я, телефон (код країни + номер), Telegram, місцезнаходження, питання
- Розширений список кодів країн (50+)
- Валідація на фронті + трекінг помилок валідації
- При успішному submit:
  1. Дані записуються в Google Sheets через GAS (GET запит з `secret`)
  2. Повідомлення надсилається в Telegram-бот

---

## Сторінки Privacy / Offer

- `app/privacy/page.tsx` — Політика конфіденційності  
  ФОП Баткалова Юлія Юріївна, ІПН: 3213921163  
  Адреса: Україна, 04112, м. Київ, вул. Сікорського Ігоря Авіаконструктора, буд. 4-Б  
  Дата оновлення: **21 травня 2026 року**

- `app/offer/page.tsx` — Публічна оферта

---

## Технічний борг / відомі нюанси

1. **Старий worktree** — `.claude/worktrees/brave-dirac-8bc117/` залишився від попередньої сесії Claude Code. Закомічений, не впливає на проект.
2. **4 активних деплоя Google Apps Script** — всі мають одну URL, не проблема.

---

## Git — як пушити з терміналу

Пісочниця Claude не може пушити через відсутність auth. Пушити треба з терміналу:

```bash
cd /Users/romannikitiuk/Documents/Projects/by_invest_v3
git push origin main
```

Якщо є lock-файли:
```bash
rm .git/index.lock   # якщо є
rm .git/HEAD.lock    # якщо є
git push origin main
```
