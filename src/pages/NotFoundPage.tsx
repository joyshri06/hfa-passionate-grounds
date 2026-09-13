import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <div className="flex min-h-[75vh] items-center justify-center bg-background px-4 py-24">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-extrabold text-navy">404</h1>
        <h2 className="mt-4 font-display text-2xl font-bold text-foreground">Page Not Found</h2>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          The page you are looking for doesn't exist, has been moved, or the link may be broken.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild variant="flame" size="pill">
            <Link to="/">Go back home</Link>
          </Button>
          <Button asChild variant="outline" size="pill">
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
