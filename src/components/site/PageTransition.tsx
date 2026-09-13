import { useEffect, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [key, setKey] = useState(pathname);

  useEffect(() => {
    setKey(pathname);
  }, [pathname]);

  return (
    <div key={key} className="page-enter">
      {children}
    </div>
  );
}
