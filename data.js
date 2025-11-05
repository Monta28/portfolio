// data.js - Données multilingues et projets
const portfolioData = {
  // Configuration
  config: {
    defaultLang: 'fr',
    supportedLangs: ['fr', 'en', 'ar'],
    siteUrl: 'https://montassar-touati.com',
    author: 'Montassar TOUATI',
    email: 'montassar.touati@gmail.com',
    phone: '+216 57 03 93 34',
    location: 'Tunis, Tunisie',
    timezone: 'Africa/Tunis'
  },

  // Traductions
  translations: {
    fr: {
      // Navigation
      nav: {
        home: 'Accueil',
        about: 'À propos',
        skills: 'Compétences',
        projects: 'Projets',
        experience: 'Expériences',
        taekwondo: 'Taekwondo',
        contact: 'Contact'
      },
      // Hero
      hero: {
        greeting: 'Bonjour, je suis',
        name: 'Montassar TOUATI',
        roles: ['CTO @ Mecacentre', 'Ingénieur .NET/JS', 'Architecte Systèmes', 'Coach Taekwondo'],
        location: 'Tunis, Tunisie',
        cta: {
          projects: 'Voir mes projets',
          cv: 'Télécharger CV',
          contact: 'Me contacter'
        },
        availability: 'Disponible pour missions freelance'
      },
      // À propos
      about: {
        title: 'À propos',
        intro: "Ingénieur développeur depuis 2013, passionné par la création de solutions technologiques innovantes. Actuellement CTO chez Mecacentre, je conçois et développe des plateformes B2B/B2C, des systèmes de paiement en ligne et des agents d'intelligence artificielle.",
        focus: "Mes domaines d'expertise incluent l'automatisation des processus métier, l'intégration WhatsApp, les solutions de gestion commerciale (DMS), et le développement d'agents conversationnels intelligents.",
        sports: "En parallèle de ma carrière d'ingénieur, je suis coach de Taekwondo et responsable de projets sportifs, combinant leadership technique et encadrement sportif.",
        entrepreneur: "Entrepreneur dans l'âme, j'ai lancé plusieurs produits SaaS et plateformes locales adaptées au marché tunisien et africain."
      },
      // Compétences
      skills: {
        title: 'Compétences',
        categories: {
          frontend: 'Frontend',
          backend: 'Backend',
          database: 'Bases de données',
          devops: 'DevOps & Infrastructure',
          ai: 'IA & Agents',
          mobile: 'Mobile',
          tools: 'Outils',
          security: 'Sécurité & Auth',
          payment: 'Paiement Tunisie'
        }
      },
      // Projets
      projects: {
        title: 'Projets',
        filterAll: 'Tous',
        filterByStack: 'Filtrer par technologie',
        viewDetails: 'Voir détails',
        status: {
          production: 'En production',
          development: 'En développement',
          completed: 'Terminé',
          archived: 'Archivé'
        }
      },
      // Expériences
      experience: {
        title: 'Expériences',
        present: 'Présent',
        duration: 'an | ans'
      },
      // Contact
      contact: {
        title: 'Contact',
        subtitle: 'Discutons de votre projet',
        form: {
          name: 'Nom complet',
          email: 'Email',
          message: 'Message',
          consent: "J'accepte que mes données soient traitées pour répondre à ma demande",
          submit: 'Envoyer',
          sending: 'Envoi...',
          success: 'Message envoyé avec succès !',
          error: 'Erreur lors de l\'envoi. Veuillez réessayer.'
        },
        availability: 'Disponible pour missions freelance en Tunisie et à distance',
        social: 'Retrouvez-moi sur'
      },
      // Footer
      footer: {
        rights: 'Tous droits réservés',
        madeWith: 'Fait avec',
        in: 'à',
        theme: 'Thème',
        language: 'Langue'
      },
      // Commun
      common: {
        readMore: 'Lire plus',
        backToProjects: 'Retour aux projets',
        stack: 'Technologies',
        role: 'Rôle',
        period: 'Période',
        links: 'Liens',
        keyFacts: 'Faits clés'
      }
    },
    en: {
      // Navigation
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        experience: 'Experience',
        taekwondo: 'Taekwondo',
        contact: 'Contact'
      },
      // Hero
      hero: {
        greeting: 'Hello, I am',
        name: 'Montassar TOUATI',
        roles: ['CTO @ Mecacentre', '.NET/JS Engineer', 'Systems Architect', 'Taekwondo Coach'],
        location: 'Tunis, Tunisia',
        cta: {
          projects: 'View my projects',
          cv: 'Download CV',
          contact: 'Contact me'
        },
        availability: 'Available for freelance missions'
      },
      // À propos
      about: {
        title: 'About',
        intro: "Software engineer since 2013, passionate about creating innovative technological solutions. Currently CTO at Mecacentre, I design and develop B2B/B2C platforms, online payment systems, and artificial intelligence agents.",
        focus: "My areas of expertise include business process automation, WhatsApp integration, dealer management systems (DMS), and intelligent conversational agent development.",
        sports: "Alongside my engineering career, I am a Taekwondo coach and sports project manager, combining technical leadership and sports coaching.",
        entrepreneur: "Entrepreneur at heart, I have launched several SaaS products and local platforms adapted to the Tunisian and African markets."
      },
      // Compétences
      skills: {
        title: 'Skills',
        categories: {
          frontend: 'Frontend',
          backend: 'Backend',
          database: 'Databases',
          devops: 'DevOps & Infrastructure',
          ai: 'AI & Agents',
          mobile: 'Mobile',
          tools: 'Tools',
          security: 'Security & Auth',
          payment: 'Tunisia Payment'
        }
      },
      // Projets
      projects: {
        title: 'Projects',
        filterAll: 'All',
        filterByStack: 'Filter by technology',
        viewDetails: 'View details',
        status: {
          production: 'In production',
          development: 'In development',
          completed: 'Completed',
          archived: 'Archived'
        }
      },
      // Expériences
      experience: {
        title: 'Experience',
        present: 'Present',
        duration: 'year | years'
      },
      // Contact
      contact: {
        title: 'Contact',
        subtitle: "Let's discuss your project",
        form: {
          name: 'Full name',
          email: 'Email',
          message: 'Message',
          consent: 'I agree that my data will be processed to respond to my request',
          submit: 'Send',
          sending: 'Sending...',
          success: 'Message sent successfully!',
          error: 'Error sending. Please try again.'
        },
        availability: 'Available for freelance missions in Tunisia and remotely',
        social: 'Find me on'
      },
      // Footer
      footer: {
        rights: 'All rights reserved',
        madeWith: 'Made with',
        in: 'in',
        theme: 'Theme',
        language: 'Language'
      },
      // Commun
      common: {
        readMore: 'Read more',
        backToProjects: 'Back to projects',
        stack: 'Technologies',
        role: 'Role',
        period: 'Period',
        links: 'Links',
        keyFacts: 'Key facts'
      }
    },
    ar: {
      // Navigation
      nav: {
        home: 'الرئيسية',
        about: 'عن',
        skills: 'المهارات',
        projects: 'المشاريع',
        experience: 'الخبرات',
        taekwondo: 'التايكواندو',
        contact: 'اتصل'
      },
      // Hero
      hero: {
        greeting: 'مرحبا، أنا',
        name: 'منتصر التواتي',
        roles: ['مدير التكنولوجيا @ Mecacentre', 'مهندس .NET/JS', 'مهندس أنظمة', 'مدرب تايكواندو'],
        location: 'تونس، تونس',
        cta: {
          projects: 'عرض مشاريعي',
          cv: 'تحميل السيرة الذاتية',
          contact: 'اتصل بي'
        },
        availability: 'متاح لمهام العمل الحر'
      },
      // À propos
      about: {
        title: 'نبذة',
        intro: "مهندس برمجيات منذ 2013، شغوف بإنشاء حلول تكنولوجية مبتكرة. حاليًا مدير التكنولوجيا في Mecacentre، أصمم وأطور منصات B2B/B2C وأنظمة الدفع عبر الإنترنت ووكلاء الذكاء الاصطناعي.",
        focus: "تشمل مجالات خبرتي أتمتة العمليات التجارية، تكامل WhatsApp، أنظمة إدارة الموزعين (DMS)، وتطوير وكلاء المحادثة الذكية.",
        sports: "إلى جانب مسيرتي الهندسية، أنا مدرب تايكواندو ومدير مشاريع رياضية، أجمع بين القيادة التقنية والتدريب الرياضي.",
        entrepreneur: "رائد أعمال بالفطرة، أطلقت العديد من منتجات SaaS والمنصات المحلية المكيفة للأسواق التونسية والأفريقية."
      },
      // Compétences
      skills: {
        title: 'المهارات',
        categories: {
          frontend: 'الواجهة الأمامية',
          backend: 'الواجهة الخلفية',
          database: 'قواعد البيانات',
          devops: 'DevOps والبنية التحتية',
          ai: 'الذكاء الاصطناعي والوكلاء',
          mobile: 'الهاتف المحمول',
          tools: 'أدوات',
          security: 'الأمن والمصادقة',
          payment: 'الدفع تونس'
        }
      },
      // Projets
      projects: {
        title: 'المشاريع',
        filterAll: 'الكل',
        filterByStack: 'تصفية حسب التكنولوجيا',
        viewDetails: 'عرض التفاصيل',
        status: {
          production: 'في الإنتاج',
          development: 'قيد التطوير',
          completed: 'مكتمل',
          archived: 'مؤرشف'
        }
      },
      // Expériences
      experience: {
        title: 'الخبرات',
        present: 'الحاضر',
        duration: 'سنة | سنوات'
      },
      // Contact
      contact: {
        title: 'اتصل',
        subtitle: 'لنناقش مشروعك',
        form: {
          name: 'الاسم الكامل',
          email: 'البريد الإلكتروني',
          message: 'الرسالة',
          consent: 'أوافق على معالجة بياناتي للرد على طلبي',
          submit: 'إرسال',
          sending: 'جاري الإرسال...',
          success: 'تم إرسال الرسالة بنجاح!',
          error: 'خطأ في الإرسال. يرجى المحاولة مرة أخرى.'
        },
        availability: 'متاح لمهام العمل الحر في تونس وعن بعد',
        social: 'تابعني على'
      },
      // Footer
      footer: {
        rights: 'جميع الحقوق محفوظة',
        madeWith: 'صنع بـ',
        in: 'في',
        theme: 'السمة',
        language: 'اللغة'
      },
      // Commun
      common: {
        readMore: 'اقرأ المزيد',
        backToProjects: 'العودة إلى المشاريع',
        stack: 'التقنيات',
        role: 'الدور',
        period: 'الفترة',
        links: 'الروابط',
        keyFacts: 'حقائق رئيسية'
      }
    }
  },

  // Compétences
  skills: {
    frontend: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'shadcn/ui', level: 80 }
    ],
    backend: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 90 },
      { name: 'NestJS', level: 80 },
      { name: 'ASP.NET Core', level: 85 }
    ],
    database: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'SQL Server', level: 90 },
      { name: 'SQLite', level: 80 },
      { name: 'Prisma ORM', level: 85 }
    ],
    devops: [
      { name: 'Docker', level: 85 },
      { name: 'CI/CD', level: 80 },
      { name: 'OVH VPS', level: 85 },
      { name: 'Railway/Render', level: 80 },
      { name: 'Caddy Server', level: 75 },
      { name: 'Cloudflare Tunnels', level: 75 }
    ],
    ai: [
      { name: 'OpenRouter', level: 85 },
      { name: 'Qwen Models', level: 80 },
      { name: 'Ollama', level: 75 },
      { name: 'LM Studio', level: 75 },
      { name: 'DeepSeek-Coder', level: 80 },
      { name: 'n8n Automation', level: 80 }
    ],
    mobile: [
      { name: 'React Native', level: 80 }
    ],
    tools: [
      { name: 'VS Code', level: 95 },
      { name: 'Visual Studio 2022', level: 90 },
      { name: 'GitHub', level: 90 },
      { name: 'Postman', level: 85 }
    ],
    security: [
      { name: 'JWT', level: 85 },
      { name: 'NextAuth.js', level: 80 },
      { name: 'Cookies HttpOnly', level: 85 }
    ],
    payment: [
      { name: 'Paymee', level: 90 },
      { name: 'Konnect', level: 85 },
      { name: 'IZI Pay', level: 90 }
    ]
  },

  // Projets
  projects: [
    {
      slug: 'mecacentre-mecacomm',
      title: {
        fr: 'MecaCentre / MecaComm',
        en: 'MecaCentre / MecaComm',
        ar: 'MecaCentre / MecaComm'
      },
      role: {
        fr: 'CTO, Architecte DMS sur mesure',
        en: 'CTO, Custom DMS Architect',
        ar: 'مدير التكنولوجيا، مهندس نظام إدارة الموزعين'
      },
      period: '2025 - Présent',
      stack: ['ASP.NET Core', 'Node.js', 'SQL Server', 'OpenRouter', 'Qwen AI', 'WhatsApp API'],
      summary: {
        fr: "Conception et développement d'un système de gestion commerciale (DMS) sur mesure avec agent IA conversationnel 'TakTak' pour automatiser les interactions clients via WhatsApp.",
        en: "Design and development of a custom dealer management system (DMS) with 'TakTak' conversational AI agent to automate customer interactions via WhatsApp.",
        ar: "تصميم وتطوير نظام إدارة الموزعين (DMS) مخصص مع وكيل ذكاء اصطناعي 'TakTak' لأتمتة تفاعلات العملاء عبر WhatsApp."
      },
      keyFacts: {
        fr: [
          "Agent IA 'TakTak' répond automatiquement aux demandes clients 24/7",
          "Vérification en temps réel des prix et disponibilités depuis SQL Server",
          "Passage de commandes automatisé via conversation WhatsApp",
          "Intégration complète avec système de gestion commerciale existant",
          "Support multilingue (FR/AR/EN) pour l'agent conversationnel",
          "Architecture microservices ASP.NET + Node.js pour haute disponibilité"
        ],
        en: [
          "'TakTak' AI agent automatically responds to customer requests 24/7",
          "Real-time price and availability verification from SQL Server",
          "Automated order placement via WhatsApp conversation",
          "Full integration with existing dealer management system",
          "Multilingual support (FR/AR/EN) for conversational agent",
          "Microservices architecture ASP.NET + Node.js for high availability"
        ],
        ar: [
          "وكيل الذكاء الاصطناعي 'TakTak' يستجيب تلقائيًا لطلبات العملاء على مدار الساعة",
          "التحقق في الوقت الفعلي من الأسعار والتوافر من SQL Server",
          "تقديم الطلبات الآلي عبر محادثة WhatsApp",
          "التكامل الكامل مع نظام إدارة الموزعين الحالي",
          "دعم متعدد اللغات (FR/AR/EN) للوكيل المحادثة",
          "هندسة الخدمات الصغرية ASP.NET + Node.js لتوفر عالٍ"
        ]
      },
      status: 'production',
      image: '/assets/mecacentre.jpg',
      links: []
    },
    {
      slug: 'mecamarket',
      title: {
        fr: 'MecaMarket',
        en: 'MecaMarket',
        ar: 'MecaMarket'
      },
      role: {
        fr: 'Lead Developer Full-Stack',
        en: 'Lead Full-Stack Developer',
        ar: 'مطور رئيسي Full-Stack'
      },
      period: '2024',
      stack: ['React', 'Node.js', 'PostgreSQL', 'Express'],
      summary: {
        fr: "Plateforme d'enchères en ligne pour véhicules d'occasion avec workflow de leasing et back-office de gestion complète.",
        en: "Online auction platform for used vehicles with leasing workflow and comprehensive back-office management.",
        ar: "منصة مزادات عبر الإنترنت للمركبات المستعملة مع سير عمل التأجير التمويلي وإدارة مكتب خلفي شاملة."
      },
      keyFacts: {
        fr: [
          "Système d'enchères en temps réel avec WebSockets",
          "Workflow de leasing automatisé avec génération de contrats",
          "Back-office complet pour gestion véhicules et enchérisseurs",
          "Génération automatique de contrat de promesse de collaboration",
          "Gestion des commissions et paiements multi-acteurs",
          "Interface responsive optimisée pour mobile et desktop"
        ],
        en: [
          "Real-time auction system with WebSockets",
          "Automated leasing workflow with contract generation",
          "Comprehensive back-office for vehicle and bidder management",
          "Automatic generation of collaboration promise contract",
          "Multi-party commission and payment management",
          "Responsive interface optimized for mobile and desktop"
        ],
        ar: [
          "نظام مزادات في الوقت الفعلي مع WebSockets",
          "سير عمل التأجير التمويلي الآلي مع توليد العقود",
          "مكتب خلفي شامل لإدارة المركبات والمزايدين",
          "التوليد التلقائي لعقد وعد التعاون",
          "إدارة العمولات والمدفوعات متعددة الأطراف",
          "واجهة متجاوبة محسّنة للهاتف المحمول وسطح المكتب"
        ]
      },
      status: 'completed',
      image: '/assets/mecamarket.jpg',
      links: []
    },
    {
      slug: 'megafacture',
      title: {
        fr: 'MegaFacture',
        en: 'MegaFacture',
        ar: 'MegaFacture'
      },
      role: {
        fr: 'Fondateur & Architecte SaaS',
        en: 'Founder & SaaS Architect',
        ar: 'المؤسس ومهندس SaaS'
      },
      period: '2023 - 2024',
      stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'PDF Generation', 'Paymee', 'Konnect'],
      summary: {
        fr: "Solution SaaS de facturation et comptabilité avec génération automatique de documents, multi-sociétés et intégration IA pour extraction de données.",
        en: "Invoicing and accounting SaaS solution with automatic document generation, multi-company support and AI integration for data extraction.",
        ar: "حل SaaS للفوترة والمحاسبة مع توليد المستندات التلقائي، دعم متعدد الشركات وتكامل الذكاء الاصطناعي لاستخراج البيانات."
      },
      keyFacts: {
        fr: [
          "Génération automatique PDF factures, devis, bons de livraison conformes réglementation TN",
          "Gestion multi-sociétés avec isolation complète des données",
          "Intégration Paymee et Konnect pour paiement en ligne",
          "IA pour extraction automatique données fournisseurs et articles",
          "Support multilingue FR/AR pour documents commerciaux",
          "Dashboard temps réel : CA, impayés, trésorerie"
        ],
        en: [
          "Automatic PDF generation for invoices, quotes, delivery notes compliant with TN regulations",
          "Multi-company management with complete data isolation",
          "Paymee and Konnect integration for online payment",
          "AI for automatic extraction of supplier and item data",
          "FR/AR multilingual support for commercial documents",
          "Real-time dashboard: revenue, unpaid, cash flow"
        ],
        ar: [
          "التوليد التلقائي لـ PDF للفواتير والعروض وإشعارات التسليم المتوافقة مع اللوائح التونسية",
          "إدارة متعددة الشركات مع عزل كامل للبيانات",
          "تكامل Paymee و Konnect للدفع عبر الإنترنت",
          "الذكاء الاصطناعي للاستخراج التلقائي لبيانات الموردين والعناصر",
          "دعم متعدد اللغات FR/AR للوثائق التجارية",
          "لوحة معلومات في الوقت الفعلي: الإيرادات، غير المدفوعة، التدفق النقدي"
        ]
      },
      status: 'production',
      image: '/assets/megafacture.jpg',
      links: []
    },
    {
      slug: 'izi-pay-workflow',
      title: {
        fr: 'IZI Pay Workflow',
        en: 'IZI Pay Workflow',
        ar: 'IZI Pay Workflow'
      },
      role: {
        fr: "Architecte & Lead Developer",
        en: 'Architect & Lead Developer',
        ar: 'المهندس المعماري والمطور الرئيسي'
      },
      period: '2023',
      stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'RBAC', 'PDF Generation'],
      summary: {
        fr: "Plateforme d'enrôlement de commerçants pour solution de paiement avec workflow KYC, gestion des commissions et validation multi-niveaux.",
        en: "Merchant enrollment platform for payment solution with KYC workflow, commission management and multi-level validation.",
        ar: "منصة تسجيل التجار لحل الدفع مع سير عمل KYC، إدارة العمولات والتحقق متعدد المستويات."
      },
      keyFacts: {
        fr: [
          "Workflow KYC complet avec upload documents (RIB, patente, CIN)",
          "Système RBAC granulaire : Admin, Validateur, Commercial, Commerçant",
          "Génération automatique contrats avec cachet et signature numérique",
          "Traçabilité complète des actions avec audit trail",
          "Calcul et gestion automatisés des commissions multi-niveaux",
          "Interface BO pour validation et suivi en temps réel des enrôlements"
        ],
        en: [
          "Complete KYC workflow with document upload (bank details, license, ID)",
          "Granular RBAC system: Admin, Validator, Sales, Merchant",
          "Automatic contract generation with digital stamp and signature",
          "Complete action traceability with audit trail",
          "Automated calculation and management of multi-level commissions",
          "BO interface for real-time validation and enrollment tracking"
        ],
        ar: [
          "سير عمل KYC كامل مع تحميل المستندات (تفاصيل البنك، الرخصة، الهوية)",
          "نظام RBAC دقيق: المسؤول، المدقق، المبيعات، التاجر",
          "التوليد التلقائي للعقود مع الختم والتوقيع الرقمي",
          "إمكانية التتبع الكاملة للإجراءات مع سجل التدقيق",
          "الحساب والإدارة الآلية للعمولات متعددة المستويات",
          "واجهة BO للتحقق والتتبع في الوقت الفعلي للتسجيلات"
        ]
      },
      status: 'completed',
      image: '/assets/izipay.jpg',
      links: []
    },
    {
      slug: 'deepinfluence',
      title: {
        fr: 'DeepInfluence',
        en: 'DeepInfluence',
        ar: 'DeepInfluence'
      },
      role: {
        fr: 'Backend Lead Developer',
        en: 'Backend Lead Developer',
        ar: 'مطور رئيسي Backend'
      },
      period: '2023',
      stack: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth.js', 'Stripe'],
      summary: {
        fr: "Marketplace d'experts avec réservation de sessions vidéo, système de coins et profils multilingues.",
        en: "Expert marketplace with video session booking, coin system and multilingual profiles.",
        ar: "سوق الخبراء مع حجز جلسات الفيديو، نظام العملات والملفات الشخصية متعددة اللغات."
      },
      keyFacts: {
        fr: [
          "29 endpoints backend REST API avec authentification JWT",
          "Système de coins virtuels pour paiements internes",
          "Réservation et gestion de sessions vidéo en temps réel",
          "Profils experts multilingues avec catégories et tags",
          "Intégration NextAuth pour authentification sociale",
          "Architecture prête pour intégration Stripe"
        ],
        en: [
          "29 REST API backend endpoints with JWT authentication",
          "Virtual coin system for internal payments",
          "Real-time video session booking and management",
          "Multilingual expert profiles with categories and tags",
          "NextAuth integration for social authentication",
          "Architecture ready for Stripe integration"
        ],
        ar: [
          "29 نقطة نهاية API REST خلفية مع مصادقة JWT",
          "نظام العملات الافتراضية للمدفوعات الداخلية",
          "حجز وإدارة جلسات الفيديو في الوقت الفعلي",
          "ملفات تعريف الخبراء متعددة اللغات مع الفئات والعلامات",
          "تكامل NextAuth للمصادقة الاجتماعية",
          "هندسة جاهزة لتكامل Stripe"
        ]
      },
      status: 'development',
      image: '/assets/deepinfluence.jpg',
      links: []
    },
    {
      slug: 'whatsapp-agent-auto-parts',
      title: {
        fr: 'Agent WhatsApp Pièces Auto',
        en: 'WhatsApp Auto Parts Agent',
        ar: 'وكيل WhatsApp لقطع غيار السيارات'
      },
      role: {
        fr: 'Architecte IA & Developer',
        en: 'AI Architect & Developer',
        ar: 'مهندس معماري للذكاء الاصطناعي ومطور'
      },
      period: '2024',
      stack: ['C# ASP.NET', 'Node.js', 'wa-automate', 'OpenRouter', 'Qwen2.5', 'SQL Server'],
      summary: {
        fr: "Agent conversationnel WhatsApp intelligent pour recherche de pièces automobiles avec extraction de références, vérification stock/prix et suggestions alternatives.",
        en: "Intelligent WhatsApp conversational agent for auto parts search with reference extraction, stock/price verification and alternative suggestions.",
        ar: "وكيل محادثة WhatsApp ذكي للبحث عن قطع غيار السيارات مع استخراج المراجع، التحقق من المخزون / السعر والاقتراحات البديلة."
      },
      keyFacts: {
        fr: [
          "Extraction automatique références pièces depuis messages texte et images",
          "Requêtes SQL Server temps réel pour disponibilité et prix",
          "Suggestions alternatives par Code_Origine pour pièces équivalentes",
          "Support multilingue FR/AR/EN via modèle Qwen2.5",
          "Architecture hybride C# backend + Node.js WhatsApp",
          "Traitement d'images pour reconnaître références sur photos pièces"
        ],
        en: [
          "Automatic extraction of part references from text messages and images",
          "Real-time SQL Server queries for availability and prices",
          "Alternative suggestions by Code_Origine for equivalent parts",
          "FR/AR/EN multilingual support via Qwen2.5 model",
          "Hybrid architecture C# backend + Node.js WhatsApp",
          "Image processing to recognize references on part photos"
        ],
        ar: [
          "الاستخراج التلقائي لمراجع القطع من الرسائل النصية والصور",
          "استعلامات SQL Server في الوقت الفعلي للتوافر والأسعار",
          "الاقتراحات البديلة بواسطة Code_Origine للقطع المكافئة",
          "دعم متعدد اللغات FR/AR/EN عبر نموذج Qwen2.5",
          "هندسة هجينة C# backend + Node.js WhatsApp",
          "معالجة الصور للتعرف على المراجع على صور القطع"
        ]
      },
      status: 'production',
      image: '/assets/whatsapp-agent.jpg',
      links: []
    },
    {
      slug: 'taekwondo-tournament-app',
      title: {
        fr: 'App Tournois Taekwondo',
        en: 'Taekwondo Tournament App',
        ar: 'تطبيق بطولات التايكواندو'
      },
      role: {
        fr: 'Fondateur & Developer',
        en: 'Founder & Developer',
        ar: 'المؤسس والمطور'
      },
      period: '2022 - 2023',
      stack: ['React', 'Firebase', 'MongoDB', 'SVG', 'WebSockets'],
      summary: {
        fr: "Application web de gestion de tournois de Taekwondo avec brackets d'élimination, suivi temps réel des scores et gestion des rôles.",
        en: "Taekwondo tournament management web app with elimination brackets, real-time score tracking and role management.",
        ar: "تطبيق ويب لإدارة بطولات التايكواندو مع أقواس الإقصاء، تتبع النتائج في الوقت الفعلي وإدارة الأدوار."
      },
      keyFacts: {
        fr: [
          "Génération automatique brackets élimination simple/double en SVG",
          "Mise à jour temps réel des scores avec synchronisation multi-appareils",
          "Gestion des rôles : Arbitre, Juge, Admin, Spectateur",
          "Migration Firebase vers MongoDB pour scalabilité",
          "Affichage visuel optimisé pour écrans de compétition",
          "Export PDF des résultats et classements finaux"
        ],
        en: [
          "Automatic generation of single/double elimination brackets in SVG",
          "Real-time score updates with multi-device synchronization",
          "Role management: Referee, Judge, Admin, Spectator",
          "Firebase to MongoDB migration for scalability",
          "Visual display optimized for competition screens",
          "PDF export of results and final rankings"
        ],
        ar: [
          "التوليد التلقائي لأقواس الإقصاء الفردي / المزدوج في SVG",
          "تحديثات النتائج في الوقت الفعلي مع مزامنة متعددة الأجهزة",
          "إدارة الأدوار: الحكم، القاضي، المسؤول، المتفرج",
          "الترحيل من Firebase إلى MongoDB لقابلية التوسع",
          "عرض مرئي محسّن لشاشات المنافسة",
          "تصدير PDF للنتائج والتصنيفات النهائية"
        ]
      },
      status: 'production',
      image: '/assets/taekwondo-app.jpg',
      links: []
    },
    {
      slug: 'zitouna-izi-queue',
      title: {
        fr: "File d'attente Zitouna Izi",
        en: 'Zitouna Izi Queue System',
        ar: 'نظام طابور الزيتونة إيزي'
      },
      role: {
        fr: 'Lead Full-Stack Developer',
        en: 'Lead Full-Stack Developer',
        ar: 'مطور رئيسي Full-Stack'
      },
      period: '2021',
      stack: ['React', 'Firebase', 'MongoDB', 'WebSockets', 'React Native'],
      summary: {
        fr: "Système complet de gestion de file d'attente bancaire avec bornes, interface guichetier, app mobile et appel audio automatisé.",
        en: "Complete bank queue management system with kiosks, teller interface, mobile app and automated audio calling.",
        ar: "نظام كامل لإدارة طابور البنك مع الأكشاك، واجهة الصراف، تطبيق الهاتف المحمول والاتصال الصوتي الآلي."
      },
      keyFacts: {
        fr: [
          "Bornes interactives pour prise de tickets avec sélection service",
          "Interface guichetier pour appel clients avec notification audio",
          "App mobile pour réservation à distance et notification tour",
          "Migration Firebase vers MongoDB pour gestion haute charge",
          "WebSockets pour synchronisation temps réel bornes/guichets",
          "Statistiques temps d'attente et performance guichetiers"
        ],
        en: [
          "Interactive kiosks for ticket taking with service selection",
          "Teller interface for calling customers with audio notification",
          "Mobile app for remote reservation and turn notification",
          "Firebase to MongoDB migration for high load management",
          "WebSockets for real-time synchronization kiosks/tellers",
          "Wait time statistics and teller performance"
        ],
        ar: [
          "أكشاك تفاعلية لأخذ التذاكر مع اختيار الخدمة",
          "واجهة الصراف لاستدعاء العملاء مع إشعار صوتي",
          "تطبيق الهاتف المحمول للحجز عن بعد وإشعار الدور",
          "الترحيل من Firebase إلى MongoDB لإدارة الحمل العالي",
          "WebSockets للمزامنة في الوقت الفعلي للأكشاك / الصرافين",
          "إحصائيات وقت الانتظار وأداء الصرافين"
        ]
      },
      status: 'completed',
      image: '/assets/queue-system.jpg',
      links: []
    },
    {
      slug: 'optilux',
      title: {
        fr: 'OptiLux',
        en: 'OptiLux',
        ar: 'OptiLux'
      },
      role: {
        fr: 'Full-Stack Developer',
        en: 'Full-Stack Developer',
        ar: 'مطور Full-Stack'
      },
      period: '2022',
      stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Paymee', 'Konnect'],
      summary: {
        fr: "E-commerce optique avec gestion de variantes (montures, verres), upload ordonnances et intégration paiements tunisiens.",
        en: "Optical e-commerce with variant management (frames, lenses), prescription upload and Tunisian payment integration.",
        ar: "التجارة الإلكترونية البصرية مع إدارة المتغيرات (الإطارات، العدسات)، تحميل الوصفات الطبية وتكامل الدفع التونسي."
      },
      keyFacts: {
        fr: [
          "Système de variantes complexe : montures × verres × traitements",
          "Upload et gestion d'ordonnances médicales sécurisées",
          "Intégration Paymee et Konnect pour paiement local",
          "Catalogue produits avec filtres multi-critères avancés",
          "Calcul automatique prix selon options sélectionnées",
          "Interface responsive optimisée pour mobile"
        ],
        en: [
          "Complex variant system: frames × lenses × treatments",
          "Upload and management of secure medical prescriptions",
          "Paymee and Konnect integration for local payment",
          "Product catalog with advanced multi-criteria filters",
          "Automatic price calculation based on selected options",
          "Responsive interface optimized for mobile"
        ],
        ar: [
          "نظام متغيرات معقد: الإطارات × العدسات × العلاجات",
          "تحميل وإدارة الوصفات الطبية الآمنة",
          "تكامل Paymee و Konnect للدفع المحلي",
          "كتالوج المنتجات مع مرشحات متعددة المعايير المتقدمة",
          "حساب السعر التلقائي بناءً على الخيارات المحددة",
          "واجهة متجاوبة محسّنة للهاتف المحمول"
        ]
      },
      status: 'completed',
      image: '/assets/optilux.jpg',
      links: []
    },
    {
      slug: 'obd2-telemetry',
      title: {
        fr: 'OBD-II Télémétrie',
        en: 'OBD-II Telemetry',
        ar: 'قياس عن بعد OBD-II'
      },
      role: {
        fr: 'IoT Developer',
        en: 'IoT Developer',
        ar: 'مطور إنترنت الأشياء'
      },
      period: '2020',
      stack: ['C#', 'OBD-II', 'SQL Server', 'Serial Communication'],
      summary: {
        fr: "Système de télémétrie véhicule pour lecture kilométrage temps réel via OBD-II et envoi périodique vers base de données distante.",
        en: "Vehicle telemetry system for real-time mileage reading via OBD-II and periodic sending to remote database.",
        ar: "نظام قياس عن بعد للسيارة لقراءة الأميال في الوقت الفعلي عبر OBD-II وإرسال دوري إلى قاعدة بيانات بعيدة."
      },
      keyFacts: {
        fr: [
          "Lecture temps réel kilométrage via protocole OBD-II",
          "Communication série avec adaptateur ELM327",
          "Envoi automatisé données vers SQL Server distant",
          "Gestion de la reconnexion automatique en cas de perte connexion",
          "Interface de monitoring temps réel",
          "Support multi-véhicules avec identification unique"
        ],
        en: [
          "Real-time mileage reading via OBD-II protocol",
          "Serial communication with ELM327 adapter",
          "Automated data sending to remote SQL Server",
          "Automatic reconnection management in case of connection loss",
          "Real-time monitoring interface",
          "Multi-vehicle support with unique identification"
        ],
        ar: [
          "قراءة الأميال في الوقت الفعلي عبر بروتوكول OBD-II",
          "الاتصال التسلسلي مع محول ELM327",
          "إرسال البيانات الآلي إلى SQL Server البعيد",
          "إدارة إعادة الاتصال التلقائي في حالة فقدان الاتصال",
          "واجهة المراقبة في الوقت الفعلي",
          "دعم متعدد المركبات مع تحديد فريد"
        ]
      },
      status: 'completed',
      image: '/assets/obd2.jpg',
      links: []
    }
  ],

  // Expériences
  experiences: [
    {
      company: 'Mecacentre',
      role: {
        fr: 'CTO - Chief Technology Officer',
        en: 'CTO - Chief Technology Officer',
        ar: 'مدير التكنولوجيا'
      },
      period: {
        start: '2025-04',
        end: null
      },
      location: 'Tunis, Tunisie',
      description: {
        fr: "Direction technique et architecture des solutions DMS. Développement d'agents IA conversationnels pour automatisation des interactions clients via WhatsApp. Supervision de l'infrastructure cloud et DevOps.",
        en: "Technical direction and DMS solution architecture. Development of conversational AI agents for automating customer interactions via WhatsApp. Cloud infrastructure and DevOps supervision.",
        ar: "الإدارة التقنية وهندسة حلول DMS. تطوير وكلاء الذكاء الاصطناعي المحادثة لأتمتة تفاعلات العملاء عبر WhatsApp. الإشراف على البنية التحتية السحابية و DevOps."
      }
    },
    {
      company: 'Winsoft Informatique Tunisie',
      role: {
        fr: 'Ingénieur Développeur Logiciel',
        en: 'Software Engineer',
        ar: 'مهندس برمجيات'
      },
      period: {
        start: '2013-04',
        end: '2025-03'
      },
      location: 'Tunis, Tunisie',
      description: {
        fr: "Développement d'applications web et desktop avec .NET et JavaScript. Conception et mise en œuvre de solutions métier sur mesure. Intégration de systèmes de paiement et APIs tierces. Mentorat développeurs juniors.",
        en: "Development of web and desktop applications with .NET and JavaScript. Design and implementation of custom business solutions. Integration of payment systems and third-party APIs. Mentoring junior developers.",
        ar: "تطوير تطبيقات الويب وسطح المكتب باستخدام .NET و JavaScript. تصميم وتنفيذ حلول الأعمال المخصصة. تكامل أنظمة الدفع وواجهات برمجة التطبيقات التابعة لجهات خارجية. توجيه المطورين المبتدئين."
      }
    },
    {
      company: 'MG Software Solutions (MG2S)',
      role: {
        fr: 'Fondateur & Entrepreneur',
        en: 'Founder & Entrepreneur',
        ar: 'المؤسس ورائد الأعمال'
      },
      period: {
        start: '2020',
        end: null
      },
      location: 'Tunis, Tunisie',
      description: {
        fr: "Création et développement de produits SaaS pour le marché tunisien : MegaFacture, OptiLux, DeepInfluence. Consulting technique pour startups et PME. Intégrations paiements locaux (Paymee, Konnect, IZI Pay).",
        en: "Creation and development of SaaS products for the Tunisian market: MegaFacture, OptiLux, DeepInfluence. Technical consulting for startups and SMEs. Local payment integrations (Paymee, Konnect, IZI Pay).",
        ar: "إنشاء وتطوير منتجات SaaS للسوق التونسي: MegaFacture، OptiLux، DeepInfluence. الاستشارات التقنية للشركات الناشئة والشركات الصغيرة والمتوسطة. تكاملات الدفع المحلية (Paymee، Konnect، IZI Pay)."
      }
    },
    {
      company: 'Fédération Tunisienne de Taekwondo',
      role: {
        fr: 'Coach & Responsable Projets Sportifs',
        en: 'Coach & Sports Project Manager',
        ar: 'مدرب ومدير المشاريع الرياضية'
      },
      period: {
        start: '2015',
        end: null
      },
      location: 'Tunis, Tunisie',
      description: {
        fr: "Encadrement technique de compétiteurs. Organisation et gestion de tournois régionaux. Développement d'applications de gestion de compétitions (brackets, scores, classements).",
        en: "Technical coaching of competitors. Organization and management of regional tournaments. Development of competition management applications (brackets, scores, rankings).",
        ar: "التدريب الفني للمتنافسين. تنظيم وإدارة البطولات الإقليمية. تطوير تطبيقات إدارة المسابقات (الأقواس، النتائج، التصنيفات)."
      }
    }
  ],

  // Liens sociaux
  social: {
    github: 'https://github.com/montassar-touati',
    linkedin: 'https://linkedin.com/in/montassar-touati',
    twitter: 'https://twitter.com/montassar_touati',
    facebook: 'https://facebook.com/montassar.touati'
  }
};
