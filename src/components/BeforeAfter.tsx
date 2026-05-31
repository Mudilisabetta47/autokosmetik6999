import { useRef, useState, useCallback, type PointerEvent } from "react";

interface Props {
  before: string;
  after: string;
  alt: string;
}

export function BeforeAfter({ before, after, alt }: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  const onDown = (e: PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    update(e.clientX);
  };
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    update(e.clientX);
  };
  const onUp = () => { dragging.current = false; };

  return (
    <div
      ref={ref}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl select-none touch-none cursor-ew-resize"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <img src={after} alt={`${alt} – nachher`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt={`${alt} – vorher`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }}
          loading="lazy"
        />
      </div>

      <span className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-xs font-bold text-white tracking-wider uppercase">Vorher</span>
      <span className="absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-bold text-primary tracking-wider uppercase" style={{ background: "var(--gradient-accent)" }}>Nachher</span>

      <div className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none" style={{ left: `calc(${pos}% - 2px)`, boxShadow: "0 0 16px oklch(0.82 0.15 210 / 0.8)" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white grid place-items-center shadow-lg">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary">
            <path d="M8 7l-5 5 5 5" />
            <path d="M16 7l5 5-5 5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
