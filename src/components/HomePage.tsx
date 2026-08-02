import Nav from "@components/navigation/Nav";
import MobileNav from "@components/navigation/MobileNav";
import CommandPalette from "@components/navigation/CommandPalette";
import Footer from "@components/footer/Footer";
import Terminal from "@components/easter-eggs/Terminal";
import KonamiCode from "@components/easter-eggs/KonamiCode";
import StarField from "@components/easter-eggs/StarField";
import AchievementSystem from "@components/easter-eggs/AchievementSystem";
import FadeIn from "@components/animations/FadeIn";

import Hero from "@sections/Hero";
import About from "@sections/About";
import Experience from "@sections/Experience";
import Stack from "@sections/Stack";
import Values from "@sections/Values";
import Currently from "@sections/Currently";
import Contact from "@sections/Contact";
import PageWrapper from "@components/PageWrapper";

interface HomePageProps {
  lang: string;
}

export default function HomePage({ lang }: HomePageProps) {
  return (
    <PageWrapper lang={lang}>
      <Nav lang={lang} />
      <MobileNav lang={lang} />
      <CommandPalette lang={lang} />
      <Terminal lang={lang} />
      <KonamiCode />
      <StarField />
      <AchievementSystem />

      <main id="content" className="min-h-screen">
        <Hero lang={lang} />

        <FadeIn>
          <About lang={lang} />
        </FadeIn>

        <FadeIn>
          <Experience lang={lang} />
        </FadeIn>

        <FadeIn>
          <Stack lang={lang} />
        </FadeIn>

        <FadeIn>
          <Values lang={lang} />
        </FadeIn>

        <FadeIn>
          <Currently lang={lang} />
        </FadeIn>

        <FadeIn>
          <Contact lang={lang} />
        </FadeIn>
      </main>

      <Footer lang={lang} />
    </PageWrapper>
  );
}
