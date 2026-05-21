import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PageNotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="mb-4 text-6xl font-bold text-black">404</h1>
        <h2 className="mb-6 text-3xl font-bold text-black">Page Not Found</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded bg-brand px-8 py-4 font-semibold text-brand-foreground transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          Return Home
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
