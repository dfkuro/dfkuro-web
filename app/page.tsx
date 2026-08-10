import type { Metadata } from "next";
import { siteConfig } from "@config/site";
import { t, locales } from "@i18n";
import HomePage from "@components/HomePage";

const lang = "en";
const title = t(lang, "site.title");
const description = t(lang, "site.description");
const locale = t(lang, "site.locale");

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.svg?v=3",
    shortcut: "/favicon.svg?v=3",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title,
    description,
    locale,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: `${siteConfig.url}/${lang}/`,
    languages: Object.fromEntries(
      locales.map((l) => [l, `${siteConfig.url}/${l}/`])
    ),
  },
};

export default function RootPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: siteConfig.name,
            alternateName: siteConfig.alias,
            jobTitle: "Senior Full-Stack Software Engineer",
            url: siteConfig.url,
            email: siteConfig.email,
            sameAs: ["https://github.com/dfkuro"],
          }),
        }}
      />
      <HomePage lang={lang} />
    </>
  );
}
