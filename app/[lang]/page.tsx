import type { Metadata } from "next";
import { siteConfig } from "@config/site";
import { t, locales } from "@i18n";
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
  const title = t(lang as any, "site.title");
  const description = t(lang as any, "site.description");
  const locale = t(lang as any, "site.locale");

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
      canonical: `${siteConfig.url}/${lang}/`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${siteConfig.url}/${l}/`])
      ),
    },
  };
}

export default async function LangPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
      </head>
      <HomePage lang={lang} />
    </>
  );
}
