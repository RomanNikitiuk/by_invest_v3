# Контекст проекту BY INVEST — для продовження чату

## Проект
Next.js 14 App Router + TypeScript + Tailwind CSS  
Репозиторій: GitHub (Roman Nikitiuk)  
Деплой: Vercel  
Папка: `/Users/romannikitiuk/Documents/Projects/by_invest_v3`

---

## Що було зроблено

### 1. Логування кнопок (Vercel Analytics + Google Sheets)

**Як працює:**
- `lib/trackEvent.ts` — основна функція, викликає обидва трекери
- `lib/trackSheet.ts` — відправляє POST на `/api/track`
- `app/api/track/route.ts` — проксі до Google Apps Script
- Google Apps Script `doPost()` — записує рядок у Google Sheets

**Env змінна:** `GAS_SCRIPT_URL` (вже є у Vercel і в `.env.local`)

**Які кнопки мають трекінг:**
- Hero → `cta_click { location: "hero" }`
- Header (desktop + mobile) → `cta_click { location: "header_desktop/mobile" }`
- About → `cta_click { location: "about" }`
- Tariffs (buy/reserve/guarantee) → `tariff_buy/reserve/guarantee_click`
- Cases slider → `cases_slider_click`
- Reviews slider → `reviews_slider_click`
- Program accordion → `program_accordion_click`
- FAQ accordion → `faq_accordion_click`
- CTASection → `cta_click { location: "cta_section" }`
- CTABottom → `cta_click { location: "cta_bottom" }`
- Footer CTA → `cta_click { location: "footer" }`
- Footer соцмережі → `social_click { platform: "telegram/youtube/instagram" }`
- Footer Політика → `legal_click { page: "privacy" }`
- Footer Оферта → `legal_click { page: "offer" }`

**Google Sheets:**
- ANALYTICS_SHEET_ID: `1vDiwMERTbND51aCfCRo_K05usKh5YthbqnW3hPKoojY`
- ANALYTICS_GID: `754404709`

---

## ГОЛОВНА НЕВИРІШЕНА ПРОБЛЕМА

### CTASection, CTABottom, Footer не записуються в Google Sheets

**Що відомо:**
- Перша хвиля кнопок (Hero, Header, About, Tariffs, слайдери, акордеони) — **ПРАЦЮЮТЬ**
- CTASection, CTABottom, Footer — **НЕ ЗАПИСУЮТЬСЯ**
- Код у компонентах ідентичний (обидва мають `"use client"`, однаковий `trackEvent`)
- Commit `9c3214a` з трекінгом CTASection/CTABottom/Footer — **ЗАПУШЕНИЙ** на Vercel

**Знайдена причина (майже точно):**

У production версії `trackEvent.ts` (до непушеного коміту `aa52fae`) немає `try/catch`:

```typescript
// PRODUCTION (ПРОБЛЕМНА ВЕРСІЯ):
export function trackEvent(event, props) {
  track(event, props);      // ← якщо throws error → trackSheet НІКОЛИ не виконується
  trackSheet(event, props); // ← не дійде сюди
}
```

Виправлення є в **непушеному** коміті `aa52fae`:

```typescript
// ВИПРАВЛЕНА ВЕРСІЯ (локально, не запушена):
export function trackEvent(event, props) {
  trackSheet(event, props); // ← спочатку trackSheet (з keepalive)
  try {
    track(event, props);    // ← якщо кидає помилку — не страшно
  } catch {}
}
```

**Що треба зробити:**
1. Запушити коміт `aa52fae` в GitHub (проблема з auth token)
2. Дочекатись деплою Vercel
3. Перевірити чи CTASection/CTABottom/Footer починають записуватись

---

## Git стан

```
aa52fae (HEAD, НЕ ЗАПУШЕНИЙ) fix: call trackSheet before track()  ← ТРЕБА ЗАПУШИТИ
699b99b fix: add keepalive to fetch
9c3214a feat: add tracking to CTASection, CTABottom, Footer
e2773ce docs: update privacy policy and public offer
ff34f0a fix: use GAS_SCRIPT_URL env variable
494e11d feat: add Google Sheets event tracking via Apps Script
...
```

**Проблема з push:** `fatal: could not read Username for 'https://github.com'`  
→ Потрібен GitHub Personal Access Token (Settings → Developer settings → Personal access tokens)  
→ Використати: `git remote set-url origin https://TOKEN@github.com/USER/REPO.git`

---

## Ключові файли

### `lib/trackEvent.ts` (локально — виправлена версія)
```typescript
"use client";
import { track } from "@vercel/analytics";
import { trackSheet } from "./trackSheet";

export function trackEvent(event: string, props?: Record<string, string | number>) {
  trackSheet(event, props); // спочатку
  try {
    track(event, props);
  } catch {}
}
```

### `lib/trackSheet.ts`
```typescript
export async function trackSheet(event: string, props?: Record<string, string | number>) {
  try {
    await fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event, ...props }),
      keepalive: true,
    });
  } catch {}
}
```

### `app/api/track/route.ts`
Проксі до GAS. Форвардить: `event, location, tariff, section, direction, module, question_idx, timestamp`  
⚠️ `platform` (для social_click) не форвардиться — дрібна проблема з даними

### Google Apps Script `doPost`
```javascript
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const ss = SpreadsheetApp.openById("1vDiwMERTbND51aCfCRo_K05usKh5YthbqnW3hPKoojY");
  const sheet = ss.getSheets().find(s => s.getSheetId() === 754404709);
  sheet.appendRow([data.timestamp, data.event, data.location, data.tariff,
    data.section, data.direction, data.module, data.question_idx]);
  return ContentService.createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

---

## Дрібні відомі проблеми

1. **`platform` prop загублений** — `social_click` відправляє `{ platform: "telegram" }`, але API route не форвардить `platform`. Записується тільки event, решта порожньо.
   - Виправлення: додати `platform: body.platform ?? ""` в `app/api/track/route.ts`

2. **4 активних деплоя Google Apps Script** — всі мають одну URL, не проблема

---

## Зміни в Privacy Policy / Public Offer

Оновлені сторінки з новим контентом PDF:
- `app/privacy/page.tsx` — Політика конфіденційності (ФОП Баткалова Юлія Юріївна, ІПН: 3213921163, від 15 травня 2026)
- `app/offer/page.tsx` — Публічна оферта

---

## Наступні кроки

1. **КРИТИЧНО:** Запушити `aa52fae` — потрібен GitHub токен
2. Після деплою Vercel — перевірити CTASection/CTABottom/Footer в Google Sheets
3. (Опційно) Виправити `platform` в `app/api/track/route.ts`
