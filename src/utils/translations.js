// CAUTION! ! ! 
// object keys starting with 'p' will be populated as <p>
// object keys starting with 'ul' will be populated as bullets <li>
// CAUTION! ! ! 

const translations = {
  en: {
    welcome: 'Welcome to our Virtual Assistant Site!',
    description: 'We provide professional virtual assistant services to help you with your tasks.',
    getStarted: 'Get Started',
    home: 'Home',
    services: 'Services',
    pricing: 'Price list',
    about: 'About me',
    portfolio: 'Portfolio',
    contact: 'Contact',

    homeTitle: 'Why do you need Virtual Assistant?',
    homeText: {
      p1: `Are administrative tasks bogging down your business? Is keeping up with data checks and updates, mailbox maintenance, and social media becoming overwhelming? ` +
        `Look no further! I'm here to provide the right solutions to propel your business in the right direction.`,
      p2: `I understand the challenges that come with running a business. I know that your time is valuable and should be spent on core activities that drive growth. ` +
        `That's where your virtual assistant come in.`,
      p3: `With my expertise as a virtual assistant, I specialize in handling administrative tasks, ensuring that your business operates smoothly and efficiently. ` +
        `Need someone to meticulously check and update your data? I've got you covered. Tired of juggling multiple mailboxes and struggling to stay on top of customer inquiries? ` +
        `Leave it to me. Seeking to establish a strong online presence through social media but lack the time and expertise? Consider it done.`,
      p4: `But I'm more than just a solution provider. I'm your dedicated partner in success. When you work with me, you gain access to someone who genuinely cares about your business. ` +
        `I take the time to understand your unique needs, goals, and brand identity, ensuring that my services align perfectly with your vision.`,
      p5: `Imagine having more time and peace of mind, knowing that your administrative tasks are being handled flawlessly. ` +
        `Picture your business flourishing as I expertly manage your data, keep your mailboxes organized, and create engaging social media content.`,
      p6: `So, are you ready to take your business to new heights? Let's embark on this journey together. ` +
        `Contact me today, and let's discuss how my tailored solutions can propel your business forward. Your success is my passion, and I can't wait to be a part of it.`,
    },

    homeCarouselTitle1: 'Reliability',
    homeCarouselDescription1: `I am unwavering in my commitment to excellence and consistently going to ensure your tasks are not only completed on time but with precision. ` +
      `You can rely on me to deliver outstanding results, leaving no room for doubt or disappointment.`,
    homeCarouselTitle2: 'Independence',
    homeCarouselDescription2: `Embracing a perpetual journey of self-improvement, I consistently engage in learning and attend courses to refine my skills. ` +
      `My meticulous attention to detail ensures a comprehensive and thorough approach to all assignments.`,
    homeCarouselTitle3: 'Time Liberation',
    homeCarouselDescription3: `Imagine the precious hours that could be reclaimed for business expansion, prioritizing crucial activities, or even indulging in some well-deserved personal time. ` +
      `By availing my services, entrepreneurs can unlock a wealth of time and redirect it towards what truly matters.`,
    homeCarouselTitle4: 'Financial Efficiency',
    homeCarouselDescription4: `One of the most appealing aspects of working with a virtual assistant is the cost-effectiveness. ` +
      `With a virtual assistant, you pay only for the specific services you require. Say goodbye to expenses related to taxes, office equipment, and training. ` +
      `Compared to hiring an employee, the additional overhead costs vanish into thin air, as everything is taken care of independently.`,
    homeCarouselTitle5: 'Preventing Burnout',
    homeCarouselDescription5: `Entrepreneurs often face the overwhelming challenge of juggling multiple priorities, leaving them susceptible to burnout. ` +
      `Enter the virtual assistant, the solution to this very problem. By entrusting me with your workload, ` +
      `you can free yourself to concentrate solely on tasks that demand your unique professional expertise.`,


    ourServices: 'My Services',

    administration: 'Administration',
    administrationSubtitle: 'Do you need help with administration?',
    administrationText: `My range of services includes, for example: Online information search, ` +
      `Data management, Calendar management, Document editing, Reports, Market research, Document processing, Data entry.`,
    administrationFoot: 'Let me know how I can help you!',

    social: 'Social media management',
    socialSubtitle: `If you do not have time to manage your social networks, I would like to offer you my services in the field of graphic and text processing of posts. ` +
      `The posts will be aimed at engaging your target group and also attracting new clients.`,
    socialText: `Creation of posts, stories, reels. Marketing strategy design, sales communication of services or products, ` +
      `interaction with customers, organization of competitions, responding to messages and comments.`,
    socialFoot: '',

    eshop: 'Web and e-shop management',
    eshopSubtitlle: `Are you an entrepreneur and manage your e-shop yourself? Does it take a lot of time? I will be happy to help you with this and relieve you of this duty.`,
    eshopText: `Administration of your website or e-shop. Adding products, creating descriptions, creating content and graphics, communicating with clients via chat.`,
    eshopFoot: '',

    grafic: 'Graphic design',
    graficSubtitle: `Regardless of whether you need a professional custom logo or a design for invitations, flyers, ` +
      `business cards, announcements or a menu or price list for a beauty salon, I'm here for you. ` +
      `Just provide me with the details of your requirements and we can start working on creating a professional design that suits your needs.`,
    graficText: `Logo, Packaging and product design, Digital products, Marketing materials, Printed materials, ` +
      `Advertising materials (banners), Business/event posters, Food and beverage menus, Price lists, Event invitations, ` +
      `Announcements, FB/IG post design, Photo editing, videos, inserting subtitles.`,
    graficFoot: '',

    texts: 'Texts & Translations',
    textsSubtitle: `If you find it difficult to deal with texts or translations, leave it to me. ` +
      `Whether you need texts for the website, for advertising or you need to create a script for addressing clients. ` +
      `In addition to regular translations, as a Master in molecular biology, I also offer translations of professional biological texts for your publications, ` +
      `or help with the preparation of documents, literature searches and language proofreading.`,
    textsText: `Creation and planning of content, articles, posts texting (editing articles and second eyes in case of possible errors in your text), ` +
      `graphics, rewriting (documents, podcasts or video recordings), creating clear tables or customer databases.`,
    textsFoot: '',

    lucky: "Didn't find what you need?",
    luckySubtitle: `I am here to help you in various areas and I am constantly learning so I can expand my skills and offers.`,
    luckyText: `If you have other tasks or projects, please do not hesitate to contact me and we will arrange a free initial consultation. ` +
      `During the consultation, we can talk about your needs and find out if and how I could help you.`,
    luckyFoot: '',


    priceText1: {
      p1: "Before ordering any service, you are entitled to a free initial consultation. \nI offer a basic price list of monthly packages.",
      p2: "",
    },
    priceText2: {
      p1: `If you did not find a package that would meet your needs in our virtual assistant price list, ` +
        `I can prepare a special service package for you that will be completely adapted to your individual requirements.`,
    },

    priceStartTitle: "Start",
    priceStartSubtitle: "€300 / Month",
    priceStartContent: {
      ul1: "20 hours",
      ul2: "€15.00 / hour",
      ul3: "This package includes all services of a virtual assistant",
      // ul4: "Flight tickets",
      // ul5: "Flowers for the metress",

    },
    priceExtraTitle: "Extra",
    priceExtraSubtitle: "€560 / Month",
    priceExtraContent: {
      ul1: "40 hours",
      ul2: "€14.00 / hour",
      ul3: "This package includes all services of a virtual assistant",
      // ul4: "Flight tickets",
      // ul5: "Flowers for the metress",

    },
    pricePremiumTitle: "Premium",
    pricePremiumSubtitle: "€828 / Month",
    pricePremiumContent: {
      ul1: "60 hours",
      ul2: "€13.80 / hour",
      ul3: "This package includes all services of a virtual assistant",
      // ul4: "Flight tickets",
      // ul5: "Flowers for the metress",

    },
    priceSocialMediaTitle: "Social Media",
    priceSocialMediaSubtitle: "€350 / Month",
    priceSocialMediaContent: {
      ul1: "Creation of posts, stories, reels",
      ul2: "Responding to comments and messages",
      ul3: "Organisation of competitions",
      // ul4: "Flight tickets",
      // ul5: "Flowers for the metress",

    },



    aboutTitle: 'Who is your Virtual Assistant ?',
    aboutText1: {
      p1: `Once upon a time, I found myself caught up in the corporate world, ` +
        `doing well in a back-office job that allowed me to thrive with minimal supervision. ` +
        `Life was good, until a new manager arrived, bringing along ` +
        `a micromanagement style that suffocated my independence and creativity.`,
      p2: `That's when I knew I had to break free. ` +
        `I went on a quest to find a job that would give me the freedom I craved. ` +
        `I hopped from one company to another, always learning and adapting quickly to new roles. ` +
        `But something was missing. I would finish my work at lightning speed and rigorously, without being noticed and I couldn't shake the feeling that I had so much more to offer. ` +
        `I couldn't shake the feeling that I had so much more to give.`,
      p3: `And then it hit me: Why not take matters into my own hands? ` +
        `I made the bold decision to become self-employed, believing that my skills would flourish in helping businesses grow.`,

    },
    aboutText2: {
      p1: `Now, as a virtual assistant, I'm not just another face in a corporate machine. ` +
        `I'm here to offer a personal touch, a genuine connection, and a dedication to your success. ` +
        `I want to be more than just a service provider; I want to be your trusted partner.`,
      p2: `When you choose to work with me, you're not hiring a nameless entity or a faceless organization. ` +
        `You're choosing someone who understands the challenges and frustrations of being constrained in a traditional work environment. ` +
        `You're choosing someone who believes that true success lies in the freedom to explore, create, and make a meaningful impact.`,
      p3: `I'll bring my efficiency, resourcefulness, and passion to the table, ` +
        `so you can focus on what you do best while knowing that the administrative side is in expert hands.`,

    },



    contactTitle: 'Call now!',
    contactMeText: "If you are interested in cooperation or have any questions about the services, please do not hesitate to contact me.",
    contactMessage: "Drop me a message...",
    notFound: 'Page not found! 404',
  },







  de: {
    welcome: 'Willkommen auf unserer Virtuellen Assistenten Seite!',
    description: 'Wir bieten professionelle Virtuelle Assistenten Services, um Ihnen bei Ihren Aufgaben zu helfen.',
    getStarted: 'Loslegen',
    home: 'Startseite',
    services: 'Leistungen',
    pricing: 'Preise',
    about: 'Über mich',
    portfolio: 'Portfolio',
    contact: 'Kontakt',

    homeTitle: 'Warum brauchen Sie einen virtuellen Assistenten?',
    homeText: {
      p1: `Behindern Verwaltungsaufgaben Ihr Unternehmen? Wird es überwältigend, mit Datenprüfungen und -aktualisierungen, ` +
        `Postfachpflege und sozialen Medien Schritt zu halten? Suchen Sie nicht weiter! ` +
        `Ich bin hier, um Ihnen die richtigen Lösungen zu bieten, die Ihr Unternehmen in die richtige Richtung bringen.`,
      p2: `Ich verstehe die Herausforderungen, die mit der Führung eines Unternehmens einhergehen. ` +
        `Ich weiß, dass Ihre Zeit wertvoll ist und für Kernaktivitäten verwendet werden sollte, die das Wachstum vorantreiben. ` +
        `Hier kommt Ihr virtueller Assistent ins Spiel.`,
      p3: `Mit meinem Fachwissen als virtueller Assistent bin ich auf die Abwicklung administrativer Aufgaben spezialisiert und stelle sicher, ` +
        `dass Ihr Unternehmen reibungslos und effizient läuft. Brauchen Sie jemanden, der Ihre Daten sorgfältig überprüft und aktualisiert?`,
      p4: `Aber ich bin mehr als nur ein Lösungsanbieter. Ich bin Ihr engagierter Partner für den Erfolg. ` +
        `Wenn Sie mit mir zusammenarbeiten, erhalten Sie Zugang zu jemandem, dem Ihr Unternehmen wirklich am Herzen liegt. ` +
        `Ich nehme mir die Zeit, Ihre individuellen Bedürfnisse, Ziele und Markenidentität zu verstehen und sicherzustellen, ` +
        `dass meine Dienstleistungen perfekt zu Ihrer Vision passen.`,
      p5: `Stellen Sie sich vor, dass Sie mehr Zeit und Sicherheit haben und wissen, dass Ihre Verwaltungsaufgaben einwandfrei erledigt werden. ` +
        `Stellen Sie sich vor, dass Ihr Unternehmen floriert, während ich Ihre Daten fachmännisch verwalte, ` +
        `Ihre Postfächer organisiert halte und ansprechende Social-Media-Inhalte erstelle.`,
      p6: `Sind Sie bereit, Ihr Unternehmen zu neuen Höhen zu führen? Lassen Sie uns gemeinsam auf diese Reise gehen. ` +
        `Kontaktieren Sie mich noch heute und lassen Sie uns besprechen, wie meine maßgeschneiderten Lösungen Ihr Unternehmen voranbringen können. ` +
        `Ihr Erfolg ist meine Leidenschaft und ich kann es kaum erwarten, ein Teil davon zu sein.`,
    },

    // homeCarouselTitle1: '',
    // homeCarouselDescription1: '',
    // homeCarouselTitle2: '',
    // homeCarouselDescription2: '',
    // homeCarouselTitle3: '',
    // homeCarouselDescription3: '',
    // homeCarouselTitle4: '',
    // homeCarouselDescription4: '',
    // homeCarouselTitle5: '',
    // homeCarouselDescription5: '',

    homeCarouselTitle1: "Zuverlässigkeit",
    homeCarouselDescription1: `Ich bin unerschütterlich in meinem Streben nach Exzellenz und werde stets dafür sorgen, dass Ihre Aufgaben nicht nur pünktlich, ` +
      `sondern auch präzise erledigt werden. Sie können sich darauf verlassen, dass ich hervorragende Ergebnisse liefere und keinen Raum für Zweifel oder Enttäuschung lässt.`,
    homeCarouselTitle2: "Unabhängigkeit",
    homeCarouselDescription2: `Ich unternehme eine ständige Reise der Selbstverbesserung, lerne ständig weiter und besuche Kurse, um meine Fähigkeiten zu verfeinern. ` +
      `Meine akribische Liebe zum Detail gewährleistet eine umfassende und gründliche Herangehensweise an alle Aufgaben.`,
    homeCarouselTitle3: "Zeitbefreiung",
    homeCarouselDescription3: `Stellen Sie sich die kostbaren Stunden vor, die Sie für die Geschäftsausweitung, die Priorisierung wichtiger ` +
      `Aktivitäten oder sogar für das Genießen der wohlverdienten persönlichen Zeit zurückgewinnen könnten. Durch die Inanspruchnahme meiner ` +
      `Dienste können Unternehmer viel Zeit freisetzen und sie auf das Wesentliche konzentrieren.`,
    homeCarouselTitle4: "Finanzielle Effizienz",
    homeCarouselDescription4: `Einer der attraktivsten Aspekte der Arbeit mit einem virtuellen Assistenten ist die Kosteneffizienz. ` +
      `Mit einem virtuellen Assistenten zahlen Sie nur für die spezifischen Dienste, die Sie benötigen. Verabschieden Sie sich von den Ausgaben für Steuern, ` +
      `Büroausstattung und Schulung. Im Vergleich zur Einstellung eines Mitarbeiters lösen sich die zusätzlichen Gemeinkosten in Luft auf, da alles selbstständig erledigt wird.`,
    homeCarouselTitle5: "Burnout verhindern",
    homeCarouselDescription5: `Unternehmer stehen oft vor der überwältigenden Herausforderung, mehrere Prioritäten unter einen Hut zu bringen, ` +
      `was sie anfällig für Burnout macht. Betreten Sie den virtuellen Assistenten, die Lösung für genau dieses Problem. Indem Sie mir Ihr ` +
      `Arbeitspensum anvertrauen, können Sie sich ganz auf Aufgaben konzentrieren, die Ihre einzigartige Fachkompetenz erfordern.`,



    ourServices: 'Meine Dienstleistungen',

    administration: 'Büroarbeiten',
    administrationSubtitle: 'Benötigen Sie Hilfe bei der Administration?',
    administrationText: `Mein Leistungsspektrum umfasst zum Beispiel: Online-Informationssuche, Datenverwaltung, ` +
      `Kalenderverwaltung, Dokumentenbearbeitung, Berichte, Marktforschung, Dokumentenbearbeitung, Dateneingabe in das System.`,
    administrationFoot: 'Lassen Sie mich bitte wissen, wie ich ihnen helfen kann!',

    social: 'Social Media Betreuung',
    socialSubtitle: `Wenn Sie keine Zeit haben, Ihre sozialen Netzwerke zu verwalten, biete ich Ihnen gerne meine Dienste im Bereich ` +
      `der grafischen und textlichen Bearbeitung von Beiträgen an. Meine Beiträge zielen darauf ab, Ihre Zielgruppe anzusprechen und auch neue Kunden zu gewinnen.`,
    socialText: `Erstellung von Beiträgen, Stories, Reels. Gestaltung von Marketingstrategien, Verkaufskommunikation von Dienstleistungen ` +
      `oder Produkten, Interaktion mit Kunden, Organisation von Wettbewerben, Beantwortung von Nachrichten und Kommentaren.`,
    socialFoot: '',

    eshop: 'Web- und E-Shop-Management',
    eshopSubtitlle: 'Sie sind Unternehmer und verwalten Ihren E-Shop selbst? Braucht es viel Zeit? Gerne helfe ich Ihnen dabei und entbinde Sie von dieser Pflicht.',
    eshopText: 'Verwaltung Ihrer Website oder Ihres E-Shops. Produkte hinzufügen, Beschreibungen erstellen, Inhalte und Grafiken erstellen, mit Kunden per Chat kommunizieren.',
    eshopFoot: '',

    grafic: 'Grafik-Design',
    graficSubtitle: `Ganz gleich, ob Sie ein professionelles individuelles Logo oder ein Design für Einladungen, Flyer, Visitenkarten, ` +
      `Ankündigungen oder eine Speisekarte oder Preisliste für einen Schönheitssalon benötigen, ich bin für Sie da. ` +
      `Teilen Sie mir einfach die Einzelheiten Ihrer Anforderungen mit und wir können mit der Erstellung eines professionellen Designs beginnen, das Ihren Anforderungen entspricht.`,
    graficText: `Logo, Verpackungs- und Produktdesign, digitale Produkte, Marketingmaterialien, gedruckte Materialien, Werbematerialien (Banner), ` +
      `Geschäfts-/ Veranstaltungsplakate, Speise- und Getränkekarten, Preislisten, Veranstaltungseinladungen, Ankündigungen, FB/IG-Postdesign, Fotobearbeitung, Videos, Untertitel einfügen.`,
    graficFoot: '',

    texts: 'Texte & Übersetzungen',
    textsSubtitle: `Wenn Sie Schwierigkeiten haben, mit Texten oder Übersetzungen umzugehen, überlassen Sie es mich. ` +
      `Egal, ob Sie Texte für die Website benötigen, für Werbung oder ein Skript zur Kundenansprache erstellen müssen. ` +
      `Neben regulären Übersetzungen biete ich als Master in Molekularbiologie auch Übersetzungen professioneller biologischer Texte für Ihre Publikationen an, ` +
      `oder Hilfe bei der Erstellung von Dokumenten, Literaturrecherchen und Sprachkorrekturen. `,
    textsText: `Erstellung und Planung von Inhalten, Artikeln, Textbeiträgen (Bearbeitung von Artikeln und zweite Augen bei möglichen Fehlern in Ihrem Text), ` +
      `Grafiken, Umschreiben (Dokumente, Podcasts oder Videoaufzeichnungen), Erstellen übersichtlicher Tabellen oder Kundendatenbanken.`,
    textsFoot: '',

    lucky: 'Haben Sie nicht gefunden, was Sie brauchen?',
    luckySubtitle: 'Ich bin in verschiedenen Bereichen für Sie da und lerne ständig weiter, um meine Fähigkeiten und Angebote zu erweitern.',
    luckyText: `Wenn Sie weitere Aufgaben oder Projekte haben, nehmen Sie gerne Kontakt zu mir auf und wir vereinbaren ein kostenloses Erstgespräch. ` +
      `Im Beratungsgespräch können wir über Ihre Bedürfnisse sprechen und herausfinden, ob und wie ich Ihnen helfen kann.`,
    luckyFoot: '',




    priceText1: {
      p1: `Vor der Bestellung einer Dienstleistung haben Sie Anspruch auf eine kostenlose Erstberatung. \nIch biete eine Grundpreisliste mit monatlichen Paketen an.`,
      p2: "",
    },
    priceText2: {
      p1: `Wenn Sie in unserer Preisliste für virtuelle Assistenten kein Paket gefunden haben, das Ihren Anforderungen entspricht, ` +
        `kann ich für Sie ein spezielles Leistungspaket zusammenstellen, das vollständig an Ihre individuellen Anforderungen angepasst wird.`,
    },

    priceStartTitle: "Start",
    priceStartSubtitle: "300 € / Monat",
    priceStartContent: {
      ul1: "20 Stunden",
      ul2: "15,00 € / Stunde",
      ul3: "Dieses Paket beinhaltet alle Dienste eines virtuellen Assistenten",

    },
    priceExtraTitle: "Extra",
    priceExtraSubtitle: "560 € / Monat",
    priceExtraContent: {
      ul1: "40 Stunden",
      ul2: "14,00 € / Stunde",
      ul3: "Dieses Paket beinhaltet alle Dienste eines virtuellen Assistenten",

    },
    pricePremiumTitle: "Premium",
    pricePremiumSubtitle: "828 € / Monat",
    pricePremiumContent: {
      ul1: "60 Stunden",
      ul2: "13,80 € / Stunde",
      ul3: "Dieses Paket beinhaltet alle Dienste eines virtuellen Assistenten",

    },
    priceSocialMediaTitle: "Social Media",
    priceSocialMediaSubtitle: "350 € / Monat",
    priceSocialMediaContent: {
      ul1: "Erstellung von Beiträgen, Stories, Reels",
      ul2: "Auf Kommentare und Nachrichten antworten",
      ul3: "Organisation von Wettbewerben",

    },




    aboutTitle: 'Wer ist Ihr virtueller Assistent ?',
    aboutText1: {
      p1: `Es war einmal, dass ich in der Unternehmenswelt gefangen war und in einem Back-Office-Job gut zurechtkam, ` +
        `der es mir ermöglichte, mit minimaler Aufsicht erfolgreich zu sein. Das Leben war gut, bis ein neuer Manager kam, ` +
        `der einen Mikromanagementstil mitbrachte, der meine Unabhängigkeit und Kreativität erstickte.`,
      p2: `Da wusste ich, dass ich ausbrechen musste. Ich machte mich auf die Suche nach einem Job, ` +
        `der mir die Freiheit geben würde, nach der ich mich sehnte. Ich hüpfte von einem Unternehmen zum anderen, ` +
        `lernte immer und passte mich schnell an neue Rollen an. Aber irgendetwas fehlte. Ich beendete meine Arbeit blitzschnell, ` +
        `nur um leere und banale Stunden zu haben. Ich wurde das Gefühl nicht los, dass ich noch so viel mehr zu geben hatte.`,
      p3: `Und dann wurde mir klar: Warum nehme ich die Sache nicht selbst in die Hand? ` +
        `Ich habe die mutige Entscheidung getroffen, mich selbstständig zu machen, weil ich davon überzeugt war, ` +
        `dass ich mit meinen Fähigkeiten zum Wachstum von Unternehmen beitragen würde.`,

    },
    aboutText2: {
      p1: `Jetzt bin ich als virtueller Assistent nicht nur ein weiteres Gesicht in einer Unternehmensmaschinerie. ` +
        `Ich bin hier, um eine persönliche Note, eine echte Verbindung und ein Engagement für Ihren Erfolg zu bieten. ` +
        `Ich möchte mehr sein als nur ein Dienstleister, ich möchte Ihr vertrauenswürdiger Partner sein.`,
      p2: `Wenn Sie sich für eine Zusammenarbeit mit mir entscheiden, stellen Sie kein namenloses Unternehmen oder eine gesichtslose Organisation ein. ` +
        `Sie entscheiden sich für jemanden, der die Herausforderungen und Frustrationen versteht, die mit den Einschränkungen in einem traditionellen Arbeitsumfeld einhergehen. ` +
        `Sie entscheiden sich für jemanden, der ist davon überzeugt, dass wahrer Erfolg in der Freiheit liegt, zu erforschen, etwas zu erschaffen und eine sinnvolle Wirkung zu erzielen.`,
      p3: `Ich werde meine Effizienz, meinen Einfallsreichtum und meine Leidenschaft einbringen, ` +
        `damit Sie sich auf das konzentrieren können, was Sie am besten können, während Sie wissen, dass die administrative Seite in Expertenhänden liegt.`,

    },

    contactMeText: "Wenn Sie an einer Zusammenarbeit interessiert sind oder Fragen zu den Leistungen haben, können Sie mich gerne kontaktieren.",
    contactMessage: "Schreiben Sie mir eine Nachricht ...",
    notFound: 'Seite nicht gefunden! 404',
  },








  sk: {
    welcome: 'Vitajte na našej stránke o Virtuálnom Asistentovi!',
    description: 'Poskytujeme profesionálne služby virtuálneho asistenta na pomoc s Vašimi úlohami.',
    getStarted: 'Začať',
    home: 'Domov',
    services: 'Služby',
    pricing: 'Cenník',
    about: 'O mne',
    portfolio: 'Portfólio',
    contact: 'Kontakt',

    homeTitle: 'Prečo potrebujete virtuálnu asistentku?',
    homeText: {
      p1: `Zahlcujú Vaše podnikanie administratívne úlohy? Je pre Vás náročné držať krok s kontrolami a aktualizáciami údajov, údržbou mailov a sociálnymi sieťami? Už nehľadajte! Som tu, aby som Vám poskytla správne riešenia, ktoré posunú Vaše podnikanie správnym smerom.`,
      p2: `Rozumiem výzvam, ktoré so sebou prináša podnikanie. Viem, že Váš čas je cenný a mali by ste ho venovať kľúčovým činnostiam, ktoré podporujú jeho rast. Práve tu prichádza na rad Vaša virtuálna asistentka.`,
      p3: `So svojimi odbornými znalosťami ako virtuálna asistentka sa špecializujem na vybavovanie administratívnych úloh, ktoré zaisťujú, aby Vaša firma fungovala hladko a efektívne. Potrebujete niekoho, kto by starostlivo skontroloval a aktualizoval Vaše databázy? Máte ma k dispozícii. Už Vás nebaví žonglovať medzi viacerými mailboxami a snažiť sa udržať si prehľad o otázkach zákazníkov? Nechajte to na mňa. Chcete si vybudovať silnú online stratégiu prostredníctvom sociálnych médií, ale chýba Vám na to čas? Považujte to so mnou za vybavené.`,
      p4: `Nezabúdajte, že som viac než len poskytovateľ služieb. Som Váš oddaný biznis partner na ceste k úspechu. Ak budete so mnou spolupracovať, získate prístup k niekomu, komu na Vašom podnikaní skutočne záleží. Venujem veľa času tomu, aby som pochopila Vaše jedinečné potreby, ciele a identitu značky a zabezpečila, že moje služby budú dokonale zodpovedať Vašej vízii.`,
      p5: `Predstavte si, že máte viac času a pokoja s vedomím, že Vaše administratívne úlohy sú vybavované bezchybne. Predstavte si, že Vaše podnikanie prekvitá, keď odborne spravujem Vaše dáta, udržiavam Váš mailbox organizovaný a vytváram pútavý obsah pre sociálne siete.`,
      p6: `Takže, ste pripravení posunúť svoje podnikanie do nových výšin? Vydajme sa na túto cestu spoločne. Kontaktujte ma ešte dnes a porozprávajme sa o tom, ako môžu moje služby na mieru posunúť Vaše podnikanie vpred. Váš úspech je mojou prioritou a nemôžem sa dočkať, až budem toho súčasťou.`,

    },

    // homeCarouselTitle1: '',
    // homeCarouselDescription1: '',
    // homeCarouselTitle2: '',
    // homeCarouselDescription2: '',
    // homeCarouselTitle3: '',
    // homeCarouselDescription3: '',
    // homeCarouselTitle4: '',
    // homeCarouselDescription4: '',
    // homeCarouselTitle5: '',
    // homeCarouselDescription5: '',

    homeCarouselTitle1: "Spoľahlivosť",
    homeCarouselDescription1: `Som neúnavná vo svojom záväzku k dokonalosti a neustále sa snažím zabezpečiť, aby Vaše úlohy boli dokončené nielen včas, ale aj precízne. Môžete sa na mňa spoľahnúť, že preukážem vynikajúce výsledky a nenechám priestor na pochybnosti alebo sklamanie.`,
    homeCarouselTitle2: "Nezávislosť",
    homeCarouselDescription2: `Prijímajúc večnú cestu sebazdokonaľovania, neustále sa zapájam do vzdelávania a navštevujem kurzy, aby som si zdokonalila svoje zručnosti. Moja starostlivá pozornosť venovaná detailom zabezpečuje komplexný a dôkladný prístup ku všetkým zadaniam.`,
    homeCarouselTitle3: "Získanie času",
    homeCarouselDescription3: `Predstavte si vzácne hodiny, ktoré by ste mohli získať späť na expanziu podnikania, uprednostnenie kľúčových činností alebo dokonca doprianie si zaslúženého osobného času. Využitím mojich služieb môžu podnikatelia získať množstvo času a využiť ho na to, na čom im skutočne záleží.`,
    homeCarouselTitle4: "Finančná efektívnosť",
    homeCarouselDescription4: `Jedným z najatraktívnejších aspektov práce s virtuálnym asistentom je efektívnosť nákladov. S virtuálnym asistentom platíte len za konkrétne služby, ktoré požadujete. Rozlúčte sa s výdavkami súvisiacimi s daňami, kancelárskym vybavením a školením. V porovnaní s prijatím zamestnanca sa dodatočné režijné náklady rozplynú, keďže sa o všetko postarám samostatne.`,
    homeCarouselTitle5: "Prevencia vyhorenia - 'Burnout'",
    homeCarouselDescription5: `Podnikatelia často čelia ohromnej výzve pracovať s viacerými prioritami naraz, takže sú náchylní na vyhorenie. Preto je virtuálny asistent riešením tohto problému. Ak mi zveríte časť svojej pracovnej náplňe, môžete sa oslobodiť a sústrediť sa výlučne na úlohy, ktoré si vyžadujú Vašu jedinečnú profesionálnu odbornosť.`,




    ourServices: 'Moje Služby',

    administration: 'Administratíva',
    administrationSubtitle: 'Potrebujete pomôcť s administratívou?',
    administrationText: `Ponuka mojich služieb zahŕňa napríklad: Vyhľadávanie informácií online, Správa dát, Správa kalendára, Úprava dokumentov, Reporty, Prieskum trhu, Spracovanie dokumentov, Zadávanie údajov do systému.`,
    administrationFoot: 'Dajte mi vedieť, ako Vám môžem pomôcť!',

    social: 'Správa sociálnych sieti',
    socialSubtitle: `Ak nemáte čas na správu svojich sociálnych sietí, rada by som Vám ponúkla svoje služby v oblasti grafického a textového spracovania príspevkov. Moje príspevky budú zamerané na zaujatie Vašej cieľovej skupiny a tiež prilákanie nových klientov.`,
    socialText: `Tvorba príspevkov, príbehov, reels. Návrh marketingovej stratégie, predajná komunikácia služieb či produktov, interakcia so zákazníkmi, organizacia súťaží, odpovedanie na správy a komentáre.`,
    socialFoot: '',

    eshop: 'Správa webu a e-shopu',
    eshopSubtitlle: 'Ste podnikateľ a spravujete si svoj e-shop sám? Zaberá Vám to kopec času? Rada Vám s tým pomôžem a odbremením Vás.',
    eshopText: 'Správa Vášho webu alebo e-shopu. Pridávanie produktov, tvorba popisov, tvorba obsahu a grafiky, komunikácia s klientami cez chat.',
    eshopFoot: '',

    grafic: 'Grafický dizajn',
    graficSubtitle: `Bez ohľadu na to, či potrebujete profesionálne logo na mieru alebo dizajn pre pozvánky, letáky, vizitky, oznámenia alebo jedálny lístok či cenník do kozmetického salónu, som tu pre Vás. Stačí mi poskytnúť podrobnosti o Vašich požiadavkách a môžeme začať pracovať na vytvorení profesionálneho dizajnu, ktorý vyhovuje Vašim potrebám.`,
    graficText: `Logo, Dizajn obalov a produktov, Digitálne produkty, Marketingové materiály, Tlačoviny, Reklamné materiály (bannery), Plagáty do podniku/na event, Jedálne a nápojové lístky, Cenníky, Pozvánky na udalosti, Oznámenia, Návrh príspevkov na FB/IG, Úprava fotiek, videí, vkladanie tituliek.`,
    graficFoot: '',

    texts: 'Texty a preklady',
    textsSubtitle: `Ak sa vám zdá ťažké poradiť si s textami alebo prekladmi, nechajte to na mňa. Či už potrebujete texty na web, reklamu alebo potrebujete vytvoriť skript na oslovovanie klientov. Okrem bežných prekladov ako magister z molekulárnej biológie ponúkam aj preklady odborných biologických textov pre Vaše publikácie, alebo pomoc s prípravou dokumentov, rešeršemi v literatúre a jazykovými korektúrami.`,
    textsText: `Tvorba a plánovanie obsahu, článkov, textovania príspevkov (úprava článkov a druhé oči v prípade možných chýb vo Vašom texte), grafika, prepisovanie (dokumentov, podcastov alebo videonahrávok), vytváranie prehľadných tabuliek alebo databáz zákazníkov.`,
    textsFoot: '',

    lucky: 'Nenašli ste čo ste potrebovali?',
    luckySubtitle: 'Som tu, aby som Vám pomohla v rôznych oblastiach a neustále sa vzdelávam, aby som mohla rozšíriť svoje schopnosti a ponuku.',
    luckyText: `Ak máte iné úlohy alebo projekty, neváhajte ma kontaktovať a dohodneme si bezplatnú úvodnú konzultáciu. Počas konzultácie sa môžeme porozprávať o Vašich potrebách a zistiť, či a ako by som Vám mohla pomôcť.`,
    luckyFoot: '',




    priceText1: {
      p1: "Predtým, než si objednáte akúkoľvek službu, máte nárok na bezplatnú úvodnú konzultáciu. \nPonúkam základný cenník mesačných balíkov.",
      p2: "",
    },
    priceText2: {
      p1: `Ak ste v mojom cenníku virtuálnej asistentky nenašli balík, ktorý by vyhovoval Vašim potrebám, viem Vám pripraviť individuálny balíček služieb, ktorý bude úplne prispôsobený Vašim požiadavkám.`,
    },

    priceStartTitle: "Start",
    priceStartSubtitle: "300 € / mesiac",
    priceStartContent: {
      ul1: "20 hodín",
      ul2: "15,00 €/hod",
      ul3: "Tento balík obsahuje všetky služby virtuálneho asistenta",
    },

    priceExtraTitle: "Extra",
    priceExtraSubtitle: "560 € / mesiac",
    priceExtraContent: {
      ul1: "40 hodín",
      ul2: "14,00 €/hod",
      ul3: "Tento balík obsahuje všetky služby virtuálneho asistenta",

    },
    pricePremiumTitle: "Premium",
    pricePremiumSubtitle: "828 € / mesiac",
    pricePremiumContent: {
      ul1: "60 hodín",
      ul2: "13,80 €/hod",
      ul3: "Tento balík obsahuje všetky služby virtuálneho asistenta",

    },
    priceSocialMediaTitle: "Social Media",
    priceSocialMediaSubtitle: "350 € / mesiac",
    priceSocialMediaContent: {
      ul1: "Tvorba príspevkov, príbehov, reels",
      ul2: "Odpovedanie na komentáre a správy",
      ul3: "Organizácia súťaží",

    },






    aboutTitle: 'Kto je Vaša virtuálna asistentka ?',
    aboutText1: {
      p1: `Kedysi dávno som sa ocitla v korporátnom svete, pričom som si počínala dobre v rámci back-office práce, ktorá mi umožňovala prosperovať s minimálnym dohľadom. Pracovný život išiel dobre, kým neprišiel nový manažér, ktorý so sebou priniesol štýl mikromanažmentu, ktorý dusil moju nezávislosť a kreativitu.`,
      p2: `Vtedy som vedela, že sa musím oslobodiť a vydala som sa na cestu hľadania práce, ktorá by mi dala slobodu, po ktorej som túžila. Preskakoval som z jednej spoločnosti do druhej, neustále som sa učila a rýchlo sa prispôsobovala novým rolám. Ale niečo tomu stále chýbalo. Svoju prácu som si dokončila rýchlosťou blesku a dôsledne, avšak bez povšimnutia a nemohola som sa zbaviť pocitu, že môžem ponúknuť oveľa viac.`,
      p3: `A potom ma to napadlo: Prečo nezobrať veci do vlastných rúk? Urobila som odvážne rozhodnutie a stala sa samostatne zárobkovo činnou osobou a využila tak svoje schopnosti na maximum a pomáham podnikom rásť.`,

    },
    aboutText2: {
      p1: `Ako virtuálna asistentka nie som len ďalšou tvárou v korporátnom svete. Som tu, aby som Vám ponúkla osobitý kontakt, skutočné spojenie a oddanosť Vášmu úspechu. Chcem byť viac než len poskytovateľom služieb; chcem byť Vašim dôveryhodným partnerom.`,
      p2: `Keď sa rozhodnete so mnou spolupracovať, nenajímate si bezmennú entitu alebo organizáciu bez tváre. Vyberáte si niekoho, kto rozumie výzvam a frustráciám vyplývajúcim z obmedzenia v tradičnom pracovnom prostredí. Vyberáte si niekoho, kto verí, že skutočný úspech spočíva v slobode objavovať, tvoriť a mať zmysluplný vplyv.`,
      p3: `Prinášam Vám svoju efektívnosť, vynaliezavosť a vášeň, aby ste sa mohli sústrediť na to, čo robíte najlepšie, pričom viete, že administratívna stránka Vášho podnikania je v tých správnych rukách.`,

    },


    contactMeText: "Ak máte záujem o spoluprácu alebo máte nejaké otázky ohľadom služieb, neváhajte ma kontaktovať.",
    contactMessage: "Napíšte mi správu...",
    notFound: 'Stránka sa nenašla! 404',
  },








  cs: {
    welcome: 'Vítejte na naší stránce o Virtuálním Asistentovi!',
    description: 'Poskytujeme profesionální služby virtuálního asistenta pro pomoc s Vašimi úkoly.',
    getStarted: 'Začít',
    home: 'Domů',
    services: 'Služby',
    pricing: 'Ceník',
    about: 'O mně',
    portfolio: 'Portfólio',
    contact: 'Kontakt',

    homeTitle: 'Proč potřebujete virtuální asistentku?',
    homeText: {
      p1: `Zahlcují Vaše podnikání administrativní úkoly? Je pro Vás náročné držet krok s kontrolami a aktualizacemi dat, údržbou mailů a sociálními sítěmi? Už nehledejte! Jsem tady, abych Vám poskytla správná řešení, která posunou Vaše podnikání správným směrem.`,
      p2: `Rozumím výzvám, které s sebou přináší podnikání. Vím, že Váš čas je cenný a měli byste jej věnovat klíčovým činnostem, které podporují jeho růst. Právě zde přichází na řadu Vaše virtuální asistentka.`,
      p3: `Se svými odbornými znalostmi jako virtuální asistentka se specializuji na vyřizování administrativních úkolů, které zajišťují, aby Vaše firma fungovala hladce a efektivně. Potřebujete někoho, kdo by pečlivě zkontroloval a aktualizoval Vaše databáze? Máte mě k dispozici. Už Vás nebaví žonglovat mezi více mailboxy a snažit se udržet si přehled o otázkách zákazníků? Nechte to na mě. Chcete si vybudovat silnou online strategii prostřednictvím sociálních médií, ale chybí Vám na to čas? Považujte to se mnou za vybavené.`,
      p4: `Nezapomínejte, že jsem víc než jen poskytovatel služeb. Jsem Váš oddaný byznys partner na cestě k úspěchu. Budete-li se mnou spolupracovat, získáte přístup k někomu, komu na Vašem podnikání skutečně záleží. Věnuji spoustu času tomu, abych pochopila Vaše jedinečné potřeby, cíle a identitu značky a zajistila, že mé služby budou dokonale odpovídat Vaší vizi.`,
      p5: `Představte si, že máte více času a klidu s vědomím, že Vaše administrativní úkoly jsou vyřizovány bezchybně. Představte si, že Vaše podnikání vzkvétá, když odborně spravuji Vaše data, udržuji Váš mailbox organizovaný a vytvářím poutavý obsah pro sociální sítě.`,
      p6: `Takže, jste připraveni posunout své podnikání do nových výšin? Vydejme se na tuto cestu společně. Kontaktujte mě ještě dnes a promluvme si o tom, jak mohou mé služby na míru posunout Vaše podnikání vpřed. Váš úspěch je mou prioritou a nemůžu se dočkat, až budu toho součástí.`,
    },

    // homeCarouselTitle1: '',
    // homeCarouselDescription1: '',
    // homeCarouselTitle2: '',
    // homeCarouselDescription2: '',
    // homeCarouselTitle3: '',
    // homeCarouselDescription3: '',
    // homeCarouselTitle4: '',
    // homeCarouselDescription4: '',
    // homeCarouselTitle5: '',
    // homeCarouselDescription5: '',

    homeCarouselTitle1: "Spolehlivost",
    homeCarouselDescription1: `Jsem neúnavná ve svém závazku k dokonalosti a neustále se snažím zajistit, aby Vaše úkoly byly dokončeny nejen včas, ale také precizně. Můžete se na mě spolehnout, že prokážu vynikající výsledky a nenechám prostor pro pochybnosti nebo zklamání.`,
    homeCarouselTitle2: "Nezávislost",
    homeCarouselDescription2: `Přijímajíc věčnou cestu sebezdokonalování, neustále se zapojuji do vzdělávání a navštěvuji kurzy, abych si zdokonalila své dovednosti. Moje pečlivá pozornost věnovaná detailům zajišťuje komplexní a důkladný přístup ke všem zadáním.`,
    homeCarouselTitle3: "Získání času",
    homeCarouselDescription3: `Představte si vzácné hodiny, které byste mohli získat zpět na expanzi podnikání, upřednostnění klíčových činností nebo dokonce dopřání si zaslouženého osobního času. Využitím mých služeb mohou podnikatelé získat spoustu času a využít ho k tomu, na čem jim skutečně záleží.`,
    homeCarouselTitle4: "Finanční efektivita",
    homeCarouselDescription4: `Jedním z nejatraktivnějších aspektů práce s virtuálním asistentem je efektivnost nákladů. S virtuálním asistentem platíte jen za konkrétní služby, které požadujete. Rozlučte se s výdaji souvisejícími s daněmi, kancelářským vybavením a školením. Ve srovnání s přijetím zaměstnance se dodatečné režijní náklady rozplynou, protože se o vše postarám samostatně.`,
    homeCarouselTitle5: "Prevence vyhoření - 'Burnout'",
    homeCarouselDescription5: `Podnikatelé často čelí ohromné výzvě pracovat s více prioritami najednou, takže jsou náchylní k vyhoření. Proto je virtuální asistent řešením tohoto problému. Svěříte-li mi část své pracovní náplně, můžete se osvobodit a soustředit se výlučně na úkoly, které vyžadují Vaši jedinečnou profesionální odbornost.`,



    ourServices: 'Moje Služby',

    administration: 'Administrativa',
    administrationSubtitle: 'Potřebujete pomoci s administrativou?',
    administrationText: `Nabídka mojich služeb zahrnuje například: Vyhledávání informací online, Správa dat, Správa kalendáře, Úprava dokumentů, Reporty, Průzkum trhu, Zpracování dokumentů, Zadávání údajů do systému.`,
    administrationFoot: 'Dejte mi vědět, jak Vám můžu pomoci!',


    social: 'Správa sociálních sítí',
    socialSubtitle: `Pokud nemáte čas na správu svých sociálních sítí, ráda bych Vám nabídla své služby v oblasti grafického a textového zpracování příspěvků. Moje příspěvky budou zaměřeny na zaujetí Vaší cílové skupiny a také přilákání nových klientů.`,
    socialText: `Tvorba příspěvků, příběhů, reels. Návrh marketingové strategie, prodejní komunikace služeb či produktů, interakce se zákazníky, organizace soutěží, zodpovězení zpráv a komentářů.`,
    socialFoot: '',

    eshop: 'Správa webu a e-shopu',
    eshopSubtitlle: 'Jste podnikatel a spravujete si svůj e-shop sám? Zabírá Vám to spoustu času? Ráda Vám s tím pomůžu a odbřemením Vás.',
    eshopText: 'Správa Vašeho webu nebo e-shopu. Přidávání produktů, tvorba popisů, tvorba obsahu a grafiky, komunikace s klienty přes chat.',
    eshopFoot: '',

    grafic: 'Grafický design',
    graficSubtitle: `Bez ohledu na to, zda potřebujete profesionální logo na míru nebo design pro pozvánky, letáky, vizitky, oznámení nebo jídelníček či ceník do kosmetického salonu, jsem tady pro Vás. Stačí mi poskytnout podrobnosti o Vašich požadavcích a můžeme začít pracovat na vytvoření profesionálního designu, který vyhovuje Vašim potřebám.`,
    graficText: `Logo, Design obalů a produktů, Digitální produkty, Marketingové materiály, Tiskoviny, Reklamní materiály (bannery), Plakáty do podniku/na event, Jídelní a nápojové lístky, Ceníky, Pozvánky na události, Oznámení, Návrh příspěvků na FB/IG, Úprava fotek, videí, vkládání titulek.`,
    graficFoot: '',

    texts: 'Texty a překlady',
    textsSubtitle: `Pokud je pro vás obtížné vypořádat se s texty nebo překlady, nechte to na mě. Ať už potřebujete texty na web, do reklamy nebo potřebujete vytvořit skript pro oslovování klientů. Kromě běžných překladů jako magistra molekulární biologie nabízím také překlady odborných biologických textů pro Vaše publikace, nebo pomoc s přípravou dokumentů, rešeršemi v literatuře a jazykovými korekturami.`,
    textsText: `Tvorba a plánování obsahu, článků, textování příspěvků (editace článků a druhé oči v případě možných chyb ve Vašem textu), grafika, přepisování (dokumentů, podcastů nebo videonahrávek), vytváření přehledných tabulek nebo zákaznických databází.`,
    textsFoot: '',

    lucky: 'Nenašli jste co jste potřebovali?',
    luckySubtitle: `Jsem tady, abych Vám pomohla v různých oblastech a neustále se vzdělávám, abych mohla rozšířit své schopnosti a nabídku.`,
    luckyText: `Pokud máte jiné úkoly nebo projekty, neváhejte mě kontaktovat a domluvíme si bezplatnou úvodní konzultaci. Během konzultace si můžeme popovídat o Vašich potřebách a zjistit, zda a jak bych Vám mohla pomoci.`,
    luckyFoot: '',




    priceText1: {
      p1: "Předtím, než si objednáte jakoukoli službu, máte nárok na bezplatnou úvodní konzultaci. \nNabízím základní ceník měsíčních balíků.",
      p2: "",
    },
    priceText2: {
      p1: `Pokud jste v mém ceníku virtuální asistentky nenašli balíček, který by vyhovoval Vašim potřebám, umím Vám připravit individuální balíček služeb, který bude zcela přizpůsoben Vašim požadavkům.`,
    },

    priceStartTitle: "Start",
    priceStartSubtitle: "300 € / měsíc",
    priceStartContent: {
      ul1: "20 hodin",
      ul2: "15,00 €/hod",
      ul3: "Tento balíček obsahuje všechny služby virtuální asistentky",

    },

    priceExtraTitle: "Extra",
    priceExtraSubtitle: "560 € / měsíc",
    priceExtraContent: {
      ul1: "40 hodin",
      ul2: "14,00 €/hod",
      ul3: "Tento balíček obsahuje všechny služby virtuální asistentky",

    },

    pricePremiumTitle: "Premium",
    pricePremiumSubtitle: "828 € / měsíc",
    pricePremiumContent: {
      ul1: "60 hodin",
      ul2: "13,80 €/hod",
      ul3: "Tento balíček obsahuje všechny služby virtuální asistentky",

    },

    priceSocialMediaTitle: "Social Media",
    priceSocialMediaSubtitle: "350 € / měsíc",
    priceSocialMediaContent: {
      ul1: "Tvorba příspěvků, příběhů, reels",
      ul2: "Odpovídání na komentáře a zprávy",
      ul3: "Organizace soutěží",

    },






    aboutTitle: 'Kdo je Vaše virtuální asistentka ?',
    aboutText1: {
      p1: `Kdysi dávno jsem zjistila, že jsem uvězněna v korporátním světě, dařilo se mi dobře v back-office práci, která mi umožňovala prosperovat s minimálním dohledem. Pracovní život byl dobrý, dokud nepřišel nový manažer, který s sebou přinesl styl mikrořízení, který udusil moji nezávislost a kreativitu.`,
      p2: `Tehdy jsem věděla, že se musím osvobodit. Šla jsem hledat práci, která by mi dala svobodu, po které jsem toužila. Přeskakovala jsem z jedné společnosti do druhé, neustále jsem se učila a rychle se přizpůsobovala novým rolím. Ale něco tomu chybělo. Svou práci jsem dokončila bleskurychle a důsledně, ale bez povšimnutí, a nemohla jsem se zbavit pocitu, že mám daleko víc co nabídnout.`,
      p3: `A pak mě to napadlo: Proč nevzít věci do vlastních rukou? Učinila jsem odvážné rozhodnutí stát se osobou samostatně výdělečně činnou, protože věřím, že mé dovednosti rozkvetou a pomohou firmám růst.`,

    },
    aboutText2: {
      p1: `Nyní, jako virtuální asistentka, nejsem jen další tváří ve korporátním světě. Jsem tu, abych vám nabídla osobní přístup, skutečné spojení a odhodlání Vašemu úspěchu. Chci být víc než jen poskytovatel služeb; chci být Vašim důvěryhodným partnerem.`,
      p2: `Když se rozhodnete se mnou pracovat, nenajímáte si bezejmennou entitu nebo organizaci bez tváře. Vybíráte si někoho, kdo rozumí výzvám a frustracím vyplývajícím z omezení v tradičním pracovním prostředí. Vybíráte si někoho, kdo věří, že skutečný úspěch spočívá ve svobodě zkoumat, tvořit a mít smysluplný dopad.`,
      p3: `Přináším Vám svoji efektivnost, vynalézavost a vášeň, abyste se mohli soustředit na to, co děláte nejlépe, přičemž víte, že administrativní stránka Vašeho podnikání je v těch správných rukou.`,

    },


    contactMeText: "Pokud máte zájem o spolupráci nebo máte nějaké dotazy ohledně služeb, neváhejte mě kontaktovat.",
    contactMessage: "Napište mi zprávu...",
    notFound: 'Stránka nenalezena! 404',
  },
};

export default translations;