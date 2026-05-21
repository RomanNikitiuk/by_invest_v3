import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Політика конфіденційності — BY Finance",
  description: "Політика конфіденційності школи BY Finance",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen" style={{ background: "linear-gradient(180deg, #ffffff 0%, #d6ecfc 100%)" }}>
      <div className="border-b border-line bg-white/80 backdrop-blur-md">
        <div className="container-px flex h-[64px] items-center gap-4">
          <Link href="/" className="flex items-center gap-2 font-display text-[17px] font-extrabold text-textDark">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-navy-gradient text-[12px] text-white">BY</span>
            <span className="title-gradient">Finance</span>
          </Link>
          <span className="text-line">/</span>
          <span className="text-[14px] text-muted">Політика конфіденційності</span>
        </div>
      </div>

      <div className="container-px py-16 sm:py-20">
        <div className="mx-auto max-w-[780px]">
          <h1 className="font-display text-[32px] font-extrabold leading-tight tracking-tight text-navyDeep sm:text-[40px]">
            Політика конфіденційності
          </h1>
          <p className="mt-3 text-[14px] text-muted">Дата оновлення: 15 травня 2026 року</p>

          <div className="prose-doc mt-10 space-y-8 text-[15px] leading-relaxed text-text">

            <section>
              <h2>1. Загальні положення</h2>
              <p>1.1. Ця Політика конфіденційності (далі — «Політика») визначає порядок збору, обробки, використання та захисту персональних даних користувачів, які взаємодіють з сайтом <a href="https://byinvest.by-finance.com" className="text-sky2 hover:underline">https://byinvest.by-finance.com</a>, Telegram-ботом «BY Invest навчання», а також іншими сервісами Школи BY Finance.</p>
              <p>1.2. Власником та розпорядником персональних даних є:<br />
              Фізична особа-підприємець Баткалова Юлія Юріївна<br />
              ІПН: 3213921163<br />
              Адреса: Україна, 04112, м. Київ, вул. Сікорського Ігоря Авіаконструктора, буд. 4-Б, кв. 149<br />
              Email: <a href="mailto:by.finance.school@gmail.com" className="text-sky2 hover:underline">by.finance.school@gmail.com</a></p>
              <p>1.3. Політика розроблена відповідно до Закону України «Про захист персональних даних» та положень Цивільного кодексу України.</p>
              <p>1.4. Використовуючи сайт, Telegram-бот, платформи навчання або оплачуючи послуги, Користувач надає згоду на обробку своїх персональних даних.</p>
            </section>

            <section>
              <h2>2. Персональні дані, які ми збираємо</h2>
              <p>2.1. Під час використання сервісів Школи BY Finance ми можемо збирати такі дані:</p>
              <ul>
                <li>ПІБ (повне ім&apos;я)</li>
                <li>номер телефону</li>
                <li>email</li>
                <li>Telegram ID / акаунт</li>
                <li>платіжні дані (обробляються платіжною системою WayForPay)</li>
                <li>IP-адреса</li>
                <li>інформація про пристрій (браузер, ОС)</li>
                <li>cookies та аналітичні дані</li>
                <li>інформація, яку Користувач добровільно надає під час навчання або реєстрації</li>
              </ul>
            </section>

            <section>
              <h2>3. Мета обробки персональних даних</h2>
              <p>3.1. Персональні дані обробляються з метою:</p>
              <ul>
                <li>надання доступу до навчальних матеріалів</li>
                <li>активації Telegram-бота «BY Invest навчання»</li>
                <li>забезпечення технічної підтримки</li>
                <li>обробки платежів та фінансових операцій</li>
                <li>комунікації з Користувачем</li>
                <li>надсилання інформаційних повідомлень</li>
                <li>маркетингових та аналітичних цілей</li>
                <li>виконання вимог законодавства України</li>
              </ul>
            </section>

            <section>
              <h2>4. Використання Cookies</h2>
              <p>Сайт використовує cookies для забезпечення коректної роботи, аналітики та зручності користувача. Ви можете вимкнути cookies у своєму браузері, проте це може обмежити функціональність сайту.</p>
            </section>

            <section>
              <h2>5. Зберігання та захист даних</h2>
              <p>Персональні дані зберігаються протягом строку, необхідного для виконання цілей їх обробки.</p>
              <p>Ми зберігаємо персональні дані на захищених серверах, використовуємо шифрування, SSL-сертифікати та обмежуємо доступ до інформації.</p>
            </section>

            <section>
              <h2>6. Передача даних третім особам</h2>
              <p>Ми не передаємо персональні дані третім особам, окрім випадків:</p>
              <ul>
                <li>залучення платіжних/CRM/аналітичних сервісів (із відповідною конфіденційністю)</li>
                <li>у випадках, передбачених законодавством України</li>
                <li>надання послуг третіми підрядниками (технічна підтримка, email-розсилка)</li>
              </ul>
            </section>

            <section>
              <h2>7. Права користувача</h2>
              <p>Користувач має право:</p>
              <ul>
                <li>знати, які його дані обробляються</li>
                <li>вимагати виправлення або оновлення даних</li>
                <li>вимагати видалення персональних даних</li>
                <li>відкликати згоду на обробку</li>
                <li>обмежити обробку даних</li>
                <li>звернутися до адміністрації Школи за роз&apos;ясненнями</li>
              </ul>
              <p>Запити можна надсилати на: <a href="mailto:by.finance.school@gmail.com" className="text-sky2 hover:underline">by.finance.school@gmail.com</a></p>
            </section>

            <section>
              <h2>8. Використання даних у навчальних системах</h2>
              <p>8.1. Для надання послуг використовується Telegram-бот «BY Invest навчання».</p>
              <p>8.2. Дані можуть використовуватися для:</p>
              <ul>
                <li>створення доступу до навчання</li>
                <li>відстеження прогресу навчання</li>
                <li>технічної підтримки користувача</li>
              </ul>
            </section>

            <section>
              <h2>9. Зберігання даних і строки</h2>
              <p>9.1. Дані зберігаються протягом усього періоду користування послугами та після його завершення у межах, необхідних для:</p>
              <ul>
                <li>бухгалтерського обліку</li>
                <li>податкової звітності</li>
                <li>вирішення спірних ситуацій</li>
              </ul>
            </section>

            <section>
              <h2>10. Зміни до політики</h2>
              <p>10.1. Адміністрація Школи має право змінювати цю Політику в будь-який час.</p>
              <p>10.2. Актуальна версія завжди доступна на сайті: <a href="https://byinvest.by-finance.com" className="text-sky2 hover:underline">https://byinvest.by-finance.com</a></p>
              <p>10.3. Подальше використання сайту означає згоду з оновленою версією Політики.</p>
            </section>

          </div>

          <div className="mt-12">
            <Link href="/" className="inline-flex items-center gap-2 text-[14px] font-medium text-sky2 hover:underline">
              ← Повернутися на головну
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
