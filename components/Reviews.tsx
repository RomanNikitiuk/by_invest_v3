"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  PlayCircle,
  Send,
} from "lucide-react";

/**
 * Дві каруселі поряд:
 * 1) Відгуки з Telegram-каналу — стилізовані картки з реальним текстом
 *    https://t.me/+0-vDu-9dAc9lY2Ey
 * 2) Випуски на ТБ — з YouTube (вбудовано через iframe)
 */

type TgReview = {
  name: string;
  text: string;
};

const TG_REVIEWS: TgReview[] = [
  {
    name: "Наталія Подпльотна",
    text: "Доброго дня! Хочу подякувати всій команді BY invest за цікавий та корисний курс! Куратору Наталії окреме дякую за підтримку та допомогу під час навчання. На мою думку, фінансова грамотність повинна викладатися ще в школі, щоб діти могли з дитинства розпоряджатися коштами, але на жаль в нас не зацікавлені в фінансово грамотних людях. Дуже добре, що є такі люди, які хочуть це змінити. Щиро Вам за це дякую! 🤗",
  },
  {
    name: "Денис Денисов",
    text: "Доброго дня, отримав довгоочікуваний аналіз свого інвестиційного портфелю, трішки підправок, розгорнутих коментарів щодо обраних мною акцій і все супер, дякую куратору Ірині за супровід та чату за допомогу на протязі всього курсу. Також вдячний Юлії та команді за навчання — так все детально і прямо до дрібниць розповісти і показати, стоїть не мало часу та не малих зусиль.",
  },
  {
    name: "Olga Shchetinina",
    text: "Вітаю всіх! Цей курс — просто скарбниця корисних і актуальних знань і практичних інструментів. Дуже вдячна Юлії та всій команді за структурований і доступний матеріал. Рекомендую всім, хто хоче нарешті розібратися з інвестиціями!",
  },
  {
    name: "Галина",
    text: "Всім привіт! Хочу доєднатися до попереднього коментаря. Я вчора також отримала аналіз портфелю з дуже змістовними та розгорнутими коментарями. Я вдячна Юлії за курс, а особливо куратору Наталії — допомагала мені протягом всього курсу і навіть сьогодні. Друзі, я була рада навчатися з вами і бажаю вам кожному легкого досягнення фінансових цілей!",
  },
  {
    name: "Дремлюга Леся",
    text: "Вітаю всіх 😊 Щиро дякую Юлії, куратору Людмилі та команді курсу за цінний досвід, поради, підтримку!!! Вдячна також всім учасникам курсу, які захищають зараз нашу країну 💪💪💪 Вдячна всім учасникам, які спілкувалися в чаті — тим самим у мене відпадало багато питань!!! Енергетика цього чату потужна!!! ✨",
  },
  {
    name: "Петроченко Олександр",
    text: "Вітаю всіх! Курс By invest дійсно якісний та продуктивний, щиро дякую Юлії та команді за отримані знання та цінний матеріал. Особлива подяка моєму куратору Марії за підтримку, турботу, поради, відповіді на всі запитання навіть поза робочий час. Бажаю всім вірити в себе та досягати поставлених цілей, щоб збувалися всі Ваші мрії і мирного неба!!!",
  },
  {
    name: "Nataliya Prokopechko",
    text: "Привіт із Дубліна 😉 Курс пройшов дуже швидко і я отримала багато корисної і цікавої інформації. Дякую моїй кураторці Людмилі за підтримку та відповіді на питання. Великий респект Юлі та команді за якісно поданий матеріал, структуру курсу та контент. Успіху нам всім та втілення наших заповітних мрій ✨",
  },
  {
    name: "Оксана",
    text: "Всім привіт. Отримала свою стратегію з коментарями і сертифікат про успішне навчання. Велике дякую куратору Ірині за підтримку у навчанні та швидкі і зрозумілі відповіді. Велике дякую Юлії і всій команді BY finance. Ви — класна команда, класна подача матеріалу. Тепер інвестиції — це частина мого життя. Бажаю всім успіхів і здійснення своїх мрій 👍❤️",
  },
  {
    name: "Natalia Natalia",
    text: "На Юлію підписалася десь рік тому в інстаграмі — зацікавило те, як вона розповідає про інвестиції доступною мовою. Завдяки Юлії та її курсу багато речей стали зрозумілішими. Підтримка куратора Олександри і чату, робочий зошит, уроки в доступі 6 місяців — все супер! Загалом, я дуже задоволена навчанням і рекомендую всім пройти його у Юлії!!! 🌟",
  },
  {
    name: "Vitalii Martyshchenko",
    text: "Доброго дня. Я дуже радий що все таки наважився і пройшов ваше навчання. Тільки тепер мені стало зрозуміло як працює фінансова біржа, хто такі брокери, і що не так вже і страшно купувати цінні папери якщо є правильно побудована стратегія 👍. Дякую за уроки і матеріали — це досвід на все життя. Тепер поступово інвестую і йду до поставлених цілей 👌",
  },
  {
    name: "Juvik Jul",
    text: "Дуже вдячна Юлі за доступно донесену інформацію — я нарешті усвідомила що це таке фондовий ринок і з чим його їсти, склала збалансований портфель. Вам особисто за те що допомогли побороти прокрастинацію з відкриттям рахунків 🫣 і порадами по портфелю. Я вже більш впевнена в своїх діях ❤️",
  },
];

