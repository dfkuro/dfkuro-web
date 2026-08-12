export type Locale = "en" | "es";

export const defaultLocale: Locale = "en";

export const locales: Locale[] = ["en", "es"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
};

type TranslationKey =
  | "site.title"
  | "site.description"
  | "site.locale"
  | "nav.about"
  | "nav.experience"
  | "nav.stack"
  | "nav.values"
  | "nav.currently"
  | "nav.contact"
  | "hero.headline"
  | "hero.headlineAccent"
  | "hero.subtitle"
  | "hero.subtitleLine2"
  | "hero.meta"
  | "about.label"
  | "about.title"
  | "about.bio"
  | "about.education.label"
  | "about.education.school"
  | "experience.label"
  | "experience.achievements.12years.value"
  | "experience.achievements.12years.label"
  | "experience.achievements.12years.context"
  | "experience.achievements.users.value"
  | "experience.achievements.users.label"
  | "experience.achievements.users.context"
  | "experience.achievements.delivery.value"
  | "experience.achievements.delivery.label"
  | "experience.achievements.delivery.context"
  | "experience.chapter.traxion.date"
  | "experience.chapter.traxion.chapter"
  | "experience.chapter.traxion.role"
  | "experience.chapter.traxion.company"
  | "experience.chapter.traxion.context"
  | "experience.chapter.traxion.problem"
  | "experience.chapter.traxion.solution"
  | "experience.chapter.traxion.impact"
  | "experience.chapter.traxion.tech"
  | "experience.chapter.traxion.result"
  | "experience.chapter.freelance.date"
  | "experience.chapter.freelance.chapter"
  | "experience.chapter.freelance.role"
  | "experience.chapter.freelance.company"
  | "experience.chapter.freelance.context"
  | "experience.chapter.freelance.problem"
  | "experience.chapter.freelance.solution"
  | "experience.chapter.freelance.impact"
  | "experience.chapter.freelance.tech"
  | "experience.chapter.freelance.result"
  | "experience.chapter.saeko.date"
  | "experience.chapter.saeko.chapter"
  | "experience.chapter.saeko.role"
  | "experience.chapter.saeko.company"
  | "experience.chapter.saeko.context"
  | "experience.chapter.saeko.problem"
  | "experience.chapter.saeko.solution"
  | "experience.chapter.saeko.impact"
  | "experience.chapter.saeko.tech"
  | "experience.chapter.saeko.result"
  | "experience.chapter.cotemar.date"
  | "experience.chapter.cotemar.chapter"
  | "experience.chapter.cotemar.role"
  | "experience.chapter.cotemar.company"
  | "experience.chapter.cotemar.context"
  | "experience.chapter.cotemar.problem"
  | "experience.chapter.cotemar.solution"
  | "experience.chapter.cotemar.impact"
   | "experience.chapter.cotemar.tech"
   | "experience.chapter.cotemar.result"
   | "experience.apps.label"
   | "experience.apps.title"
   | "experience.apps.subtitle"
   | "experience.apps.mecanix.description"
   | "experience.apps.saeko.description"
   | "experience.apps.mindone.description"
   | "experience.apps.cotemar.description"
   | "experience.apps.playStore"
   | "experience.apps.appStore"
   | "experience.apps.iosClosed"
   | "stack.label"
  | "stack.title"
  | "stack.subtitle"
  | "stack.domains.frontend.name"
  | "stack.domains.frontend.description"
  | "stack.domains.backend.name"
  | "stack.domains.backend.description"
  | "stack.domains.database.name"
  | "stack.domains.database.description"
  | "stack.domains.devops.name"
  | "stack.domains.devops.description"
  | "stack.domains.mobile.name"
  | "stack.domains.mobile.description"
  | "stack.domains.architecture.name"
  | "stack.domains.architecture.description"
  | "stack.nodes.typescript.years"
  | "stack.nodes.typescript.use"
  | "stack.nodes.typescript.patterns"
  | "stack.nodes.typescript.projects"
  | "stack.nodes.typescript.relations"
  | "stack.nodes.react.years"
  | "stack.nodes.react.use"
  | "stack.nodes.react.patterns"
  | "stack.nodes.react.projects"
  | "stack.nodes.react.relations"
  | "stack.nodes.reactnative.years"
  | "stack.nodes.reactnative.use"
  | "stack.nodes.reactnative.patterns"
  | "stack.nodes.reactnative.projects"
  | "stack.nodes.reactnative.relations"
  | "stack.nodes.nextjs.years"
  | "stack.nodes.nextjs.use"
  | "stack.nodes.nextjs.patterns"
  | "stack.nodes.nextjs.projects"
  | "stack.nodes.nextjs.relations"
  | "stack.nodes.astro.years"
  | "stack.nodes.astro.use"
  | "stack.nodes.astro.patterns"
  | "stack.nodes.astro.projects"
  | "stack.nodes.astro.relations"
  | "stack.nodes.nodejs.years"
  | "stack.nodes.nodejs.use"
  | "stack.nodes.nodejs.patterns"
  | "stack.nodes.nodejs.projects"
  | "stack.nodes.nodejs.relations"
  | "stack.nodes.nestjs.years"
  | "stack.nodes.nestjs.use"
  | "stack.nodes.nestjs.patterns"
  | "stack.nodes.nestjs.projects"
  | "stack.nodes.nestjs.relations"
  | "stack.nodes.fastify.years"
  | "stack.nodes.fastify.use"
  | "stack.nodes.fastify.patterns"
  | "stack.nodes.fastify.projects"
  | "stack.nodes.fastify.relations"
  | "stack.nodes.postgresql.years"
  | "stack.nodes.postgresql.use"
  | "stack.nodes.postgresql.patterns"
  | "stack.nodes.postgresql.projects"
  | "stack.nodes.postgresql.relations"
  | "stack.nodes.mysql.years"
  | "stack.nodes.mysql.use"
  | "stack.nodes.mysql.patterns"
  | "stack.nodes.mysql.projects"
  | "stack.nodes.mysql.relations"
  | "stack.nodes.docker.years"
  | "stack.nodes.docker.use"
  | "stack.nodes.docker.patterns"
  | "stack.nodes.docker.projects"
  | "stack.nodes.docker.relations"
  | "stack.nodes.githubactions.years"
  | "stack.nodes.githubactions.use"
  | "stack.nodes.githubactions.patterns"
  | "stack.nodes.githubactions.projects"
  | "stack.nodes.githubactions.relations"
  | "stack.nodes.linux.years"
  | "stack.nodes.linux.use"
  | "stack.nodes.linux.patterns"
  | "stack.nodes.linux.projects"
  | "stack.nodes.linux.relations"
  | "stack.nodes.expo.years"
  | "stack.nodes.expo.use"
  | "stack.nodes.expo.patterns"
  | "stack.nodes.expo.projects"
  | "stack.nodes.expo.relations"
  | "stack.nodes.electron.years"
  | "stack.nodes.electron.use"
  | "stack.nodes.electron.patterns"
  | "stack.nodes.electron.projects"
  | "stack.nodes.electron.relations"
  | "values.label"
  | "values.clean.quote"
  | "values.clean.body"
  | "values.business.quote"
  | "values.business.body"
  | "values.maintainability.quote"
  | "values.maintainability.body"
  | "values.performance.quote"
  | "values.performance.body"
  | "values.learning.quote"
  | "values.learning.body"
  | "currently.label"
  | "currently.title"
  | "currently.building.label"
  | "currently.building.value"
  | "currently.learning.label"
  | "currently.learning.value"
  | "currently.exploring.label"
  | "currently.exploring.value"
  | "currently.reading.label"
  | "currently.reading.value"
  | "currently.experimenting.label"
  | "currently.experimenting.value"
  | "contact.label"
  | "contact.title"
  | "contact.body"
  | "contact.cta"
  | "contact.copy"
  | "contact.copied"
  | "contact.failed"
  | "footer.copyright"
  | "footer.hint"
  | "terminal.welcome"
  | "terminal.prompt"
  | "palette.placeholder"
  | "palette.esc";

