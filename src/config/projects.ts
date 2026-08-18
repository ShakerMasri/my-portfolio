import type { ProjectConfig } from "@/types/portfolio";

export const projects = [
  {
    slug: "wasel-palestine",
    title: {
      en: "Wasel Palestine",
      ar: "واصل فلسطين",
    },
    summary: {
      en: "A university team backend for Palestinian mobility intelligence with versioned APIs for checkpoints, incidents, reports, alerts, and route estimation. My verified contribution focused on route-mobility and external routing reliability.",
      ar: "مشروع باك إند جامعي جماعي لذكاء التنقل في فلسطين مع APIs بإصدار محدد لنقاط التفتيش والحوادث والبلاغات والتنبيهات وتقدير المسارات. تركزت مساهمتي الموثقة على منطق المسارات واعتمادية التوجيه الخارجي.",
    },
    highlights: [
      {
        en: "Team project: modular NestJS/TypeScript REST API with PostgreSQL, TypeORM, JWT, validation, and external integrations.",
        ar: "مشروع جماعي: REST API مبني بوحدات NestJS/TypeScript مع PostgreSQL وTypeORM وJWT والتحقق والتكاملات الخارجية.",
      },
      {
        en: "My contribution: route estimation using route modes, nearby checkpoints, verified incidents, and requested avoid-areas.",
        ar: "مساهمتي: تقدير المسار باستخدام أنماط الرحلة ونقاط التفتيش القريبة والحوادث الموثقة والمناطق المطلوب تجنبها.",
      },
      {
        en: "My contribution: OpenRouteService integration with caching, configurable timeouts, environment-based configuration, and local fallback.",
        ar: "مساهمتي: تكامل OpenRouteService مع caching وtimeouts قابلة للإعداد وإعدادات من متغيرات البيئة وبديل محلي عند فشل الخدمة.",
      },
      {
        en: "Team engineering evidence includes Swagger/OpenAPI documentation, automated tests, and k6 performance testing.",
        ar: "يتضمن العمل الهندسي للفريق توثيق Swagger/OpenAPI واختبارات آلية واختبارات أداء باستخدام k6.",
      },
    ],
    tags: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "JWT",
      "Swagger / OpenAPI",
      "Docker",
    ],
    status: "completed",
    featured: true,
    links: {
      source: "https://github.com/ShakerMasri/wasel-palestine",
    },
    caseStudy: {
      eyebrow: {
        en: "Backend case study",
        ar: "دراسة مشروع باك إند",
      },
      title: {
        en: "Route intelligence around changing mobility data and unreliable external dependencies",
        ar: "ذكاء للمسارات يتعامل مع بيانات تنقل متغيرة واعتماديات خارجية قد تفشل",
      },
      summary: {
        en: "Wasel Palestine was a university team project focused on backend engineering. The overall system spans mobility data, authentication, moderation, alerts, external APIs, documentation, and performance testing. My verified contribution centered on route-mobility, external routing/configuration, route-related API documentation, and a registration flow.",
        ar: "واصل فلسطين مشروع جامعي جماعي ركز على هندسة الباك إند. يشمل النظام ككل بيانات التنقل والمصادقة والإشراف والتنبيهات والتكاملات الخارجية والتوثيق واختبارات الأداء. تركزت مساهمتي الموثقة على منطق المسارات والتوجيه الخارجي وإعداداته وتوثيق API المرتبط بالمسارات وتدفق تسجيل المستخدم.",
      },
      meta: [
        {
          label: {
            en: "Project type",
            ar: "نوع المشروع",
          },
          value: {
            en: "University team backend project",
            ar: "مشروع باك إند جامعي جماعي",
          },
        },
        {
          label: {
            en: "Team technologies",
            ar: "تقنيات الفريق",
          },
          value: {
            en: "NestJS, TypeScript, PostgreSQL, TypeORM, JWT, Swagger/OpenAPI, Docker",
            ar: "NestJS وTypeScript وPostgreSQL وTypeORM وJWT وSwagger/OpenAPI وDocker",
          },
        },
        {
          label: {
            en: "My verified contribution",
            ar: "مساهمتي الموثقة",
          },
          value: {
            en: "Route-mobility implementation, OpenRouteService integration/configuration, route API documentation, and user registration flow",
            ar: "تنفيذ منطق المسارات، تكامل وإعداد OpenRouteService، توثيق API للمسارات، وتدفق تسجيل المستخدم",
          },
        },
        {
          label: {
            en: "Course context",
            ar: "سياق المساق",
          },
          value: {
            en: "Advanced Software Engineering · Spring 2026",
            ar: "هندسة البرمجيات المتقدمة · ربيع 2026",
          },
        },
      ],
      sections: [
        {
          title: {
            en: "Problem",
            ar: "المشكلة",
          },
          body: [
            {
              en: "Wasel Palestine was designed as an API-centric mobility platform for structured information about checkpoints, road incidents, crowdsourced reports, alerts, and route conditions. User-interface work was outside the course scope so the team could focus on backend architecture, APIs, data modeling, integrations, reliability, and performance.",
              ar: "صُمم واصل فلسطين كمنصة تنقل تعتمد على الـ API لتقديم معلومات منظمة عن نقاط التفتيش والحوادث والبلاغات المجتمعية والتنبيهات وظروف المسارات. كانت واجهة المستخدم خارج نطاق المساق حتى يركز الفريق على بنية الباك إند والـ APIs ونمذجة البيانات والتكاملات والاعتمادية والأداء.",
            },
          ],
        },
        {
          title: {
            en: "Overall team project",
            ar: "المشروع ككل — عمل الفريق",
          },
          body: [
            {
              en: "The team built a modular NestJS and TypeScript backend with versioned REST endpoints under /api/v1, TypeORM persistence targeting PostgreSQL, JWT-based authentication, DTO validation, external weather/routing integrations, Swagger/OpenAPI documentation, and Docker-based setup.",
              ar: "بنى الفريق باك إند modular باستخدام NestJS وTypeScript مع REST endpoints بإصدار /api/v1، وTypeORM مع PostgreSQL، ومصادقة JWT، والتحقق عبر DTOs، وتكاملات للطقس والتوجيه، وتوثيق Swagger/OpenAPI، وإعداد عبر Docker.",
            },
            {
              en: "Domain work across checkpoints, incidents, crowdsourced reporting/moderation, alerts, and broader testing belongs to the team project as a whole and is not presented here as work I completed alone.",
              ar: "العمل على نقاط التفتيش والحوادث والبلاغات المجتمعية والإشراف والتنبيهات والاختبارات الأوسع هو جزء من عمل الفريق ككل، ولا أعرضه هنا على أنه عمل نفذته وحدي.",
            },
          ],
        },
        {
          title: {
            en: "Decision 1 — keep route intelligence in a computation layer",
            ar: "القرار 1 — إبقاء ذكاء المسار في طبقة حساب مستقلة",
          },
          body: [
            {
              en: "I implemented the route-mobility feature as a computation layer rather than a new persistent route model. It can start from an external route estimate and then apply Wasel-specific factors such as route mode, nearby checkpoints, verified incidents, and requested avoid-areas.",
              ar: "نفذت ميزة route-mobility كطبقة حساب بدلاً من إنشاء نموذج دائم جديد للمسارات. يمكن أن تبدأ من تقدير مسار خارجي ثم تطبق عوامل خاصة بواصل مثل نمط الرحلة ونقاط التفتيش القريبة والحوادث الموثقة والمناطق المطلوب تجنبها.",
            },
            {
              en: "Reasoning: route estimates are derived from current mobility conditions, so calculating them from existing data keeps the feature separate from storage concerns. Trade-off: the local fallback is heuristic and does not claim road-graph-level accuracy.",
              ar: "السبب: تقدير المسار مشتق من ظروف التنقل الحالية، لذلك حسابه من البيانات الموجودة يفصل الميزة عن مخاوف التخزين. المقابل: البديل المحلي heuristic ولا يدعي دقة خريطة طرق كاملة.",
            },
          ],
        },
        {
          title: {
            en: "Decision 2 — isolate external routing and fail gracefully",
            ar: "القرار 2 — عزل خدمة التوجيه الخارجية والتعامل الآمن مع فشلها",
          },
          body: [
            {
              en: "I integrated OpenRouteService behind the external API layer instead of coupling route logic directly to the provider. The integration uses environment-based configuration, cached route responses, configurable timeouts, and a local heuristic fallback when the provider is unavailable or not configured.",
              ar: "دمجت OpenRouteService خلف طبقة الـ external API بدلاً من ربط منطق المسارات مباشرة بالمزوّد. يستخدم التكامل إعدادات من متغيرات البيئة ونتائج routes مخزنة مؤقتاً وtimeouts قابلة للإعداد وبديل heuristic محلي عندما تكون الخدمة غير متاحة أو غير مهيأة.",
            },
            {
              en: "Reasoning: an external routing provider can be slow, unavailable, or quota-limited. The trade-off is reduced precision during fallback, but the route-estimation request can still return a useful result instead of failing completely.",
              ar: "السبب: مزود التوجيه الخارجي قد يكون بطيئاً أو غير متاح أو محدوداً بالحصص. المقابل هو دقة أقل أثناء استخدام البديل، لكن طلب تقدير المسار يستطيع إرجاع نتيجة مفيدة بدلاً من الفشل الكامل.",
            },
          ],
        },
        {
          title: {
            en: "Decision 3 — validate inputs and document the API boundary",
            ar: "القرار 3 — التحقق من المدخلات وتوثيق حدود الـ API",
          },
          body: [
            {
              en: "The route work uses typed DTOs with class-validator constraints for geographic inputs, alongside the project’s global validation pipe. I also contributed Swagger documentation around route-mobility endpoints and DTOs so API expectations are visible in generated documentation.",
              ar: "يستخدم عمل المسارات DTOs typed مع قيود class-validator للمدخلات الجغرافية إلى جانب validation pipe العام للمشروع. كما ساهمت في توثيق Swagger حول endpoints وDTOs المرتبطة بـ route-mobility حتى تكون توقعات الـ API واضحة في التوثيق المولد.",
            },
            {
              en: "Reasoning: rejecting malformed input before business logic runs makes the service easier to reason about and test. Trade-off: DTO and documentation decorators add boilerplate, but keep validation rules and API contracts explicit.",
              ar: "السبب: رفض المدخلات غير الصالحة قبل وصولها إلى منطق العمل يجعل الخدمة أوضح وأسهل للاختبار. المقابل هو بعض الـ boilerplate في DTOs وdecorators، لكنه يبقي قواعد التحقق وعقد الـ API صريحة.",
            },
          ],
        },
        {
          title: {
            en: "Result and limitations",
            ar: "النتيجة والحدود",
          },
          body: [
            {
              en: "The resulting route endpoint can combine an external driving estimate with Wasel-specific mobility factors and explain the factors that affected the result. The repository also contains team-level automated and k6 performance tests, but those are not attributed to me individually.",
              ar: "يمكن لـ endpoint المسارات الناتج دمج تقدير قيادة خارجي مع عوامل التنقل الخاصة بواصل وشرح العوامل التي أثرت في النتيجة. يحتوي المستودع أيضاً على اختبارات آلية واختبارات أداء k6 على مستوى الفريق، لكنني لا أنسبها إلى نفسي بشكل فردي.",
            },
            {
              en: "The route fallback is deliberately heuristic, and the project is presented as university backend engineering evidence rather than as a production navigation service.",
              ar: "البديل الخاص بالمسارات heuristic بشكل مقصود، ويُعرض المشروع كدليل على هندسة باك إند جامعية وليس كخدمة ملاحة جاهزة للإنتاج.",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "clothing-ecommerce-template",
    title: {
      en: "Clothing E-commerce Template",
      ar: "قالب متجر ملابس إلكتروني",
    },
    summary: {
      en: "A full-stack bilingual ecommerce template for small clothing stores, focused on real catalog, cart, checkout, admin, variant stock, and deployment workflows.",
      ar: "قالب متجر ملابس Full-stack ثنائي اللغة للمتاجر الصغيرة، يركز على الكتالوج، السلة، الطلب، لوحة الإدارة، مخزون المقاسات والألوان، وتجهيز النشر.",
    },
    highlights: [
      {
        en: "Variant-based size/color stock for clothing products.",
        ar: "مخزون حسب المقاس واللون لمنتجات الملابس.",
      },
      {
        en: "Server-side product search, category filters, and capped load-more pagination.",
        ar: "بحث وتصنيف وتحميل المزيد للمنتجات من السيرفر مع حدود آمنة.",
      },
      {
        en: "Admin dashboard for products, categories, orders, variants, and inventory.",
        ar: "لوحة إدارة للمنتجات، التصنيفات، الطلبات، المتغيرات، والمخزون.",
      },
      {
        en: "Server-side validation for checkout, pricing, stock, and admin actions.",
        ar: "تحقق على السيرفر لعملية الطلب، الأسعار، المخزون، وإجراءات الإدارة.",
      },
      {
        en: "Arabic/English UI with RTL/LTR support for local-market use.",
        ar: "واجهة عربية/إنجليزية مع دعم RTL/LTR لتناسب السوق المحلي.",
      },
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
      "Zod",
      "Cloudinary",
      "Upstash Redis",
      "Nodemailer",
      "Vitest",
      "Playwright",
      "Render",
    ],
    status: "completed",
    featured: true,
    repository: {
      status: "private",
      label: {
        en: "Private repository",
        ar: "مستودع خاص",
      },
      note: {
        en: "Source code is kept private because this is a reusable client-ready template. Implementation details can be discussed or shared selectively when appropriate.",
        ar: "الكود المصدري محفوظ كمستودع خاص لأن المشروع قالب قابل لإعادة الاستخدام للعملاء. يمكن مناقشة تفاصيل التنفيذ أو مشاركة الوصول بشكل انتقائي عند الحاجة.",
      },
    },
    links: {
      live: {
        href: "https://ecommerce-template-clothing.onrender.com",
        label: {
          en: "Live demo",
          ar: "الديمو المباشر",
        },
        note: {
          en: "Hosted on Render free tier; the first load may take a moment after inactivity.",
          ar: "مستضاف على خطة Render المجانية؛ قد يحتاج التحميل الأول لبعض الوقت بعد فترة عدم استخدام.",
        },
        dataNotice: {
          en: "Demo data only; no real customer data is shown.",
          ar: "بيانات تجريبية فقط؛ لا يتم عرض بيانات عملاء حقيقية.",
        },
      },
    },
    caseStudy: {
      eyebrow: {
        en: "Featured case study",
        ar: "دراسة مشروع مميز",
      },
      title: {
        en: "Building a realistic full-stack ecommerce foundation",
        ar: "بناء أساس متجر إلكتروني Full-stack قريب من الواقع",
      },
      summary: {
        en: "This project started as a learn-by-doing full-stack challenge and grew into a reusable ecommerce template for small clothing stores. It focuses on practical store workflows, bilingual UI, admin management, server-side validation, variant-level stock, and deployment readiness.",
        ar: "بدأ هذا المشروع كتجربة تعلم عملية لبناء مشروع Full-stack، ثم تطور إلى قالب متجر إلكتروني قابل لإعادة الاستخدام لمتاجر الملابس الصغيرة. يركز على تدفقات متجر واقعية، واجهة ثنائية اللغة، لوحة إدارة، تحقق على السيرفر، مخزون حسب المتغيرات، وتجهيز للنشر.",
      },
      media: {
        eyebrow: {
          en: "Project walkthrough",
          ar: "عرض المشروع",
        },
        title: {
          en: "A quick look at the storefront and responsive experience",
          ar: "نظرة سريعة على واجهة المتجر وتجربة الاستخدام المتجاوبة",
        },
        description: {
          en: "These local demo videos show the project using demo data only. The desktop view is the main walkthrough, while the phone view shows how the same store experience adapts to smaller screens.",
          ar: "هذه الفيديوهات المحلية تعرض المشروع باستخدام بيانات تجريبية فقط. عرض سطح المكتب هو المشهد الرئيسي، بينما يوضح عرض الهاتف كيف تتكيف تجربة المتجر نفسها مع الشاشات الصغيرة.",
        },
        desktop: {
          src: "/videos/desktop-view.mp4",
          label: {
            en: "Desktop walkthrough video for the clothing ecommerce template",
            ar: "فيديو استعراض نسخة سطح المكتب لقالب متجر الملابس",
          },
          caption: {
            en: "Desktop view — wider layout for browsing, checkout, and admin workflows.",
            ar: "عرض سطح المكتب — مساحة أوسع لتصفح المنتجات، الطلب، وتدفقات لوحة الإدارة.",
          },
        },
        mobile: {
          src: "/videos/mobile-view.mp4",
          label: {
            en: "Mobile walkthrough video for the clothing ecommerce template",
            ar: "فيديو استعراض نسخة الهاتف لقالب متجر الملابس",
          },
          caption: {
            en: "Mobile view — the same product flow presented in a compact responsive layout.",
            ar: "عرض الهاتف — نفس تدفق المنتجات داخل تصميم متجاوب ومناسب للشاشة الصغيرة.",
          },
        },
        screenshots: {
          title: {
            en: "Product tour screenshots",
            ar: "صور سريعة من المشروع",
          },
          description: {
            en: "A focused gallery showing the main storefront and admin screens. The images use demo content only and are placed after the videos so the page first communicates the experience, then gives recruiters a quick scan of the key flows.",
            ar: "معرض مختصر يوضح أهم شاشات المتجر ولوحة الإدارة. الصور تستخدم محتوى تجريبياً فقط، وتم وضعها بعد الفيديوهات حتى تعرض الصفحة التجربة أولاً ثم تعطي الزائر نظرة سريعة على أهم التدفقات.",
          },
          images: [
            {
              src: "/images/home-dark.webp",
              alt: {
                en: "Dark mode homepage screenshot for the clothing ecommerce template",
                ar: "صورة الصفحة الرئيسية بالوضع الداكن لقالب متجر الملابس",
              },
              caption: {
                en: "Homepage in dark mode with the storefront entry point.",
                ar: "الصفحة الرئيسية بالوضع الداكن كنقطة دخول للمتجر.",
              },
            },
            {
              src: "/images/home-light.webp",
              alt: {
                en: "Light mode homepage screenshot for the clothing ecommerce template",
                ar: "صورة الصفحة الرئيسية بالوضع الفاتح لقالب متجر الملابس",
              },
              caption: {
                en: "Light mode version to show theme consistency.",
                ar: "نسخة الوضع الفاتح لإظهار ثبات التصميم بين الثيمات.",
              },
            },
            {
              src: "/images/products.webp",
              alt: {
                en: "Products listing screenshot for the clothing ecommerce template",
                ar: "صورة صفحة عرض المنتجات لقالب متجر الملابس",
              },
              caption: {
                en: "Product listing with browsing and catalog presentation.",
                ar: "صفحة المنتجات مع عرض الكتالوج وتجربة التصفح.",
              },
            },
            {
              src: "/images/product.webp",
              alt: {
                en: "Product details screenshot for the clothing ecommerce template",
                ar: "صورة صفحة تفاصيل المنتج لقالب متجر الملابس",
              },
              caption: {
                en: "Product details with the customer decision flow.",
                ar: "تفاصيل المنتج ضمن تدفق قرار العميل قبل الإضافة للسلة.",
              },
            },
            {
              src: "/images/cart.webp",
              alt: {
                en: "Shopping cart screenshot for the clothing ecommerce template",
                ar: "صورة سلة الشراء لقالب متجر الملابس",
              },
              caption: {
                en: "Cart screen before checkout.",
                ar: "شاشة السلة قبل إتمام الطلب.",
              },
            },
            {
              src: "/images/admin-products.webp",
              alt: {
                en: "Admin products management screenshot for the clothing ecommerce template",
                ar: "صورة إدارة المنتجات في لوحة التحكم لقالب متجر الملابس",
              },
              caption: {
                en: "Admin product management for maintaining the catalog.",
                ar: "إدارة المنتجات داخل لوحة التحكم لتحديث الكتالوج.",
              },
            },
            {
              src: "/images/admin-orders.webp",
              alt: {
                en: "Admin orders management screenshot for the clothing ecommerce template",
                ar: "صورة إدارة الطلبات في لوحة التحكم لقالب متجر الملابس",
              },
              caption: {
                en: "Admin orders view for reviewing and updating customer orders.",
                ar: "عرض الطلبات في لوحة التحكم لمراجعة وتحديث طلبات العملاء.",
              },
            },
          ],
        },
      },
      meta: [
        {
          label: {
            en: "Project type",
            ar: "نوع المشروع",
          },
          value: {
            en: "Reusable full-stack ecommerce template",
            ar: "قالب متجر إلكتروني Full-stack قابل لإعادة الاستخدام",
          },
        },
        {
          label: {
            en: "My role",
            ar: "دوري",
          },
          value: {
            en: "Frontend, backend, database modeling, admin UI, deployment, testing, and UX polish",
            ar: "الواجهة، الباك إند، نمذجة قاعدة البيانات، لوحة الإدارة، النشر، الاختبار، وتحسين تجربة المستخدم",
          },
        },
        {
          label: {
            en: "Target users",
            ar: "الفئة المستهدفة",
          },
          value: {
            en: "Small clothing stores and bilingual local-market ecommerce clients",
            ar: "متاجر الملابس الصغيرة والعملاء الذين يحتاجون متجراً محلياً ثنائي اللغة",
          },
        },
        {
          label: {
            en: "Status",
            ar: "الحالة",
          },
          value: {
            en: "Demo-ready client-ready template in staging/hardening review, not presented as a live client production store",
            ar: "قالب جاهز للعرض وقريب من جاهزية العملاء، لكنه ما زال في مراجعة وتجهيز staging/hardening وليس معروضاً كمتجر عميل حقيقي قيد الإنتاج",
          },
        },
      ],
      sections: [
        {
          title: {
            en: "Overview",
            ar: "نظرة عامة",
          },
          body: [
            {
              en: "The project is a full-stack ecommerce template built for small clothing stores. It includes a public storefront, product catalog, cart and checkout flow, customer orders, admin management, authentication, image handling, email configuration, bilingual UI, and deployment setup.",
              ar: "المشروع عبارة عن قالب متجر إلكتروني Full-stack موجه لمتاجر الملابس الصغيرة. يحتوي على واجهة متجر عامة، كتالوج منتجات، سلة وطلب، طلبات العملاء، لوحة إدارة، تسجيل دخول، التعامل مع الصور، إعدادات البريد، واجهة ثنائية اللغة، وتجهيز للنشر.",
            },
            {
              en: "The project was maintained as a separate clothing-store template after starting from an existing hardened ecommerce starter. The goal was not to build a large multi-tenant SaaS platform, but a safer reusable starter where each future store can have its own repository, database, environment variables, branding, products, and deployment.",
              ar: "تمت صيانة المشروع كقالب مستقل لمتاجر الملابس بعد انطلاقه من starter متجر إلكتروني موجود ومقوى مسبقاً. الهدف لم يكن بناء منصة SaaS كبيرة متعددة العملاء، بل قالباً آمناً وقابلاً لإعادة الاستخدام بحيث يكون لكل متجر مستقبلي مستودع، قاعدة بيانات، متغيرات بيئة، هوية بصرية، منتجات، ونشر مستقل.",
            },
            {
              en: "It should be described honestly as a demo-ready and client-ready template that is still going through staging verification and production-hardening review before any real client launch.",
              ar: "الأدق وصفه كقالب جاهز للعرض وقريب من جاهزية العملاء، لكنه ما زال يحتاج مراجعة staging وproduction hardening قبل أي إطلاق حقيقي لعميل.",
            },
          ],
        },
        {
          title: {
            en: "Problem",
            ar: "المشكلة",
          },
          body: [
            {
              en: "Small clothing stores need more than a simple product grid. They need practical product management, size and color variants, accurate stock behavior, checkout validation, order records, delivery details, and a clear admin experience.",
              ar: "متاجر الملابس الصغيرة تحتاج أكثر من مجرد عرض منتجات. تحتاج إدارة منتجات عملية، مقاسات وألوان، مخزون دقيق، تحقق عند الطلب، سجلات طلبات، تفاصيل توصيل، وتجربة إدارة واضحة.",
            },
            {
              en: "For Arabic/English stores, the interface also needs natural bilingual wording and RTL/LTR layout support instead of direct translation only. The system also needs to stay safe as the catalog grows, so product browsing should not load and filter every product in the browser.",
              ar: "وللمتاجر العربية/الإنجليزية، الواجهة تحتاج صياغة ثنائية اللغة بشكل طبيعي مع دعم RTL/LTR، وليس ترجمة حرفية فقط. كذلك يجب أن يبقى النظام آمناً مع نمو الكتالوج، لذلك لا يجب تحميل كل المنتجات وتصفيتها داخل المتصفح.",
            },
          ],
        },
        {
          title: {
            en: "Solution",
            ar: "الحل",
          },
          body: [
            {
              en: "I built a reusable clothing ecommerce template with a public storefront, protected customer/admin flows, product and category management, clothing variants, cart and checkout, order snapshots, image uploads, email behavior, and deployment configuration.",
              ar: "بنيت قالب متجر ملابس قابل لإعادة الاستخدام يحتوي على واجهة متجر عامة، تدفقات عميل/أدمن محمية، إدارة منتجات وتصنيفات، متغيرات ملابس، سلة وطلب، snapshots للطلبات، رفع صور، سلوك بريد إلكتروني، وتجهيزات نشر.",
            },
            {
              en: "The storefront uses server-side search, category filtering, and capped load-more pagination. Customer support is helped by a configurable WhatsApp shortcut, but orders still go through the website checkout so validation, stock reservation, and order snapshots are not bypassed.",
              ar: "واجهة المنتجات تستخدم البحث والتصنيف وLoad more من السيرفر مع حدود آمنة. يوجد اختصار واتساب قابل للإعداد للمساعدة، لكن الطلبات تبقى من خلال checkout الموقع حتى لا يتم تجاوز التحقق، حجز المخزون، ونسخ بيانات الطلب.",
            },
            {
              en: "The admin side focuses on safe management: server-side filters and pagination, product/variant editing, category management with safe deletion rules, order cards, status/payment updates, internal notes, and mobile-friendly order details.",
              ar: "جانب الإدارة يركز على إدارة آمنة: فلاتر وتصفح من السيرفر، تعديل المنتجات والمتغيرات، إدارة التصنيفات مع حذف آمن، بطاقات الطلبات، تحديث الحالة والدفع، ملاحظات داخلية، وتفاصيل طلبات مناسبة للموبايل.",
            },
          ],
        },
        {
          title: {
            en: "Main features",
            ar: "أهم الميزات",
          },
          body: [
            {
              en: "The project combines customer-facing ecommerce features with admin tools and production-aware engineering decisions.",
              ar: "المشروع يجمع بين ميزات متجر تظهر للعميل وأدوات إدارة وقرارات تقنية تراعي بيئة الإنتاج.",
            },
          ],
          bullets: [
            {
              en: "Public storefront with product listing, product details, categories, cart, checkout, and customer orders.",
              ar: "واجهة متجر عامة تشمل عرض المنتجات، تفاصيل المنتج، التصنيفات، السلة، الطلب، وطلبات العميل.",
            },
            {
              en: "Server-side product search, category filtering, and capped load-more pagination for safer browsing as the catalog grows.",
              ar: "بحث وتصنيف وتحميل المزيد من السيرفر مع حدود آمنة حتى يبقى التصفح مناسباً مع نمو الكتالوج.",
            },
            {
              en: "Clothing variants for size and color with stock tracked at the variant level.",
              ar: "متغيرات ملابس للمقاس واللون مع تتبع المخزون على مستوى المتغير.",
            },
            {
              en: "Checkout-time stock reservation with protection against deducting stock twice during admin confirmation.",
              ar: "حجز المخزون أثناء الطلب مع حماية من خصم المخزون مرتين عند تأكيد الأدمن.",
            },
            {
              en: "Delivery area selection with delivery price snapshots so old orders remain understandable after delivery settings change.",
              ar: "اختيار منطقة التوصيل مع حفظ نسخة من سعر التوصيل حتى تبقى الطلبات القديمة مفهومة بعد تغيير إعدادات التوصيل.",
            },
            {
              en: "Admin dashboard for products, categories, orders, variants, inventory, order status, payment status, and internal notes.",
              ar: "لوحة إدارة للمنتجات، التصنيفات، الطلبات، المتغيرات، المخزون، حالة الطلب، حالة الدفع، والملاحظات الداخلية.",
            },
            {
              en: "Arabic/English UI with RTL/LTR support and local-market wording improvements.",
              ar: "واجهة عربية/إنجليزية مع دعم RTL/LTR وتحسينات في الصياغة لتناسب السوق المحلي.",
            },
            {
              en: "Configurable WhatsApp support shortcut and optional store-owner order email notifications.",
              ar: "اختصار واتساب للدعم قابل للإعداد وتنبيهات بريد اختيارية لصاحب المتجر عند وصول طلب جديد.",
            },
            {
              en: "Deployment setup using services such as Render, Neon, Cloudinary, Upstash Redis, and email configuration.",
              ar: "تجهيز للنشر باستخدام خدمات مثل Render وNeon وCloudinary وUpstash Redis وإعدادات البريد.",
            },
          ],
        },
        {
          title: {
            en: "Architecture and technical decisions",
            ar: "البنية والقرارات التقنية",
          },
          body: [
            {
              en: "The app uses server-side logic for important ecommerce operations such as product availability, pricing, discounts, cart validation, stock checks, checkout, and order creation. This avoids relying on values that can be changed in the browser.",
              ar: "التطبيق يستخدم منطقاً على السيرفر للعمليات المهمة مثل توفر المنتج، الأسعار، الخصومات، تحقق السلة، فحص المخزون، الطلب، وإنشاء الطلبات. هذا يمنع الاعتماد على قيم يمكن تغييرها من المتصفح.",
            },
            {
              en: "For clothing products, I moved toward a variant-first model. Size and color are treated as real product variants, and cart/order data references the selected variant instead of treating size and color as frontend-only labels.",
              ar: "بالنسبة لمنتجات الملابس، اتجهت إلى نموذج يعتمد على المتغيرات أولاً. المقاس واللون يتم التعامل معهما كمتغيرات حقيقية للمنتج، وبيانات السلة/الطلب تشير للمتغير المختار بدلاً من اعتبارها مجرد labels في الواجهة.",
            },
            {
              en: "Order items snapshot important purchase details, and delivery details snapshot the selected delivery area and price. This keeps historical orders clear even if an admin later changes product, variant, or delivery configuration.",
              ar: "عناصر الطلب تحفظ نسخة من تفاصيل الشراء المهمة، وتفاصيل التوصيل تحفظ منطقة وسعر التوصيل المختارين. هذا يبقي الطلبات التاريخية واضحة حتى لو عدل الأدمن لاحقاً إعدادات المنتج أو المتغيرات أو التوصيل.",
            },
            {
              en: "The store-owner order notification is intentionally best-effort and outside the checkout transaction, so an email provider issue does not cancel a valid customer order after stock has already been reserved.",
              ar: "تنبيه صاحب المتجر بالبريد مصمم كعملية best-effort وخارج transaction الطلب، لذلك مشكلة مزود البريد لا تلغي طلباً صحيحاً بعد حجز المخزون.",
            },
          ],
        },
        {
          title: {
            en: "Security and reliability",
            ar: "الأمان والاعتمادية",
          },
          body: [
            {
              en: "Security was part of the project scope from the beginning. I worked with environment variable validation, protected admin/customer flows, server-side validation, rate limiting, safe auth/session handling, security headers, and careful handling of secrets.",
              ar: "الأمان كان جزءاً من نطاق المشروع منذ البداية. عملت على تحقق متغيرات البيئة، حماية تدفقات الأدمن/العميل، التحقق على السيرفر، تحديد المعدل، التعامل الآمن مع الجلسات، security headers، والانتباه لعدم كشف الأسرار.",
            },
            {
              en: "Protected mutation routes use CSRF/same-origin style checks where implemented, and sensitive APIs are hardened so client input, route params, query params, authorization, and returned data are treated carefully.",
              ar: "مسارات التعديل المحمية تستخدم فحوصات من نوع CSRF/same-origin حيث تم تنفيذها، والـ APIs الحساسة تم تقويتها بحيث يتم التعامل بحذر مع إدخال العميل، route params، query params، الصلاحيات، والبيانات المرجعة.",
            },
            {
              en: "Checkout behavior is designed so the server controls prices, stock, totals, and availability. Payment processing is intentionally out of scope for now, which avoids adding payment-specific risk before the core store foundation is stable.",
              ar: "تدفق الطلب مصمم بحيث يتحكم السيرفر بالأسعار، المخزون، المجموع، والتوفر. الدفع الإلكتروني خارج النطاق حالياً بشكل مقصود لتجنب إضافة مخاطر خاصة بالدفع قبل تثبيت أساس المتجر.",
            },
            {
              en: "Unexpected API failures can be logged with safe searchable error reference IDs, while user-facing route error boundaries avoid showing raw technical errors to customers or admins.",
              ar: "أخطاء الـ API غير المتوقعة يمكن تسجيلها باستخدام معرفات خطأ آمنة قابلة للبحث، بينما تمنع route error boundaries عرض أخطاء تقنية خام للعملاء أو الأدمن.",
            },
          ],
        },
        {
          title: {
            en: "Testing and quality",
            ar: "الاختبار والجودة",
          },
          body: [
            {
              en: "The project uses quality checks such as ESLint, TypeScript type checking, production build verification, Vitest, React Testing Library, Playwright end-to-end tests, and manual testing for important user and admin flows.",
              ar: "المشروع يستخدم فحوصات جودة مثل ESLint وTypeScript type checking وفحص البناء للإنتاج وVitest وReact Testing Library وPlaywright end-to-end tests واختبار يدوي للتدفقات المهمة للعميل والأدمن.",
            },
            {
              en: "Test coverage focuses on important ecommerce behavior such as public pages, auth, cart, orders, product display, stock visibility, admin guards, and admin filtering smoke checks.",
              ar: "تغطية الاختبارات تركز على سلوكيات متجر مهمة مثل الصفحات العامة، تسجيل الدخول، السلة، الطلبات، عرض المنتجات، إظهار/إخفاء المخزون، حماية الأدمن، وفحوصات الفلاتر في لوحة الإدارة.",
            },
            {
              en: "I learned that tests also need maintenance. UI text, demo data, product slugs, and labels can change, so test locators and test data need to be reviewed as the application evolves.",
              ar: "تعلمت أن الاختبارات تحتاج صيانة أيضاً. نصوص الواجهة، بيانات الديمو، روابط المنتجات، والlabels قد تتغير، لذلك يجب مراجعة locators وبيانات الاختبار مع تطور التطبيق.",
            },
          ],
        },
        {
          title: {
            en: "Learning and AI-assisted workflow",
            ar: "التعلم وأسلوب العمل بمساعدة الذكاء الاصطناعي",
          },
          body: [
            {
              en: "This project started as a learn-by-doing full-stack project. I had a foundation in frontend and backend concepts from university courses and online learning, but I was not yet confident about how to structure and build a real production-style application from start to finish.",
              ar: "بدأ هذا المشروع كمشروع تعلم عملي Full-stack. كان لدي أساس في مفاهيم الواجهة والباك إند من الجامعة والكورسات، لكنني لم أكن واثقاً بعد من الطريقة الصحيحة لتنظيم وبناء تطبيق قريب من أسلوب الإنتاج من البداية للنهاية.",
            },
            {
              en: "I used AI as a learning, planning, debugging, and code-review assistant. At first, it helped me understand unfamiliar concepts and compare implementation options. Over time, the project also taught me how to use AI more effectively: breaking work into smaller checkpoints, writing clearer prompts, reviewing suggestions critically, and separating design, backend logic, security, testing, and deployment decisions instead of treating everything as one large task.",
              ar: "استخدمت الذكاء الاصطناعي كمساعد للتعلم، التخطيط، التصحيح، ومراجعة الكود. في البداية ساعدني على فهم مفاهيم غير مألوفة ومقارنة طرق التنفيذ. ومع الوقت علمني المشروع كيف أستخدم أدوات الذكاء الاصطناعي بفعالية أكبر: تقسيم العمل إلى checkpoints صغيرة، كتابة prompts أوضح، مراجعة الاقتراحات بعين نقدية، وفصل قرارات التصميم، الباك إند، الأمان، الاختبار، والنشر بدلاً من التعامل مع كل شيء كمهمة واحدة كبيرة.",
            },
            {
              en: "The important part of this workflow was that I remained responsible for understanding the code, applying changes, testing behavior, reviewing tradeoffs, and deciding what should or should not be included. This helped me become faster and more structured without treating AI as a replacement for real development understanding.",
              ar: "الجزء الأهم في هذا الأسلوب أنني بقيت مسؤولاً عن فهم الكود، تطبيق التغييرات، اختبار السلوك، مراجعة التنازلات، وتحديد ما يجب إضافته أو تأجيله. هذا ساعدني أن أصبح أسرع وأكثر تنظيماً بدون التعامل مع الذكاء الاصطناعي كبديل عن فهم التطوير الحقيقي.",
            },
          ],
        },
        {
          title: {
            en: "Challenges and lessons learned",
            ar: "التحديات والدروس المستفادة",
          },
          body: [
            {
              en: "The biggest lessons came from the parts that looked simple at first: stock modeling, checkout consistency, authentication setup, deployment configuration, bilingual wording, admin usability, and keeping the scope safe.",
              ar: "أكبر الدروس جاءت من الأجزاء التي بدت بسيطة في البداية: نمذجة المخزون، ثبات عملية الطلب، إعدادات تسجيل الدخول، إعدادات النشر، الصياغة ثنائية اللغة، سهولة استخدام لوحة الإدارة، والحفاظ على نطاق آمن.",
            },
            {
              en: "I learned that a real project is not only about making features work. It also needs good data modeling, safe server logic, clear user flows, maintainable configuration, testing, accessibility, deployment awareness, and careful decisions about what not to build yet.",
              ar: "تعلمت أن المشروع الحقيقي لا يتعلق فقط بجعل الميزات تعمل. يحتاج أيضاً إلى نمذجة بيانات جيدة، منطق آمن على السيرفر، تدفقات واضحة للمستخدم، إعدادات قابلة للصيانة، اختبار، إتاحة، ووعي بالنشر وقرارات حذرة حول ما لا يجب بناؤه الآن.",
            },
          ],
        },
        {
          title: {
            en: "Future improvements",
            ar: "تحسينات مستقبلية",
          },
          body: [
            {
              en: "Future work could include the broader production-readiness/security audit, stronger monitoring and backups, more complete Playwright coverage, screenshot and demo walkthrough content, and optional payment support only when the core store is stable enough for that scope.",
              ar: "التحسينات المستقبلية يمكن أن تشمل مراجعة production readiness/security الأوسع، مراقبة ونسخ احتياطي أقوى، تغطية Playwright أوسع، إضافة صور وشرح للديمو، ودعم الدفع الإلكتروني فقط عندما يكون أساس المتجر مستقراً بما يكفي لهذا النطاق.",
            },
            {
              en: "Caching and performance tuning should come after measured usage or safe smoke testing shows a real need, instead of adding complexity before the core business rules are stable.",
              ar: "الكاش وتحسين الأداء يجب أن يأتي بعد قياس استخدام حقيقي أو smoke testing آمن يثبت الحاجة، بدلاً من إضافة تعقيد قبل استقرار قواعد العمل الأساسية.",
            },
            {
              en: "Features such as POS, SMS, coupons, accounting integrations, delivery-company integrations, CSV import, and PWA behavior should stay out of scope until there is a clear client need and a safe implementation plan.",
              ar: "ميزات مثل POS وSMS والكوبونات وتكاملات المحاسبة وشركات التوصيل واستيراد CSV وPWA يجب أن تبقى خارج النطاق إلى أن يكون هناك احتياج واضح من عميل وخطة تنفيذ آمنة.",
            },
          ],
        },
      ],
    },
  },
] as const satisfies readonly ProjectConfig[];

export function getProjectBySlug(slug: string): ProjectConfig | undefined {
  return projects.find((project) => project.slug === slug);
}
