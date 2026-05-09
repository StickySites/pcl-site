import type { PageContent } from "./contract";

export const localPages: PageContent[] = [
  {
    _id: "local-home",
    title: "Home",
    slug: "home",
    sections: [
      {
        _key: "hero-local",
        key: "hero",
        heading: "Starter homepage",
        intro: "Local content mode is enabled. Switch CONTENT_SOURCE to sanity when your CMS is ready.",
        cta: {
          label: "Open Studio",
          href: "/studio"
        }
      },
      {
        _key: "intro-local",
        key: "intro",
        heading: "How this template works",
        body: "Pages are composed from ordered sections. Keep generated design components wrapped in sections or primitives."
      }
    ]
  }
];
