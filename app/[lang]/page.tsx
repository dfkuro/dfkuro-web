import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@config/site";
import { t, locales, type Locale } from "@i18n";
import HomePage from "@components/HomePage";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const localeCode = getLocale(lang);
  const title = t(localeCode, "site.title");
  const description = t(localeCode, "site.description");
  const locale = t(localeCode, "site.locale");

  return {
    title,
    description,
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
      canonical: `${siteConfig.url}/${localeCode}/`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${siteConfig.url}/${l}/`])
      ),
    },
  };
}

export default async function LangPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = getLocale(lang);
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
      <HomePage lang={locale} />
    </>
  );
}

function getLocale(lang: string): Locale {
  if (locales.includes(lang as Locale)) {
    return lang as Locale;
  }

  notFound();
}