const translations: Record<Locale, Record<TranslationKey, string>> = {
  en: {
    "site.title":
      "Izmir Sánchez (dfkuro) — Senior Full-Stack Software Engineer",
    "site.description":
      "Senior Full-Stack Engineer with 12+ years shipping production software across web, mobile, and backend. React, React Native, TypeScript, Node.js, Clean Architecture.",
    "site.locale": "en_US",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.stack": "Stack",
    "nav.values": "Values",
    "nav.currently": "Currently",
    "nav.contact": "Contact",
    "hero.headline": "Twelve years shipping",
    "hero.headlineAccent": "production software.",
    "hero.subtitle": "I do not write code that lives in slides.",
    "hero.subtitleLine2":
      "I write code that lives in servers to help people and business.",
    "hero.meta": "Senior Full-Stack Software Engineer",
    "about.label": "About my",
    "about.title": "I build software that makes it to production",
    "about.bio":
      "For more than 12 years, I've been turning ideas into real products — from mobile and web applications to APIs and backend systems.\nMy work has shipped to app stores, supported logistics operations, and been used on offshore oil platforms.\nI care about more than making things work today. I build systems that can evolve, APIs that teams can rely on, and code that makes sense to the engineer who has to maintain it tomorrow.",
    "about.education.label": "Education",
    "about.education.school":
      "Computer Systems Engineering — Universidad Politécnica de Tulancingo",
    "experience.label": "Experience",
    "experience.achievements.12years.value": "12+",
    "experience.achievements.12years.label": "Years",
    "experience.achievements.12years.context":
      "Shipping production software across web, mobile, and backend.",
    "experience.achievements.users.value": "500+",
    "experience.achievements.users.label": "Users",
    "experience.achievements.users.context":
      "Offline-first field apps running on oil rigs without connectivity.",
    "experience.achievements.delivery.value": "End-to-End",
    "experience.achievements.delivery.label": "Delivery",
    "experience.achievements.delivery.context":
      "From requirements gathering to production deployment, every time.",
    "experience.chapter.traxion.date": "Nov 2025 — Present",
    "experience.chapter.traxion.chapter": "Chapter IV",
    "experience.chapter.traxion.role": "Senior Full-Stack Developer",
    "experience.chapter.traxion.company": "IT Partners (Traxion)",
    "experience.chapter.traxion.context":
      "One of Mexico's largest logistics operators. Thousands of trucks, hundreds of field crews, zero tolerance for downtime.",
    "experience.chapter.traxion.problem":
      "The tools in use struggled with technologies requiring specialized implementation, making it necessary to use tools that enabled rapid iteration on new features.",
    "experience.chapter.traxion.solution":
      "I was part of the team modernizing tools for operators and coordinators of the Mecanix and Mi Copiloto platforms, for both Android and iOS. I implemented a resource gateway for both applications that helped maintain information consistency across them. I established CI/CD pipelines that deploy to servers without human intervention. I also contributed to developing modules for the web versions.",
    "experience.chapter.traxion.impact":
      "Implementing new modules alongside AI tools became more efficient, and configuring the CI/CD tools allowed these new modules to become available to users in less time.",
    "experience.chapter.traxion.tech":
      "React Native, Fastify, PostgreSQL, Docker, GitHub Actions, Ubuntu, Claude Code, Codex, Opencode, Firebase",
    "experience.chapter.traxion.result":
      "Applications in production. Zero manual deployment. Paper eliminated.",
    "experience.chapter.freelance.date": "Feb 2016 — Present",
    "experience.chapter.freelance.chapter": "Chapter I",
    "experience.chapter.freelance.role": "Freelance Software Engineer",
    "experience.chapter.freelance.company": "Independent",
    "experience.chapter.freelance.context":
      "Clients who need working software, not presentations. Startups, SMEs, and internal tools for teams that outgrew spreadsheets.",
    "experience.chapter.freelance.problem":
      "Most vendors sell roadmaps. Clients needed someone who could own the entire lifecycle — architecture, code, deployment, maintenance — without a team of ten.",
    "experience.chapter.freelance.solution":
      "Operated as a one-person engineering team. Designed full-stack architectures from scratch. Implemented REST APIs consumed by web and mobile clients. Integrated legacy systems like VICIdial into modern CRM workflows. Built CI/CD from day one so shipping was never an event.",
    "experience.chapter.freelance.impact":
      "Every project shipped. Some became the core revenue system of the client. Others replaced processes that had been manual for a decade.",
    "experience.chapter.freelance.tech":
      "React, Node.js, PostgreSQL, REST APIs, CI/CD, Clean Architecture",
    "experience.chapter.freelance.result":
      "Software that still runs years later without rewrites.",
    "experience.chapter.saeko.date": "Aug 2021 — Jun 2024",
    "experience.chapter.saeko.chapter": "Chapter III",
    "experience.chapter.saeko.role": "Mobile / Web Developer",
    "experience.chapter.saeko.company": "Saeko",
    "experience.chapter.saeko.context":
      "An education platform used by schools and parents. The previous team had left the codebase unstable and the ratings were catastrophic.",
    "experience.chapter.saeko.problem":
      "The app had a 2.4-star rating. Push notifications failed. Performance was unacceptable on mid-range Android devices. Users were uninstalling.",
    "experience.chapter.saeko.solution":
      "Rebuilt critical navigation and sync paths. Implemented a reliable push notification pipeline. Stabilized the React Native codebase. Profiled and eliminated frame drops on low-end hardware.",
    "experience.chapter.saeko.impact":
      "App store rating climbed from 2.4 to 4.3. Uninstall rate dropped. Support tickets related to crashes decreased by 80%.",
    "experience.chapter.saeko.tech":
      "React Native, Performance Tuning, Push Notifications, Firebase",
    "experience.chapter.saeko.result":
      "The app still runs today. No rewrite needed.",
    "experience.chapter.cotemar.date": "Jun 2019 — Aug 2021",
    "experience.chapter.cotemar.chapter": "Chapter II",
    "experience.chapter.cotemar.role": "Mobile / Web Developer",
    "experience.chapter.cotemar.company": "Cotemar",
    "experience.chapter.cotemar.context":
      "Offshore oil rigs in the Gulf of Mexico. No Wi-Fi. No 4G. Harsh environments. Safety-critical operations.",
    "experience.chapter.cotemar.problem":
      "Field teams could not access operational data while offshore. Every form, inspection, and safety check had to be done on paper and transcribed later. Errors were frequent and dangerous.",
    "experience.chapter.cotemar.solution":
      "Built offline-first mobile and desktop applications with React Native and Electron. Designed a sync engine that queues work locally and pushes massive datasets when the device returns to connectivity range.",
    "experience.chapter.cotemar.impact":
      "500+ workers accessed critical operational data daily. Inspections became digital. Errors dropped. Sync happened automatically when crews returned to port.",
    "experience.chapter.cotemar.tech":
      "React Native, Electron, Offline-First, Sync Engine, REST APIs",
     "experience.chapter.cotemar.result":
       "Operations continued without connectivity. Data integrity maintained.",
    "experience.apps.label": "Published apps",
    "experience.apps.title": "Software people can install.",
     "experience.apps.subtitle":
       "A selection of production mobile apps I have contributed to, available on Google Play and the App Store.",
    "experience.apps.mecanix.description":
      "Fleet maintenance and vehicle status tracking for Grupo Traxion.",
    "experience.apps.saeko.description":
      "Education community app for students, parents, teachers, and administrators.",
    "experience.apps.mindone.description":
      "Employee app with vehicles, announcements, activities, trips, and service appointments.",
    "experience.apps.cotemar.description":
      "Employee and supplier services, operational information, and offshore safety resources.",
     "experience.apps.playStore": "View on Google Play",
     "experience.apps.appStore": "View on App Store",
     "experience.apps.iosClosed": "iOS app for closed use",
    "stack.label": "Stack",
    "stack.title": "Production-proven stack.",
    "stack.subtitle":
      "Technologies grouped by domain. Bars show years of real production experience. No tutorial projects.",
    "stack.domains.frontend.name": "Frontend",
    "stack.domains.frontend.description":
      "Interfaces that survive poor networks, old devices, and impatient users.",
    "stack.domains.backend.name": "Backend",
    "stack.domains.backend.description":
      "APIs that keep their contracts and handle load without surprises.",
    "stack.domains.database.name": "Database",
    "stack.domains.database.description":
      "Data models that make sense six months later.",
    "stack.domains.devops.name": "DevOps",
    "stack.domains.devops.description":
      "Shipping should be boring, not an event.",
    "stack.domains.mobile.name": "Mobile",
    "stack.domains.mobile.description":
      "Apps that survive real-world conditions — poor signal, old phones, harsh environments.",
    "stack.domains.architecture.name": "Architecture",
    "stack.domains.architecture.description":
      "Decisions that cost less to undo later.",
    "stack.nodes.typescript.years": "4 years",
    "stack.nodes.typescript.use":
      "Default language for every frontend and backend project. Types are documentation that never goes stale.",
    "stack.nodes.typescript.patterns":
      "Strict mode, discriminated unions, branded types, utility types for API contracts.",
    "stack.nodes.typescript.projects":
      "Every project since 2018. Logistics dashboards, education platforms, field apps.",
    "stack.nodes.typescript.relations":
      "Powers React, Node.js, React Native, and Fastify codebases.",
    "stack.nodes.react.years": "8 years",
    "stack.nodes.react.use":
      "Primary UI library for web applications. Hooks, custom abstractions, and performance-aware rendering.",
    "stack.nodes.react.patterns":
      "Compound components, render props when necessary, custom hooks for data fetching, memoization by measurement.",
    "stack.nodes.react.projects":
      "Freelance client portals, internal admin tools, marketing sites.",
    "stack.nodes.react.relations":
      "Pairs with Next.js for SSR/SSG. Consumes APIs built with Node.js and Fastify.",
    "stack.nodes.reactnative.years": "6 years",
    "stack.nodes.reactnative.use":
      "Mobile applications for iOS and Android. Offline-first mindset, performance on low-end devices.",
    "stack.nodes.reactnative.patterns":
      "Hermes-enabled, native module bridging when necessary, animated navigations with Reanimated.",
    "stack.nodes.reactnative.projects":
      "Traxion logistics apps, Saeko education platform, Cotemar field operations.",
    "stack.nodes.reactnative.relations":
      "Shares business logic with web React. Backend powered by Node.js/Fastify.",
    "stack.nodes.nextjs.years": "4 years",
    "stack.nodes.nextjs.use":
      "Production-grade web apps with SSR, ISR, and API routes. Optimal for SEO and performance.",
    "stack.nodes.nextjs.patterns":
      "App Router, server components for data fetching, edge caching strategies.",
    "stack.nodes.nextjs.projects":
      "Client-facing portals, documentation sites, marketing pages.",
    "stack.nodes.nextjs.relations":
      "Sits in front of PostgreSQL and REST APIs. Deployed via Docker and CI/CD.",
    "stack.nodes.astro.years": "2 years",
    "stack.nodes.astro.use":
      "Static sites and content-driven pages with zero JavaScript by default. This portfolio is built with Astro.",
    "stack.nodes.astro.patterns":
      "Islands architecture, partial hydration, content collections for type-safe MDX.",
    "stack.nodes.astro.projects":
      "This portfolio, documentation sites, landing pages.",
    "stack.nodes.astro.relations":
      "Complements React islands. Deployed as static HTML to any CDN.",
    "stack.nodes.nodejs.years": "10 years",
    "stack.nodes.nodejs.use":
      "Runtime for all backend services. Event-driven, non-blocking, proven at scale.",
    "stack.nodes.nodejs.patterns":
      "Cluster mode, worker threads for CPU-heavy tasks, graceful shutdown handling.",
    "stack.nodes.nodejs.projects":
      "Every backend since 2015. APIs, microservices, CLI tooling.",
    "stack.nodes.nodejs.relations":
      "Serves React and React Native clients. Reads from PostgreSQL and MySQL.",
    "stack.nodes.nestjs.years": "4 years",
    "stack.nodes.nestjs.use":
      "Enterprise backends with modular architecture, dependency injection, and typed contracts.",
    "stack.nodes.nestjs.patterns":
      "CQRS when necessary, interceptors for logging, guards for authorization, decorators for validation.",
    "stack.nodes.nestjs.projects":
      "Internal platforms, CMS backends, API gateways for multi-service architectures.",
    "stack.nodes.nestjs.relations":
      "Fronted by React or Next.js. Persisted in PostgreSQL. Containerized with Docker.",
    "stack.nodes.fastify.years": "3 years",
    "stack.nodes.fastify.use":
      "High-performance APIs with low overhead. Ideal for real-time logistics and IoT data ingestion.",
    "stack.nodes.fastify.patterns":
      "Plugin architecture, custom serializers, schema-based validation with JSON Schema.",
    "stack.nodes.fastify.projects":
      "Traxion logistics backend, real-time GPS ingestion, webhook handlers.",
    "stack.nodes.fastify.relations":
      "Consumes PostgreSQL. Serves React Native and web clients.",
    "stack.nodes.postgresql.years": "8 years",
    "stack.nodes.postgresql.use":
      "Primary relational database. ACID compliance, complex queries, and JSONB flexibility.",
    "stack.nodes.postgresql.patterns":
      "Row-level security, partial indexes, CTEs for recursive data, JSONB for semi-structured events.",
    "stack.nodes.postgresql.projects":
      "All enterprise projects. Logistics data, education records, field inspection archives.",
    "stack.nodes.postgresql.relations":
      "Queried by Node.js, Fastify, and NestJS. Backed up via automated CI/CD pipelines.",
    "stack.nodes.mysql.years": "10 years",
    "stack.nodes.mysql.use":
      "Legacy systems and projects where MySQL is the existing standard. Comfortable with both worlds.",
    "stack.nodes.mysql.patterns":
      "Query optimization, replication setup, migration strategies to PostgreSQL when appropriate.",
    "stack.nodes.mysql.projects":
      "Early freelance projects, WordPress integrations, legacy CRM systems.",
    "stack.nodes.mysql.relations":
      "Often coexists with PostgreSQL during migrations. Accessed via Node.js ORMs.",
    "stack.nodes.docker.years": "6 years",
    "stack.nodes.docker.use":
      "Containerized deployment for every production service. Reproducible environments from local to cloud.",
    "stack.nodes.docker.patterns":
      "Multi-stage builds, layer caching, health checks, compose for local stacks.",
    "stack.nodes.docker.projects":
      "All production deployments. Ubuntu servers, CI/CD runners, home lab.",
    "stack.nodes.docker.relations":
      "Builds Node.js and React apps. Orchestrated with GitHub Actions and Ubuntu hosts.",
    "stack.nodes.githubactions.years": "5 years",
    "stack.nodes.githubactions.use":
      "CI/CD pipelines for testing, building, and deploying on every commit.",
    "stack.nodes.githubactions.patterns":
      "Matrix builds, parallel jobs, artifact caching, deployment gates.",
    "stack.nodes.githubactions.projects":
      "Every repository. Automated tests, Docker builds, server deployments.",
    "stack.nodes.githubactions.relations":
      "Triggers Docker builds. Deploys to Ubuntu servers. Runs tests for Node.js and React codebases.",
    "stack.nodes.linux.years": "12 years",
    "stack.nodes.linux.use":
      "Daily driver and production server OS. Debian, Ubuntu, and WSL for development.",
    "stack.nodes.linux.patterns":
      "Systemd services, log rotation, firewall rules, SSH hardening, cron automation.",
    "stack.nodes.linux.projects":
      "All production servers. Personal machines. Home lab infrastructure.",
    "stack.nodes.linux.relations":
      "Hosts Docker containers. Runs Node.js and PostgreSQL. Managed via SSH and GitHub Actions.",
    "stack.nodes.expo.years": "4 years",
    "stack.nodes.expo.use":
      "Rapid mobile development with over-the-air updates. Ideal for iterative product delivery.",
    "stack.nodes.expo.patterns":
      "EAS Build, OTA updates, custom dev clients, expo-router for navigation.",
    "stack.nodes.expo.projects":
      "Saeko updates, freelance mobile prototypes, quick client validations.",
    "stack.nodes.expo.relations":
      "Builds React Native apps. Deployed via EAS. Backend by Node.js APIs.",
    "stack.nodes.electron.years": "3 years",
    "stack.nodes.electron.use":
      "Desktop applications for field supervisors and offline workstations. Cross-platform with web tech.",
    "stack.nodes.electron.patterns":
      "Main-renderer IPC, context isolation, auto-updaters, local SQLite caching.",
    "stack.nodes.electron.projects":
      "Cotemar desktop sync client, internal tooling for logistics managers.",
    "stack.nodes.electron.relations":
      "Shares React UI components with web apps. Syncs with Node.js backend when online.",
    "values.label": "Philosophy",
    "values.clean.quote": "Clean Architecture over clever hacks.",
    "values.clean.body":
      "I have inherited enough quick fixes to know they always outlive their welcome. I separate concerns so the business logic survives framework updates, team changes, and the passage of time. The code I write today should not become the technical debt someone else dreads tomorrow.",
    "values.business.quote": "Software exists to solve business problems.",
    "values.business.body":
      "The best abstraction is the one that maps to how the business actually works. I start with the problem, not the technology. I have seen over-engineered systems that looked elegant on diagrams but failed in production because nobody asked what the user actually needed.",
    "values.maintainability.quote":
      "Maintainability is a competitive advantage.",
    "values.maintainability.body":
      "Fast delivery means nothing if the next feature takes three times longer. I write code with the next engineer in mind — clear naming, consistent patterns, and tests that explain intent. A codebase should get easier to work in over time, not harder.",
    "values.performance.quote": "Performance is not premature optimization.",
    "values.performance.body":
      "When a field worker is waiting for an app to sync on a 3G connection in the middle of nowhere, every millisecond matters. I measure before I optimize, but I never ignore performance as a feature. It is the difference between software people use and software people tolerate.",
    "values.learning.quote": "The tools change. The principles do not.",
    "values.learning.body":
      "I have shipped with jQuery, Angular, Vue, and now React. Frameworks come and go, but the fundamentals — separation of concerns, clear interfaces, testing — stay. I learn new tools when they solve real problems, not because they are trending.",
    "currently.label": "Currently",
    "currently.title": "What I am doing right now.",
     "currently.building.label": "Building",
     "currently.building.value":
       "Development and modernization of internal systems used by call center teams, implementing modern technologies to optimize processes, improve user experience, and simplify daily operations management.",
     "currently.learning.label": "Learning",
     "currently.learning.value":
       "AI, LLMs, and MCP — Exploring and implementing solutions based on artificial intelligence, LLMs, and MCP resources to continuously improve business processes and optimize software development workflows.",
    "currently.exploring.label": "Exploring",
    "currently.exploring.value":
      "Local-first software architecture and CRDTs for offline collaboration.",
    "currently.reading.label": "Reading",
    "currently.reading.value":
      "Designing Data-Intensive Applications by Martin Kleppmann.",
    "currently.experimenting.label": "Experimenting",
    "currently.experimenting.value":
      "Self-hosting services on a home lab with Docker, Proxmox, and Debian.",
    "contact.label": "Contact",
    "contact.title": "Available for select engagements.",
    "contact.body":
      "If you are building something that matters, and you need someone who can own the full stack — architecture, implementation, deployment, and maintenance — send a signal.",
    "contact.cta": "izmirreffi@gmail.com",
    "contact.copy": "Copy",
    "contact.copied": "Copied",
    "contact.failed": "Failed",
    "footer.copyright": 'izmir.dev <span class="footer-alias">(dfkuro)</span>',
    "footer.hint": "Make it work, make it right, make it fast. — Kent Beck",
    "terminal.welcome":
      'Welcome to izmir.dev — type <span class="term-cmd">help</span> to begin.',
    "terminal.prompt": "dfkuro@izmir.dev:~$",
    "palette.placeholder": "Type a command or search...",
    "palette.esc": "ESC",
  },
  es: {
    "site.title": "Izmir Sánchez (dfkuro) — Ingeniero Senior Full-Stack",
    "site.description":
      "Ingeniero Senior Full-Stack con más de 12 años desplegando software en producción: web, móvil y backend. React, React Native, TypeScript, Node.js, Arquitectura Limpia.",
    "site.locale": "es_MX",
    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.stack": "Stack",
    "nav.values": "Valores",
    "nav.currently": "Actualmente",
    "nav.contact": "Contacto",
    "hero.headline": "Doce años desplegando",
    "hero.headlineAccent": "software en producción.",
    "hero.subtitle": "No escribo código para presentaciones.",
    "hero.subtitleLine2":
      "Escribo código que vive en servidores para ayudar a las personas y negocios.",
    "hero.meta": "Ingeniero Senior Full-Stack",
    "about.label": "Sobre mi",
    "about.title": "Me gusta construir cosas que realmente funcionan",
    "about.bio":
      "Durante más de 12 años he estado convirtiendo ideas en software: desde aplicaciones móviles y plataformas web hasta APIs y sistemas que terminan corriendo en producción.\nHe trabajado con software utilizado en logística, plataformas petroleras y app stores. Y con el tiempo aprendí que escribir código es solo una parte del trabajo.\nLo importante es construir sistemas que puedan crecer, que no se rompan con cada cambio y que otro ingeniero pueda entender meses después de que tú los escribiste.",
    "about.education.label": "Educación",
    "about.education.school":
      "Ingeniería en Sistemas Computacionales — Universidad Politécnica de Tulancingo",
    "experience.label": "Experiencia",
    "experience.achievements.12years.value": "12+",
    "experience.achievements.12years.label": "Años",
    "experience.achievements.12years.context":
      "Construyendo software en producción: web, móvil y backend.",
    "experience.achievements.users.value": "500+",
    "experience.achievements.users.label": "Usuarios",
    "experience.achievements.users.context":
      "Apps offline-first en plataformas petroleras sin conectividad.",
    "experience.achievements.delivery.value": "End-to-End",
    "experience.achievements.delivery.label": "Entrega",
    "experience.achievements.delivery.context":
      "Desde levantamiento de requerimientos hasta despliegue en producción.",
    "experience.chapter.traxion.date": "Nov 2025 — Presente",
    "experience.chapter.traxion.chapter": "Capítulo IV",
    "experience.chapter.traxion.role": "Desarrollador Full-Stack Senior",
    "experience.chapter.traxion.company": "IT Partners (Traxion)",
    "experience.chapter.traxion.context":
      "Uno de los operadores logísticos más grandes de México. Miles de camiones, cientos de equipos de campo, cero tolerancia a fallas.",
    "experience.chapter.traxion.problem":
      "Las herramientas usadas tenían dificultades al trabajar con tecnologías que requerían especialización en su implementación, por lo cual era necesario usar aquellas que permitieran una rápida iteración de nuevas funcionalidades.",
    "experience.chapter.traxion.solution":
      "Fui parte del equipo de modernización de herramientas para operadores y coordinadores de la plataforma de Mecanix y Mi copiloto tanto para Android como para iOS. Implementé un gateway de recursos para ambas aplicaciones que sirvió para mantener estabilidad de información con las aplicaciones. Establecí pipelines de CI/CD que despliegan a servidores sin intervención humana. Tambien colabore en el desarrollo de modulos para las versiones web.",
    "experience.chapter.traxion.impact":
      "La implementación de nuevos módulos, en conjunto con herramientas de IA, fue más eficiente, y configurar las herramientas de CI/CD permitió que estos nuevos módulos estuvieran disponibles para los usuarios en menos tiempo.",
    "experience.chapter.traxion.tech":
      "React Native, Fastify, PostgreSQL, Docker, GitHub Actions, Ubuntu, Claude Code, Codex, Opencode, Firebase",
    "experience.chapter.traxion.result":
      "Aplicaciones en producción. Cero despliegue manual. Papel eliminado.",
    "experience.chapter.freelance.date": "Feb 2016 — Presente",
    "experience.chapter.freelance.chapter": "Capítulo I",
    "experience.chapter.freelance.role": "Ingeniero de Software Freelance",
    "experience.chapter.freelance.company": "Independiente",
    "experience.chapter.freelance.context":
      "Clientes que necesitan software funcional, no presentaciones. Startups, PyMEs y herramientas internas para equipos que crecieron más allá de las hojas de cálculo.",
    "experience.chapter.freelance.problem":
      "La mayoría de los proveedores venden hojas de ruta. Los clientes necesitaban alguien que pudiera hacerse cargo de todo el ciclo de vida — arquitectura, código, despliegue, mantenimiento — sin un equipo de diez personas.",
    "experience.chapter.freelance.solution":
      "Operé como un equipo de ingeniería de una sola persona. Diseñé arquitecturas full-stack desde cero. Implementé APIs REST consumidas por clientes web y móviles. Integré sistemas legacy como VICIdial en flujos modernos de CRM. Construí CI/CD desde el día uno para que desplegar nunca fuera un evento.",
    "experience.chapter.freelance.impact":
      "Cada proyecto se entregó. Algunos se convirtieron en el sistema de ingresos principal del cliente. Otros reemplazaron procesos que habían sido manuales por una década.",
    "experience.chapter.freelance.tech":
      "React, Node.js, PostgreSQL, REST APIs, CI/CD, Arquitectura Limpia, Copilot",
    "experience.chapter.freelance.result":
      "Software que sigue funcionando años después sin reescrituras.",
    "experience.chapter.saeko.date": "Ago 2021 — Jun 2024",
    "experience.chapter.saeko.chapter": "Capítulo III",
    "experience.chapter.saeko.role": "Desarrollador Móvil / Web",
    "experience.chapter.saeko.company": "Saeko",
    "experience.chapter.saeko.context":
      "Una plataforma educativa usada por escuelas y padres. El equipo anterior había dejado la base de código inestable y las calificaciones eran catastróficas.",
    "experience.chapter.saeko.problem":
      "La app tenía 2.4 estrellas. Las notificaciones push fallaban. El rendimiento era inaceptable en dispositivos Android de gama media. Los usuarios la desinstalaban.",
    "experience.chapter.saeko.solution":
      "Reconstruí rutas críticas de navegación y sincronización. Implementé un pipeline de notificaciones push confiable. Estabilicé la base de código React Native. Perfilar y eliminar caídas de frames en hardware de gama baja.",
    "experience.chapter.saeko.impact":
      "La calificación subió de 2.4 a 4.3 estrellas. La tasa de desinstalación bajó. Los tickets de soporte relacionados con fallos disminuyeron en un 80%.",
    "experience.chapter.saeko.tech":
      "React Native, Optimización de Rendimiento, Push Notifications, Firebase",
    "experience.chapter.saeko.result":
      "La app sigue funcionando hoy. No necesitó reescritura.",
    "experience.chapter.cotemar.date": "Jun 2019 — Ago 2021",
    "experience.chapter.cotemar.chapter": "Capítulo II",
    "experience.chapter.cotemar.role": "Desarrollador Móvil / Web",
    "experience.chapter.cotemar.company": "Cotemar",
    "experience.chapter.cotemar.context":
      "Plataformas petroleras offshore en el Golfo de México. Sin Wi-Fi. Sin 4G. Ambientes hostiles. Operaciones críticas para la seguridad.",
    "experience.chapter.cotemar.problem":
      "Los equipos de campo no podían acceder a datos operativos mientras estaban offshore. Cada formulario, inspección y verificación de seguridad se hacía en papel y se transcribía después. Los errores eran frecuentes y peligrosos.",
    "experience.chapter.cotemar.solution":
      "Construí aplicaciones móviles y de escritorio offline-first con React Native y Electron. Diseñé un motor de sincronización que encola trabajo localmente y empuja grandes volúmenes de datos cuando el dispositivo regresa a rango de conectividad.",
    "experience.chapter.cotemar.impact":
      "Más de 500 trabajadores accedieron a datos operativos críticos diariamente. Las inspecciones se digitalizaron. Los errores bajaron. La sincronización ocurrió automáticamente cuando las tripulaciones regresaban a puerto.",
    "experience.chapter.cotemar.tech":
      "React Native, Electron, Offline-First, Motor de Sincronización, REST APIs",
     "experience.chapter.cotemar.result":
       "Las operaciones continuaron sin conectividad. La integridad de datos se mantuvo.",
    "experience.apps.label": "Apps publicadas",
    "experience.apps.title": "Software que la gente puede instalar.",
     "experience.apps.subtitle":
       "Una selección de aplicaciones móviles en producción en las que he participado, disponibles en Google Play y App Store.",
    "experience.apps.mecanix.description":
      "Mantenimiento de flota y seguimiento del estado de unidades para Grupo Traxion.",
    "experience.apps.saeko.description":
      "Aplicación educativa para estudiantes, padres, docentes y administradores.",
    "experience.apps.mindone.description":
      "App para colaboradores con vehículos, anuncios, actividades, viajes y citas de servicio.",
    "experience.apps.cotemar.description":
      "Servicios para colaboradores y proveedores, información operativa y recursos de seguridad offshore.",
     "experience.apps.playStore": "Ver en Google Play",
     "experience.apps.appStore": "Ver en App Store",
     "experience.apps.iosClosed": "App de iOS de uso cerrado",
    "stack.label": "Stack",
    "stack.title": "Stack probado en producción.",
    "stack.subtitle":
      "Tecnologías agrupadas por dominio. Las barras muestran años de experiencia real en producción. Sin proyectos de tutorial.",
    "stack.domains.frontend.name": "Frontend",
    "stack.domains.frontend.description":
      "Interfaces que sobreviven mala red, dispositivos viejos y usuarios impacientes.",
    "stack.domains.backend.name": "Backend",
    "stack.domains.backend.description":
      "APIs que mantienen sus contratos y manejan carga sin sorpresas.",
    "stack.domains.database.name": "Base de Datos",
    "stack.domains.database.description":
      "Modelos de datos que tienen sentido seis meses después.",
    "stack.domains.devops.name": "DevOps",
    "stack.domains.devops.description":
      "Desplegar debería ser aburrido, no un evento.",
    "stack.domains.mobile.name": "Móvil",
    "stack.domains.mobile.description":
      "Apps que sobreviven condiciones reales: mala señal, teléfonos viejos, ambientes hostiles.",
    "stack.domains.architecture.name": "Arquitectura",
    "stack.domains.architecture.description":
      "Decisiones que cuestan menos deshacer después.",
    "stack.nodes.typescript.years": "4 años",
    "stack.nodes.typescript.use":
      "Lenguaje por defecto en cada proyecto frontend y backend. Los tipos son documentación que nunca se vence.",
    "stack.nodes.typescript.patterns":
      "Modo estricto, uniones discriminadas, tipos de marca, utility types para contratos de API.",
    "stack.nodes.typescript.projects":
      "Todos los proyectos desde 2018. Dashboards logísticos, plataformas educativas, apps de campo.",
    "stack.nodes.typescript.relations":
      "Impulsa React, Node.js, React Native y Fastify.",
    "stack.nodes.react.years": "8 años",
    "stack.nodes.react.use":
      "Biblioteca principal de UI para aplicaciones web. Hooks, abstracciones personalizadas y renderizado consciente de rendimiento.",
    "stack.nodes.react.patterns":
      "Compound components, render props cuando es necesario, custom hooks para fetching, memoización por medición.",
    "stack.nodes.react.projects":
      "Portales de clientes freelance, herramientas internas de admin, sitios de marketing.",
    "stack.nodes.react.relations":
      "Se empareja con Next.js para SSR/SSG. Consume APIs construidas con Node.js y Fastify.",
    "stack.nodes.reactnative.years": "6 años",
    "stack.nodes.reactnative.use":
      "Aplicaciones móviles para iOS y Android. Mentalidad offline-first, rendimiento en dispositivos de gama baja.",
    "stack.nodes.reactnative.patterns":
      "Hermes habilitado, bridging de módulos nativos cuando es necesario, navegaciones animadas con Reanimated.",
    "stack.nodes.reactnative.projects":
      "Apps logísticas de Traxion, plataforma educativa Saeko, operaciones de campo Cotemar.",
    "stack.nodes.reactnative.relations":
      "Comparte lógica de negocio con React web. Backend impulsado por Node.js/Fastify.",
    "stack.nodes.nextjs.years": "4 años",
    "stack.nodes.nextjs.use":
      "Aplicaciones web de grado producción con SSR, ISR y rutas de API. Óptimo para SEO y rendimiento.",
    "stack.nodes.nextjs.patterns":
      "App Router, server components para fetching, estrategias de caché en edge.",
    "stack.nodes.nextjs.projects":
      "Portales orientados al cliente, sitios de documentación, páginas de marketing.",
    "stack.nodes.nextjs.relations":
      "Se asienta frente a PostgreSQL y REST APIs. Desplegado vía Docker y CI/CD.",
    "stack.nodes.astro.years": "2 años",
    "stack.nodes.astro.use":
      "Sitios estáticos y páginas orientadas a contenido con cero JavaScript por defecto. Este portafolio está construido con Astro.",
    "stack.nodes.astro.patterns":
      "Arquitectura de islas, hidratación parcial, colecciones de contenido para MDX type-safe.",
    "stack.nodes.astro.projects":
      "Este portafolio, sitios de documentación, páginas de aterrizaje.",
    "stack.nodes.astro.relations":
      "Complementa islas de React. Desplegado como HTML estático a cualquier CDN.",
    "stack.nodes.nodejs.years": "10 años",
    "stack.nodes.nodejs.use":
      "Runtime para todos los servicios backend. Orientado a eventos, no bloqueante, probado a escala.",
    "stack.nodes.nodejs.patterns":
      "Modo cluster, worker threads para tareas CPU-intensivas, manejo de apagado graceful.",
    "stack.nodes.nodejs.projects":
      "Todos los backends desde 2015. APIs, microservicios, herramientas CLI.",
    "stack.nodes.nodejs.relations":
      "Sirve a clientes React y React Native. Lee de PostgreSQL y MySQL.",
    "stack.nodes.nestjs.years": "4 años",
    "stack.nodes.nestjs.use":
      "Backends empresariales con arquitectura modular, inyección de dependencias y contratos tipados.",
    "stack.nodes.nestjs.patterns":
      "CQRS cuando es necesario, interceptores para logging, guards para autorización, decorators para validación.",
    "stack.nodes.nestjs.projects":
      "Plataformas internas, backends de CMS, API gateways para arquitecturas multi-servicio.",
    "stack.nodes.nestjs.relations":
      "Fronteado por React o Next.js. Persistido en PostgreSQL. Containerizado con Docker.",
    "stack.nodes.fastify.years": "3 años",
    "stack.nodes.fastify.use":
      "APIs de alto rendimiento con bajo overhead. Ideal para logística en tiempo real e ingestión de datos IoT.",
    "stack.nodes.fastify.patterns":
      "Arquitectura de plugins, serializers personalizados, validación basada en esquema con JSON Schema.",
    "stack.nodes.fastify.projects":
      "Backend logístico de Traxion, ingestión GPS en tiempo real, manejadores de webhooks.",
    "stack.nodes.fastify.relations":
      "Consume PostgreSQL. Sirve a clientes React Native y web.",
    "stack.nodes.postgresql.years": "8 años",
    "stack.nodes.postgresql.use":
      "Base de datos relacional principal. Cumplimiento ACID, consultas complejas y flexibilidad JSONB.",
    "stack.nodes.postgresql.patterns":
      "Seguridad a nivel de fila, índices parciales, CTEs para datos recursivos, JSONB para eventos semi-estructurados.",
    "stack.nodes.postgresql.projects":
      "Todos los proyectos empresariales. Datos logísticos, registros educativos, archivos de inspección de campo.",
    "stack.nodes.postgresql.relations":
      "Consultada por Node.js, Fastify y NestJS. Respaldada vía pipelines automatizadas de CI/CD.",
    "stack.nodes.mysql.years": "10 años",
    "stack.nodes.mysql.use":
      "Sistemas legacy y proyectos donde MySQL es el estándar existente. Cómodo en ambos mundos.",
    "stack.nodes.mysql.patterns":
      "Optimización de consultas, configuración de replicación, estrategias de migración a PostgreSQL cuando es apropiado.",
    "stack.nodes.mysql.projects":
      "Proyectos freelance tempranos, integraciones WordPress, sistemas CRM legacy.",
    "stack.nodes.mysql.relations":
      "A menudo coexiste con PostgreSQL durante migraciones. Accedido vía ORMs de Node.js.",
    "stack.nodes.docker.years": "6 años",
    "stack.nodes.docker.use":
      "Despliegue containerizado para cada servicio en producción. Ambientes reproducibles de local a cloud.",
    "stack.nodes.docker.patterns":
      "Builds multi-etapa, caché de capas, health checks, compose para stacks locales.",
    "stack.nodes.docker.projects":
      "Todos los despliegues en producción. Servidores Ubuntu, runners de CI/CD, home lab.",
    "stack.nodes.docker.relations":
      "Construye apps de Node.js y React. Orquestado con GitHub Actions y hosts Ubuntu.",
    "stack.nodes.githubactions.years": "5 años",
    "stack.nodes.githubactions.use":
      "Pipelines de CI/CD para pruebas, builds y despliegues en cada commit.",
    "stack.nodes.githubactions.patterns":
      "Builds de matriz, jobs paralelos, caché de artefactos, gates de despliegue.",
    "stack.nodes.githubactions.projects":
      "Cada repositorio. Pruebas automatizadas, builds de Docker, despliegues a servidores.",
    "stack.nodes.githubactions.relations":
      "Dispara builds de Docker. Despliega a servidores Ubuntu. Ejecuta pruebas para codebases Node.js y React.",
    "stack.nodes.linux.years": "12 años",
    "stack.nodes.linux.use":
      "Sistema operativo diario y de servidores en producción. Debian, Ubuntu y WSL para desarrollo.",
    "stack.nodes.linux.patterns":
      "Servicios systemd, rotación de logs, reglas de firewall, endurecimiento SSH, automatización con cron.",
    "stack.nodes.linux.projects":
      "Todos los servidores en producción. Máquinas personales. Infraestructura de home lab.",
    "stack.nodes.linux.relations":
      "Hospeda contenedores Docker. Ejecuta Node.js y PostgreSQL. Administrado vía SSH y GitHub Actions.",
    "stack.nodes.expo.years": "4 años",
    "stack.nodes.expo.use":
      "Desarrollo móvil rápido con actualizaciones over-the-air. Ideal para entrega iterativa de producto.",
    "stack.nodes.expo.patterns":
      "EAS Build, OTA updates, clientes de desarrollo personalizados, expo-router para navegación.",
    "stack.nodes.expo.projects":
      "Actualizaciones de Saeko, prototipos móviles freelance, validaciones rápidas de clientes.",
    "stack.nodes.expo.relations":
      "Construye apps de React Native. Desplegado vía EAS. Backend por APIs de Node.js.",
    "stack.nodes.electron.years": "3 años",
    "stack.nodes.electron.use":
      "Aplicaciones de escritorio para supervisores de campo y estaciones de trabajo offline. Multiplataforma con tecnología web.",
    "stack.nodes.electron.patterns":
      "IPC main-renderer, aislamiento de contexto, auto-updaters, caché local con SQLite.",
    "stack.nodes.electron.projects":
      "Cliente de escritorio de sincronización Cotemar, herramientas internas para gerentes logísticos.",
    "stack.nodes.electron.relations":
      "Comparte componentes UI de React con apps web. Sincroniza con backend de Node.js cuando hay conexión.",
    "values.label": "Filosofía",
    "values.clean.quote":
      "Arquitectura Limpia por encima de hacks inteligentes.",
    "values.clean.body":
      "He heredado suficientes parches rápidos para saber que siempre sobreviven más de lo debido. Separo responsabilidades para que la lógica de negocio sobreviva a actualizaciones de framework, cambios de equipo y el paso del tiempo. El código que escribo hoy no debería convertirse en la deuda técnica que alguien más teme mañana.",
    "values.business.quote":
      "El software existe para resolver problemas de negocio.",
    "values.business.body":
      "La mejor abstracción es la que se mapea a cómo funciona realmente el negocio. Empiezo con el problema, no con la tecnología. He visto sistemas sobre-ingenierados que lucían elegantes en diagramas pero fallaban en producción porque nadie preguntó qué necesitaba realmente el usuario.",
    "values.maintainability.quote":
      "La mantenibilidad es una ventaja competitiva.",
    "values.maintainability.body":
      "La entrega rápida no significa nada si la siguiente funcionalidad toma el triple. Escribo código pensando en el siguiente ingeniero — nombres claros, patrones consistentes, y pruebas que explican intención. Una base de código debería volverse más fácil de trabajar con el tiempo, no más difícil.",
    "values.performance.quote": "El rendimiento no es optimización prematura.",
    "values.performance.body":
      "Cuando un trabajador de campo espera que una app se sincronice en una conexión 3G en medio de la nada, cada milisegundo importa. Mido antes de optimizar, pero nunca ignoro el rendimiento como funcionalidad. Es la diferencia entre software que la gente usa y software que la gente tolera.",
    "values.learning.quote": "Las herramientas cambian. Los principios no.",
    "values.learning.body":
      "He desplegado con jQuery, Angular, Vue, y ahora React. Los frameworks van y vienen, pero los fundamentos — separación de responsabilidades, interfaces claras, pruebas — permanecen. Aprendo herramientas nuevas cuando resuelven problemas reales, no porque están de moda.",
    "currently.label": "Actualmente",
    "currently.title": "Qué estoy haciendo ahora.",
     "currently.building.label": "Construyendo",
     "currently.building.value":
       "Desarrollo y modernización de sistemas internos utilizados por equipos de call center, implementando tecnologías modernas para optimizar procesos, mejorar la experiencia de usuario y facilitar la gestión de sus operaciones diarias.",
     "currently.learning.label": "Aprendiendo",
     "currently.learning.value":
       "IA, LLMs y MCP — Exploración e implementación de soluciones basadas en inteligencia artificial, LLMs y recursos MCP para la mejora continua de procesos empresariales y la optimización de flujos de desarrollo de software.",
    "currently.exploring.label": "Explorando",
    "currently.exploring.value":
      "Arquitectura local-first y CRDTs para colaboración offline.",
    "currently.reading.label": "Leyendo",
    "currently.reading.value":
      "Designing Data-Intensive Applications de Martin Kleppmann.",
    "currently.experimenting.label": "Experimentando",
    "currently.experimenting.value":
      "Self-hosting de servicios en un home lab con Docker, Proxmox y Debian.",
    "contact.label": "Contacto",
    "contact.title": "Disponible para proyectos selectos.",
    "contact.body":
      "Si estás construyendo algo que importa, y necesitas a alguien que pueda hacerse cargo del stack completo — arquitectura, implementación, despliegue y mantenimiento — envía una señal.",
    "contact.cta": "izmirreffi@gmail.com",
    "contact.copy": "Copiar",
    "contact.copied": "Copiado",
    "contact.failed": "Error",
    "footer.copyright": 'izmir.dev <span class="footer-alias">(dfkuro)</span>',
    "footer.hint": "Haz que funcione, hazlo bien, hazlo rápido. — Kent Beck",
    "terminal.welcome":
      'Bienvenido a izmir.dev — escribe <span class="term-cmd">help</span> para comenzar.',
    "terminal.prompt": "dfkuro@izmir.dev:~$",
    "palette.placeholder": "Escribe un comando o busca...",
    "palette.esc": "ESC",
  },
};

export function t(locale: Locale, key: TranslationKey): string {
  const localized = translations[locale as keyof typeof translations];
  return localized?.[key] || translations[defaultLocale][key] || key;
}

export type { TranslationKey };
