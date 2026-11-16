"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, Images, X } from "lucide-react";
import { business, gallery } from "@/data/website-content";
import { SplitWords } from "@/components/ui/SplitWords";
import s from "./Gallery.module.scss";

export function Gallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);
  const photos = gallery.photos;
  const total = photos.length;

  const open = (i: number) => setIndex(i);
  const close = useCallback(() => dialog.current?.close(), []);
  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : Math.min(total - 1, Math.max(0, i + dir)))),
    [total],
  );

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (index !== null && !d.open) {
      d.showModal();
      document.documentElement.style.overflow = "hidden";
    }
  }, [index]);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    const onClose = () => {
      setIndex(null);
      document.documentElement.style.overflow = "";
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    d.addEventListener("close", onClose);
    d.addEventListener("keydown", onKey);
    return () => {
      d.removeEventListener("close", onClose);
      d.removeEventListener("keydown", onKey);
    };
  }, [go]);

  const current = index === null ? null : photos[index];

  return (
    <section id="gallery" className={["section", s.section].join(" ")} aria-labelledby="gallery-title">
      <div className={["container", s.grid].join(" ")}>
        <div className={s.side}>
          <span className="eyebrow" data-reveal>
            {business.name}
          </span>
          <h2 id="gallery-title" className="h2" data-reveal="words" aria-label={gallery.heading}>
            <span aria-hidden>
              <SplitWords text={gallery.heading} />
            </span>
          </h2>
          <p className={s.caption} data-reveal style={{ ["--d" as string]: 2 }}>
            {photos[0].caption}
          </p>
          <div data-reveal style={{ ["--d" as string]: 3 }}>
            <button type="button" className={s.viewAll} onClick={() => open(0)} aria-haspopup="dialog">
              <Images aria-hidden /> {gallery.viewAll}
            </button>
          </div>
        </div>

        <div className={s.clip} data-reveal="fade">
          <button type="button" className={s.tile} onClick={() => open(0)} aria-haspopup="dialog" aria-label={"Open " + photos[0].alt}>
            <span className={s.parallax} data-parallax style={{ ["--px" as string]: "22px", ["--ps" as string]: 1.14 }}>
              <Image
                src={photos[0].src}
                alt={photos[0].alt}
                width={photos[0].width}
                height={photos[0].height}
                sizes="(min-width: 1024px) 680px, 100vw"
                quality={85}
              />
            </span>
            <span className={s.tileLabel}>{photos[0].caption}</span>
            <span className={s.zoom} aria-hidden>
              <Expand />
            </span>
          </button>
        </div>
      </div>

      <dialog ref={dialog} className={s.dialog} aria-label={gallery.heading}>
        {current && index !== null && (
          <>
            <div className={s.lbBar}>
              <span>{current.caption}</span>
              <button type="button" className={s.iconBtn} onClick={close} aria-label="Close" autoFocus>
                <X aria-hidden />
              </button>
            </div>
            <div
              className={s.lbStage}
              onClick={(e) => {
                if (e.target === e.currentTarget) close();
              }}
            >
              <Image
                key={current.src}
                className={s.lbImg}
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                sizes="(min-width: 768px) 678px, 100vw"
                quality={90}
              />
            </div>
            <div className={s.lbNav}>
              <button type="button" className={s.iconBtn} onClick={() => go(-1)} disabled={index === 0} aria-label="Previous photo">
                <ChevronLeft aria-hidden />
              </button>
              <span aria-live="polite">
                {index + 1} / {total}
              </span>
              <button type="button" className={s.iconBtn} onClick={() => go(1)} disabled={index === total - 1} aria-label="Next photo">
                <ChevronRight aria-hidden />
              </button>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
