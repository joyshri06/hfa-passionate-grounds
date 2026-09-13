import { useEffect, useRef, useState } from "react";

/**
 * Premium desktop-only cursor: small dot + easing ring.
 * Disabled on touch devices and when prefers-reduced-motion is set.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<"default" | "action" | "view">("default");

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let frame = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      const el = e.target as HTMLElement | null;
      if (el?.closest("img, figure, .cursor-view")) setMode("view");
      else if (el?.closest("a, button, [role='button'], input, select, textarea"))
        setMode("action");
      else setMode("default");
    };

    const tick = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      if (ringRef.current)
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);
    document.body.classList.add("has-custom-cursor");
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden="true">
      <div ref={dotRef} className="hfa-cursor-dot" />
      <div ref={ringRef} className={`hfa-cursor-ring hfa-cursor-${mode}`}>
        <span className="hfa-cursor-label">View</span>
      </div>
    </div>
  );
}
