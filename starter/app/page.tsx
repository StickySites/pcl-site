import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getPageContent } from "@/lib/content";

export default async function HomePage() {
  const page = await getPageContent("home");
  const contentSource = (process.env.CONTENT_SOURCE || "local").toLowerCase();

  return (
    <main className="container py-12 md:py-16">
      <div className="mx-auto max-w-2xl space-y-4 text-center">
        <p className="text-sm font-medium text-muted-foreground">Figma-first starter ({contentSource} mode)</p>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{page.title}</h1>
        <p className="text-muted-foreground">
          Content is loaded via <code className="rounded bg-muted px-1.5 py-0.5 text-xs">CONTENT_SOURCE</code>. Default
          is local. If sanity is selected but config/data is invalid, the app logs a warning and falls back to local
          content.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button asChild>
            <Link href="/studio">Open Sanity Studio</Link>
          </Button>
          <Button variant="secondary" asChild>
            <a href="https://www.sanity.io/docs" target="_blank" rel="noreferrer">
              Sanity docs
            </a>
          </Button>
        </div>
      </div>

      <section className="mx-auto mt-14 max-w-3xl space-y-4">
        <h2 className="text-lg font-semibold">Page sections</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {page.sections.map((section) => (
            <li key={section._key}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">{section.heading || section.key}</CardTitle>
                  <CardDescription className="font-mono text-xs">key: {section.key}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  {section.intro ? <p>{section.intro}</p> : null}
                  {section.body ? <p className="line-clamp-3">{section.body}</p> : null}
                  {section.cta?.href ? <p className="text-xs">CTA: {section.cta.label || section.cta.href}</p> : null}
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
