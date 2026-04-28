"use client";

import { useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  PlayCircle,
  Send,
} from "lucide-react";

/**
 * Дві каруселі поряд:
 * 1) Скріни відгуків з Telegram-каналу
 *    https://t.me/+0-vDu-9dAc9lY2Ey
 *    TODO: замінити плейсхолдери на реальні скріни (зображення)
 * 2) Випуски на ТБ — з YouTube (вбудовано через iframe)
 */

const TG_REVIEWS = [
  { id: 1, text: "// TODO: вставити скрін відгуку з Telegram" },
  { id: 2, text: "// TODO: вставити скрін відгуку з Telegram" },
  { id: 3, text: "// TODO: вставити скрін відгуку з Telegram" },
  { id: 4, text: "// TODO: вставити скрін відгуку з Telegram" },
  { id: 5, text: "// TODO: вставити скрін відгуку з Telegram" },
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

function Carousel<T>({
  items,
  renderItem,
  ariaLabel,
}: {
  items: T[];
  renderItem: (item: T, idx: number) => React.ReactNode;
  ariaLabel: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * dir, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={trackRef}
        aria-label={ariaLabel}
        className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="w-full shrink-0 snap-start"
            style={{ flexBasis: "100%" }}
          >
            {renderItem(item, idx)}
          </div>
        ))}
      </div>
      <div className="mt-5 flex gap-2">
        <button
          onClick={() => scrollBy(-1)}
          aria-label="Попередній"
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white2 text-navyDeep transition-all hover:-translate-y-0.5 hover:border-sky2 hover:shadow-sky"
        >
          <ArrowLeft size={16} />
        </button>
        <button
          onClick={() => scrollBy(1)}
          aria-label="Наступний"
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white2 text-navyDeep transition-all hover:-translate-y-0.5 hover:border-sky2 hover:shadow-sky"
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="section section-white">
      <div className="container-px">
        <div className="mx-auto max-w-[760px] text-center">
          <span className="eyebrow">Відгуки і телебачення</span>
          <h2 className="h2 mt-[18px]">
            Що говорять{" "}
            <span className="title-gradient">учні та медіа</span>
          </h2>
          <p className="lead mt-4">
            Зліва — відгуки наших студентів з Telegram-каналу. Праворуч — ефіри
            Юлії на українському телебаченні.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* TELEGRAM REVIEWS */}
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-sky2/15 px-3 py-1.5 text-[12px] font-bold uppercase tracking-[1.5px] text-navyDeep">
                <Send size={14} />
                Відгуки з Telegram
              </span>
              <a
                href="https://t.me/+0-vDu-9dAc9lY2Ey"
                target="_blank"
                rel="noreferrer"
                className="ml-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-navyDeep transition-colors hover:text-sky2"
              >
                Відкрити канал
                <ExternalLink size={13} />
              </a>
            </div>

            <Carousel
              ariaLabel="Скріни відгуків з Telegram"
              items={TG_REVIEWS}
              renderItem={(r) => (
                <div className="card p-4">
                  {/* TODO: замінити на <Image src=".../{screenshot}" .../> */}
                  <div
                    className="grid aspect-[4/5] place-items-center rounded-[18px] border border-line"
                    style={{
                      background:
                        "linear-gradient(174deg, #eff6fc 0%, #d6ecfc 100%)",
                    }}
                  >
                    <div className="flex flex-col items-center gap-3 px-6 text-center">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white2 text-navyDeep shadow-card">
                        <MessageSquare size={26} />
                      </div>
                      <div className="font-display text-[14px] font-extrabold uppercase tracking-[2px] text-navyDeep">
                        Скрін відгуку #{r.id}
                      </div>
                      <div className="text-[12px] text-muted">{r.text}</div>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>

          {/* TV / YOUTUBE */}
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-sky2/15 px-3 py-1.5 text-[12px] font-bold uppercase tracking-[1.5px] text-navyDeep">
                <PlayCircle size={14} />
                Виступи на телебаченні
              </span>
              <span className="ml-auto text-[13px] text-muted">
                {YT_VIDEOS.length} ефірів
              </span>
            </div>

            <Carousel
              ariaLabel="Випуски з YouTube"
              items={YT_VIDEOS}
              renderItem={(v) => (
                <div className="card p-4">
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