const YT_VIDEOS = [
  { id: "7lFqg_Cm5gY", title: "Випуск на ТБ — інтервʼю" },
  { id: "ouGRh9rCLKk", title: "Юлія в ефірі" },
  { id: "e7gABf6AQDg", title: "Економіка та інвестиції" },
  { id: "Jl4BS1dRQbw", title: "Фінансова грамотність" },
  { id: "jMD9_kjdqEY", title: "Як починати інвестувати" },
  { id: "X3yN8Zy1q-w", title: "Розмова про інвестиції" },
  { id: "XaMi-dNw9_M", title: "Юлія на ТБ" },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

const AVATAR_COLORS = [
  "#5abfff",
  "#1e6fa8",
  "#3b82a0",
  "#2e7d9e",
  "#4a9eca",
  "#1d7ab5",
  "#3a8dc4",
  "#2563a8",
  "#5098c8",
  "#1a6fa3",
  "#3d8ab5",
];

function Carousel<T>({
  items,
  renderItem,
  ariaLabel,
}: {
  items: T[];
  renderItem: (item: T, idx: number) => React.ReactNode;
  ariaLabel: string;
}) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => Math.max(0, i - 1));
  const next = () => setCurrent((i) => Math.min(items.length - 1, i + 1));

  return (
    <div className="w-full" aria-label={ariaLabel}>
      {/* Slides — show only active */}
      <div className="relative">
        {items.map((item, idx) => (
          <div key={idx} className={idx === current ? "block" : "hidden"}>
            {renderItem(item, idx)}
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-5 flex items-center gap-3">
        <button
          onClick={prev}
          disabled={current === 0}
          aria-label="Попередній"
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white2 text-navyDeep transition-all hover:-translate-y-0.5 hover:border-sky2 hover:shadow-sky disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          <ArrowLeft size={16} />
        </button>
        <button
          onClick={next}
          disabled={current === items.length - 1}
          aria-label="Наступний"
          className="grid h-11 w-11 place-items-center rounded-full border border-sky2 bg-white2 text-navyDeep transition-all hover:-translate-y-0.5 hover:shadow-sky disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          <ArrowRight size={16} />
        </button>
        <span className="text-[13px] text-muted">
          {current + 1} / {items.length}
        </span>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="section overflow-hidden"
      style={{ background: "linear-gradient(180deg, #d6ecfc 0%, #ffffff 100%)" }}
    >
      <div className="container-px">
        <div className="mx-auto max-w-[760px] text-center">
          <span className="eyebrow">Відгуки і телебачення</span>
          <h2 className="h2 mt-[18px]">
            Що говорять{" "}
            <span className="title-gradient">учні та медіа</span>
          </h2>
          <p className="lead mt-4">
            Відгуки наших студентів з Telegram-каналу та ефіри Юлії на українському телебаченні.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* TELEGRAM REVIEWS */}
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <a
                href="https://t.me/+0-vDu-9dAc9lY2Ey"
                target="_blank"
                rel="noreferrer"
                className="eyebrow transition-opacity hover:opacity-75"
              >
                <Send size={14} />
                Відгуки з Telegram
                <ExternalLink size={12} className="opacity-60" />
              </a>
            </div>

            <Carousel
              ariaLabel="Відгуки з Telegram"
              items={TG_REVIEWS}
              renderItem={(r, idx) => (
                <div className="relative min-w-0 overflow-hidden rounded-[22px] border border-line bg-white p-5 sm:p-7">
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-[13px] font-extrabold text-white"
                      style={{ background: AVATAR_COLORS[idx % AVATAR_COLORS.length] }}
                    >
                      {getInitials(r.name)}
                    </div>
                    <span className="font-display text-[15px] font-extrabold text-sky2">
                      {r.name}
                    </span>
                  </div>

                  {/* Message bubble */}
                  <div
                    className="rounded-[18px] rounded-tl-[4px] px-5 py-4"
                    style={{
                      background:
                        "linear-gradient(174deg, #eff6fc 0%, #e4f2fb 100%)",
                      border: "1px solid rgba(90,191,255,0.18)",
                    }}
                  >
                    <p className="text-[14px] leading-relaxed text-textDark sm:text-[15px]">
                      {r.text}
                    </p>
                  </div>
                </div>
              )}
            />
          </div>

          {/* TV / YOUTUBE */}
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <a
                href="https://www.youtube.com/@byfinance"
                target="_blank"
                rel="noreferrer"
                className="eyebrow transition-opacity hover:opacity-75"
              >
                <PlayCircle size={14} />
                Виступи на телебаченні
                <ExternalLink size={12} className="opacity-60" />
              </a>
            </div>

            <Carousel
              ariaLabel="Випуски з YouTube"
              items={YT_VIDEOS}
              renderItem={(v) => (
                <div className="relative min-w-0 overflow-hidden rounded-[22px] border border-line bg-white p-4 sm:p-7">
                  <div className="overflow-hidden rounded-[18px] border border-line">
                    <div className="aspect-video">
                      <iframe
                        className="h-full w-full"
                        src={`https://www.youtube.com/embed/${v.id}`}
                        title={v.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex items-start gap-2.5 px-1">
                    <PlayCircle
                      size={16}
                      className="mt-0.5 shrink-0 text-sky2"
                    />
                    <div className="text-[14px] font-semibold text-textDark">
                      {v.title}
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
