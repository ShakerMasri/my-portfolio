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
      en: "An independently built bilingual full-stack ecommerce template where checkout, pricing, variant stock, catalog queries, and admin rules are enforced on the server.",
      ar: "قالب متجر ملابس Full-stack ثنائي اللغة بنيته بشكل مستقل، مع فرض منطق الطلب والأسعار ومخزون المتغيرات واستعلامات الكتالوج وقواعد الإدارة على السيرفر.",
    },
    highlights: [
      {
        en: "Transactional checkout recomputes prices, reserves variant stock, snapshots purchase data, and uses idempotency to avoid duplicate orders.",
        ar: "Checkout داخل transaction يعيد حساب الأسعار، يحجز مخزون المتغيرات، يحفظ بيانات الشراء، ويستخدم idempotency لتجنب تكرار الطلبات.",
      },
      {
        en: "Size/color combinations are modeled as database-backed variants with normalized unique keys and variant-level stock.",
        ar: "المقاسات والألوان ممثلة كمتغيرات حقيقية في قاعدة البيانات مع مفاتيح موحدة وفريدة ومخزون لكل متغير.",
      },
      {
        en: "Product search, category filtering, and capped pagination run server-side instead of loading the full catalog in the browser.",
        ar: "البحث والتصفية حسب التصنيف والـ pagination المحدود تعمل على السيرفر بدلاً من تحميل الكتالوج كاملاً في المتصفح.",
      },
      {
        en: "Better Auth sessions, role-based admin guards, same-origin checks, optional Redis rate limits, and automated tests protect important flows.",
        ar: "جلسات Better Auth وصلاحيات الأدمن وفحوصات same-origin وتحديد المعدل الاختياري عبر Redis والاختبارات الآلية تحمي التدفقات المهمة.",
      },
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
      "Zod",
      "Vitest",
      "Playwright",
    ],
    status: "completed",
    featured: true,

    links: {
      live: {
        href: "https://ecommerce-template-clothing.onrender.com",
        label: {
          en: "Hosted demo",
          ar: "نسخة مستضافة",
        },
        note: {
          en: "Render-hosted demo; availability may vary.",
          ar: "نسخة تجريبية مستضافة على Render؛ قد يختلف توفرها من وقت لآخر.",
        },
        dataNotice: {
          en: "Demo data only; no real customer data is shown.",
          ar: "بيانات تجريبية فقط؛ لا يتم عرض بيانات عملاء حقيقية.",
        },
      },
      source: "https://github.com/ShakerMasri/ecommerce-template-clothing",
    },
    caseStudy: {
      eyebrow: {
        en: "Featured case study",
        ar: "دراسة مشروع مميز",
      },
      title: {
        en: "Keeping ecommerce business rules on the server",
        ar: "إبقاء قواعد المتجر الأساسية على السيرفر",
      },
      summary: {
        en: "I built this project as a full-stack clothing-store template, with the backend work centered on checkout consistency, variant inventory, protected admin operations, server-side catalog queries, and automated verification of critical flows.",
        ar: "بنيت هذا المشروع كقالب متجر ملابس Full-stack، مع تركيز العمل الخلفي على ثبات عملية الطلب، مخزون المتغيرات، حماية عمليات الإدارة، استعلامات الكتالوج على السيرفر، والاختبارات الآلية للتدفقات المهمة.",
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
            en: "Independent full-stack ecommerce project",
            ar: "مشروع متجر إلكتروني Full-stack مستقل",
          },
        },
        {
          label: {
            en: "My role",
            ar: "دوري",
          },
          value: {
            en: "Full-stack implementation with a backend focus",
            ar: "تنفيذ Full-stack مع تركيز على الباك إند",
          },
        },
        {
          label: {
            en: "Engineering focus",
            ar: "التركيز التقني",
          },
          value: {
            en: "Checkout integrity, variant inventory, server-side APIs, auth, and testing",
            ar: "ثبات الطلب، مخزون المتغيرات، APIs على السيرفر، المصادقة، والاختبارات",
          },
        },
        {
          label: {
            en: "Scope",
            ar: "النطاق",
          },
          value: {
            en: "Portfolio/demo template, not a live production store",
            ar: "قالب للعرض والملف الشخصي، وليس متجراً إنتاجياً حقيقياً",
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
              en: "A clothing storefront needs more than product pages. Checkout has to use current server data, stock belongs to specific size/color choices, historical orders need stable purchase details, and admin actions must follow rules that cannot be bypassed from the browser.",
              ar: "متجر الملابس يحتاج أكثر من صفحات منتجات. عملية الطلب يجب أن تعتمد على بيانات السيرفر الحالية، والمخزون يرتبط باختيارات مقاس/لون محددة، والطلبات القديمة تحتاج بيانات شراء ثابتة، وإجراءات الأدمن يجب أن تتبع قواعد لا يمكن تجاوزها من المتصفح.",
            },
          ],
        },
        {
          title: {
            en: "Decision 1 — Make checkout server-owned and transactional",
            ar: "القرار 1 — جعل الـ checkout تحت تحكم السيرفر وداخل transaction",
          },
          body: [
            {
              en: "The order endpoint does not accept product prices or delivery prices from the browser. It reloads the authenticated customer and cart, validates the selected delivery area, recomputes effective prices, checks active variants, and decrements stock inside one Prisma transaction.",
              ar: "مسار إنشاء الطلب لا يقبل أسعار المنتجات أو التوصيل من المتصفح. يعيد تحميل العميل المسجل والسلة، يتحقق من منطقة التوصيل، يعيد حساب الأسعار الفعلية، يفحص المتغيرات النشطة، ويخصم المخزون داخل Prisma transaction واحدة.",
            },
            {
              en: "Each order stores product, price, variant, customer, and delivery snapshots. A per-user idempotency key prevents the same checkout request from creating a second order, while failed stock reservations stop order creation and leave the cart intact.",
              ar: "كل طلب يحفظ snapshots للمنتج والسعر والمتغير والعميل والتوصيل. مفتاح idempotency لكل مستخدم يمنع نفس طلب الـ checkout من إنشاء طلب ثانٍ، بينما فشل حجز المخزون يوقف إنشاء الطلب ويترك السلة كما هي.",
            },
          ],
        },
        {
          title: {
            en: "Decision 2 — Model clothing inventory as real variants",
            ar: "القرار 2 — تمثيل مخزون الملابس كمتغيرات حقيقية",
          },
          body: [
            {
              en: "Size and color are stored in ProductVariant records rather than frontend-only labels. Normalized size/color keys form a database uniqueness constraint, and each variant owns its stock and active state.",
              ar: "المقاس واللون مخزنان في سجلات ProductVariant بدلاً من أن يكونا labels في الواجهة فقط. مفاتيح المقاس/اللون الموحدة تشكل قيد uniqueness في قاعدة البيانات، ولكل متغير مخزونه وحالته النشطة.",
            },
            {
              en: "Checkout requires a selected active variant and conditionally decrements it only when enough stock remains. Cancelling a previously reserved order restores that stock; admin status changes are restricted to explicit allowed transitions.",
              ar: "الـ checkout يتطلب متغيراً نشطاً ومختاراً، ويخصم منه فقط إذا كان المخزون كافياً. إلغاء طلب سبق حجز مخزونه يعيد الكمية، وتغييرات حالة الطلب من الأدمن مقيدة بانتقالات مسموحة بشكل صريح.",
            },
          ],
        },
        {
          title: {
            en: "Decision 3 — Keep query and authorization boundaries on the server",
            ar: "القرار 3 — إبقاء حدود الاستعلام والصلاحيات على السيرفر",
          },
          body: [
            {
              en: "The products API validates query shape and limits, then performs search, category filtering, ordering, and capped pagination in Prisma. The response derives availability from active variant stock instead of exposing an unbounded catalog for browser-side filtering.",
              ar: "Products API يتحقق من شكل وحدود الاستعلام ثم ينفذ البحث والتصفية والترتيب والـ pagination المحدود عبر Prisma. الاستجابة تستنتج التوفر من مخزون المتغيرات النشطة بدلاً من إرسال كتالوج غير محدود لتصفيته في المتصفح.",
            },
            {
              en: "Authentication uses Better Auth with Prisma-backed sessions. Admin API mutations require the ADMIN role, use same-origin checks, and can apply Redis-backed rate limits when Upstash is configured; the limiter intentionally fails open if Redis is unavailable.",
              ar: "المصادقة تستخدم Better Auth مع جلسات محفوظة عبر Prisma. تعديلات Admin API تتطلب دور ADMIN وتستخدم فحوصات same-origin ويمكنها تطبيق rate limits عبر Redis عند إعداد Upstash؛ والـ limiter مصمم ليمرر الطلب عند تعذر Redis بدلاً من تعطيل المتجر.",
            },
          ],
        },
        {
          title: {
            en: "Decision 4 — Test business rules, not only UI rendering",
            ar: "القرار 4 — اختبار قواعد العمل وليس الواجهة فقط",
          },
          body: [
            {
              en: "Vitest/API tests cover order validation, stock reservation failures, client-supplied delivery-price rejection, rate-limit behavior, variant validation, and admin order transitions. Playwright also exercises a real customer order flow and checks the resulting price snapshot and stock change.",
              ar: "اختبارات Vitest/API تغطي تحقق الطلب، فشل حجز المخزون، رفض سعر توصيل مرسل من العميل، سلوك rate limiting، تحقق المتغيرات، وانتقالات حالة الطلب. كما يختبر Playwright تدفق طلب حقيقي ويتحقق من snapshot السعر وتغير المخزون.",
            },
            {
              en: "GitHub Actions runs type checking, linting, unit tests, a production build, and the repository license audit on pull requests and pushes to main. The Playwright suite exists separately and is not claimed here as part of that CI job.",
              ar: "GitHub Actions يشغل type checking وlinting والاختبارات وبناء production وفحص تراخيص المستودع عند pull requests وpush إلى main. مجموعة Playwright موجودة بشكل منفصل ولا أعتبرها هنا جزءاً من مهمة CI هذه.",
            },
          ],
        },
        {
          title: {
            en: "Trade-offs and result",
            ar: "التنازلات والنتيجة",
          },
          body: [
            {
              en: "The result is a backend-oriented full-stack project with concrete ecommerce invariants rather than a production-store claim. Payment processing is intentionally out of scope—the schema supports cash on delivery only—and the hosted demo should be treated as a portfolio environment rather than proof of production availability or scale.",
              ar: "النتيجة مشروع Full-stack بتركيز خلفي وقواعد متجر واضحة بدلاً من ادعاء أنه متجر إنتاجي. الدفع الإلكتروني خارج النطاق بشكل مقصود—والنموذج يدعم الدفع عند الاستلام فقط—والنسخة المستضافة بيئة عرض للملف الشخصي وليست دليلاً على جاهزية إنتاجية أو حجم استخدام فعلي.",
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
