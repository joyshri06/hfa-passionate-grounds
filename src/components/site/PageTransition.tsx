import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

export function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    setShown(false);
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <div key={pathname} className="page-transition" data-shown={shown}>
      {children}
    </div>
  );
}
