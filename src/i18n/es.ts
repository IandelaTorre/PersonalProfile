export const es = {
    nav: {
        home: 'Inicio',
        about: 'Sobre mí',
        projects: 'Proyectos',
        notes: 'Notas',
    },
    hero: {
        title: 'Desarrollador iOS',
        subtitle: 'Con conocimientos y experiencia en desarrollo Full-Stack. ',
        ready: 'Disponible para nuevos retos. ',
        ctaProjects: 'Ver Proyectos',
        ctaWeb: 'Ver Proyectos Web',
        ctaCV: 'Descargar CV',
    },
    techStack: {
        title: 'Stack Tecnológico',
        ios: 'Desarrollo iOS',
        frontend: 'Frontend Web',
        backend: 'Backend',
        tooling: 'Herramientas',
        databases: 'Datos y Bases de Datos',
    },
    projects: {
        title: 'Proyectos Destacados',
        viewAll: 'Proyectos más relevantes',
        proj1: {
            title: 'TaskFlow',
            description: 'Una aplicación para asignación de tareas entre usuarios, utilizando un diseño limpio y moderno con flujos claros. Se utilizan llamadas a API con Alamofire, inyección de dependencias y coordinadores. Utilizamos persistencia de datos para almacenar datos básicos del usuario y datos temporales para una respuesta más rápida. Construida con UIKit y MVVM. '
        },
        proj2: {
            title: 'My Calculator',
            description: 'Una aplicación de calculadora de operaciones básicas con evaluación en tiempo real, un modo de calculadora básica y otro modo para convertir unidades. Se utiliza un diseño simple, limpio y moderno utilizando UIKit y MVVM. ',
        },
        proj3: {
            title: 'Coin Converter',
            description: 'Una aplicación de conversión de monedas que utiliza una API pública para obtener las tasas de cambio en tiempo real. Incluye conversión en tiempo real, selección de monedas y esta construida con UIKit y MVVM. ',
        },
        proj4: {
            title: 'Basic API',
            description: "Backend construido con Prisma y Express, que ofrece endpoints para gestionar usuarios y tareas. Incluye autenticación JWT, gestión con logs, validación de datos y manejo de errores. Proyecto creado con la finalidad de tener mi propia API 'pública'. Diseñado para ser escalable y fácil de mantener. ",
        },
        proj5: {
            title: 'Personal Website',
            description: 'Página web personal construida con Astro y Tailwind CSS. Presenta secciones sobre mí, mi experiencia, proyectos destacados y un blog de notas técnicas. Optimizada para rendimiento, SEO y accesibilidad, con soporte para modo oscuro, diseño responsivo e idiomas. ',
        },
        proj6: {
            title: 'Memorama App Android',
            description: 'Aplicación de memorama para Android con diferentes niveles de dificultad, temporizador y sistema de puntuación. Construida con Android Studio, kotlin y utiliza SQLite para la persistencia de datos. Respaldos en la nube con Google Drive. ',
        },
    },
    experience: {
        title: 'Experiencia',
        exp1: {
            title: "Ikania",
            role: "Desarrollador Full-Stack",
            period: "2025 - Presente",
            description: "Trabajé como desarrollador backend en una plataforma de auditorías y quejas, construyendo servicios y módulos para una aplicación web con gestión de usuarios por roles y autenticación JWT usando AWS Cognito. Me encargué de crear y configurar los User Pools y Clients, diseñar APIs RESTful con NestJS y Drizzle, y asegurar respuestas consistentes a través de un mapper común y validaciones con Zod. También realicé la dockerización del proyecto, incluyendo scripts para automatizar el build y la ejecución en contenedores. ",
            more: "En un segundo proyecto, orientado a inversiones y gestión de cuentas tipo “banca digital”, desarrollé servicios backend con Serverless Framework, integrando Cognito para autenticación basada en roles y creando funciones Lambda responsables del cálculo de préstamos y cronogramas de pagos, usando Python y NumPy dentro del mismo entorno serverless. Además, colaboré en la parte de frontend, maquetando pantallas con TypeScript, Vite, Tailwind CSS y componentes de shadcn/ui. En ambos proyectos trabajé de cerca con el equipo para mantener una arquitectura limpia, endpoints bien documentados y flujos de autenticación robustos. ",
        },
        exp2: {
            title: "Wundertec",
            role: "Desarrollador Full-Stack",
            description: "Participé como desarrollador full-stack en un sistema para la gestión de un taller masivo de vehículos, que controlaba la entrada, estado y salida de las unidades (entrada, en taller, en validación, entrega), junto con catálogos y una bitácora de movimientos. Me enfoqué en mejorar el flujo de registro de vehículos añadiendo una versión “express”, en rediseñar el listado para hacerlo más claro, responsive y agradable visualmente, y en implementar una sección para generar y descargar reportes en Excel con los registros del taller. En este proyecto trabajé principalmente con React, JavaScript, Tailwind CSS y Ant Design en el frontend, y con Express en el backend. ",
            more: "También trabajé como full-stack en una plataforma tipo asistencia médica, con gestión de usuarios, autenticación básica y login con Google. Dentro del sistema, según el rol (médico o paciente), se podían crear y consultar recetas generadas a partir de plantillas en PDF, gestionar citas con calendario integrado y habilitar chat y videollamadas entre usuarios, además de un catálogo de medicamentos. Aquí participé tanto en la construcción de pantallas y flujos en React + Tailwind, como en la implementación de la capa de datos con Prisma y Express. En ambos proyectos colaboré con el equipo para alinear la UI con las necesidades del negocio y mantener un código mantenible y coherente. ",
        },
        exp3: {
            title: "TelcoPS",
            role: "Desarrollador Android",
            description: "Trabajé en una aplicación móvil Android para la gestión interna de un almacén, organizada en familias, subfamilias y Configuration Items (CI) para tener un mejor control del inventario. Cada entidad contaba con su CRUD y los cambios pasaban por un flujo de aprobación antes de aplicarse. Al crear un CI se generaba un código QR que, al escanearlo, llevaba directamente al ítem correspondiente, tanto desde la app móvil como desde la versión web. ",
            more: "Mi trabajo se centró en migrar diferentes pantallas y servicios a una arquitectura basada en MVVM con Clean Architecture, mejorando la separación de responsabilidades y la mantenibilidad del código. Implementé un manejo de errores más robusto para evitar cierres inesperados de la app y mejorar la experiencia del usuario, además de ajustar el flujo de redirección para que el escaneo del QR siempre llevara al CI correcto. También realicé mejoras visuales y correcciones de diseño para alinear la interfaz con las guías de Material Design. ",
        },
    },
    education: {
        title: 'Educación y Cursos',
        ed1: {
            title: "Ingeniería en Sistemas Computacionales",
        },
        more: {
            title: "Más",
        },
    },
    about: {
        title: 'Sobre Mí',
        name: 'Ian Axel',
        description: "Soy Ian, un desarrollador de iOS con experiencia en full-stack al que le gusta convertir ideas en aplicaciones fluidas y bien estructuradas utilizando Swift, SwiftUI y UIKit. Me preocupo mucho por la arquitectura limpia, el código legible y la colaboración con los equipos para crear productos que sean agradables de usar. Cuando no estoy programando, probablemente esté leyendo sobre software, jugando a videojuegos, viendo béisbol o fútbol. ",
        hobbies: {
            hobbie1: {
                title: "Deportes",
                icon: "🏃"
            },
            hobbie2: {
                title: "Música",
                icon: "🎵"
            },
            hobbie3: {
                title: "Lectura",
                icon: "📚"
            },
            hobbie4: {
                title: "Videojuegos",
                icon: "🎮"
            },
        },
        presentation: {
            p1: "¡Hola! Soy Ian Axel, desarrollador iOS y Full-Stack con experiencia construyendo aplicaciones móviles y soluciones web. Me considero un apasionado por la tecnología y como se puede aplicar para resolver problemas de la vida real. ",
            p2: "Hoy estoy enfocado en el desarrollo de aplicaciones móviles para iOS utilizando Swift, UIKit y SwiftUI, buscando siempre utilizar buenas prácticas, arquitecturas limpias y patrones de diseño que mejoren la calidad del código y la experiencia del usuario. ",
            p3: "También me encanta trabajar en el backend con NestJS y crear experiencias web con React. ",
        },
        myPath: {
            title: "Mi camino hasta iOS",
            p1: "Empecé mi carrera en el desarrollo móvil trabajando con Android utilizando arquitecturas limpias con MVVM y patrones de diseño como Repository, Dependency Injection, Singleton, entre otros. Más tarde, decidí expandir mis horizontes y aprender el desarrollo hibrido con React Native, esto me duro poco tiempo ya que después por diferentes situaciones terminé en el desarrollo web donde me he formado hasta hoy con vastos conocimientos en frontend y backend. ",
            p2: "Hoy en día, me he decidido a especializarme en el desarrollo móvil para iOS, ya que siempre fue mi pasión el desarrollo móvil nativo y quiero que sea en la plataforma de Apple donde pueda crecer profesionalmente y aportar todo mi conocimiento en la creación de aplicaciones móviles de alta calidad. "
        },
        howIWork: {
            title: "Cómo trabajo",
            p1: "Me gusta planificar bien las apps desde el comienzo, definiendo una arquitectura clara y escalable que facilite el mantenimiento y la evolución del proyecto a largo plazo. Empiezo entendiendo el problema, reduciendo la complejidad al dividirlo en partes manejables y priorizando las funcionalidades clave. En iOS he trabajo con diferentes patrones como MVVM y Coordinators, aplicando principios de Clean Architecture, combinados con Combine async/await con Alamofire. Todo esto con la finalidad de tener un código limpio, modular y fácil de probar, así como flujos (de navegación y datos) bien definidos y claros. ",
            p2: "Vengo de un contexto de desarrollo full-stack, así que estoy acostumbrado a trabajar cerca del backend, entendiendo cómo funcionan las APIs, revisando contratos de APIs, proponiendo cambios en busca de optimizaciones y pensar en rendimiento de extremo a extremo.",
            p3: "Más allá del código, valoro la comunicación efectiva, el feedback y la colaboración en equipo. Creo que un buen desarrollador no solo escribe código, sino que también entiende las reglas de negocio y sabe comunicarse o trabajar con todas las partes del equipo como diseñadores, PO, otros desarrolladores, entre otros. Con el objetivo en conjunto de crear soluciones que realmente aporten valor. ",
        },
        beyondCode: {
            title: "Mas allá del código",
            p1: "Cuando no estoy programando, suelo invertir mi tiempo en aprender nuevas tecnologías o explorar proyectos personales. Me gusta leer y ver videos sobre desarrollo de software, arquitectuas de software, patrones de diseño y nuevas herramientas que puedan mejorar mi flujo de trabajo, y muchas de esas ideas trato de implementarlas en mis proyectos o evaluarlas como nuevos productos con un toque innovador.  ",
            p2: "También disfruto de actividades fuera del ámbito tecnológico, como el deporte, los videojuegos y la música. Hoy en día disfruto de entrenar en el gimnasio y jugar los fines de semana fútbol con mi equipo, porque me ayuda a mantener la mente clara y la disciplina en el día a día. ",
            p3: "Otra parte importante en mi vida es ver deportes pero más en especifico los juegos de beisbol, ya que ultimamente me he vuelto un gran fan de este deporte, especialmente de los diablos rojos del México. Es un deporte muy estratégico que me mantiene entretenido y en el cual siempre aprendo algo nuevo porque sus reglas son muy extensas. ",
            p4: "Por último, una actividad que he adoptado recientemente es el senderismo, el cual me ha permitido despejar mi mente, ver la belleza de la naturaleza y mantenerme activo físicamente. Escale la montaña llamada 'La Malinche' en Tlaxcala, México, y fue una experiencia increíble que me motivó a seguir explorando más rutas de senderismo en el futuro. ",
            caption1: "Equipo de fútbol",
        },
        lookingFor: {
            title: "Lo que estoy buscando",
            p1: "Actualmente estoy en búsqueda de nuevas oportunidades laborales como desarrollador iOS, donde pueda aplicar mis conocimientos y experiencia para contribuir al éxito de proyectos emocionantes. Busco una oportunidad donde pueda: ",
            l1: "Seguir profundizando en el desarrollo iOS en Swift, SwiftUI y las mejores prácticas de la plataforma. ",
            l2: "Aportar mi experiencia en el ámbito laboral con conocimientos en desarrollo full-stack, arquitectura limpia y buenas prácticas de desarrollo para colaborar de cerca con equipos multidisciplinarios. ",
            l3: "Trabajar en equipo donde la comunicación, código limpio, el feedback y el aprendizaje continuo sean valores fundamentales para el desarrollo de software de calidad. ",
            p2: "Si te gustaría revisar mis proyectos o saber más sobre cómo trabajo, puedes visitar la sección de proyectos o contactarme a través de mis redes sociales. ",
        }
    },
    notes: {
        note1: {
            title: "The Future of SwiftUI Development: From Architecture Choices to AI Integration",
            date: "Aug 11, 2025",
            excerpt: "Este artículo reciente resume tendencias en la comunidad iOS, como la evolución de patrones arquitectónicos en SwiftUI. Por ejemplo, cuestiona el uso extensivo de MVVM en cada vista, señalando que puede añadir complejidad innecesaria; en su lugar, SwiftUI permite inyectar servicios globalmente vía @Environment para evitar ViewModels redundantes y mantener las vistas más simples. ",
        },
        note2: {
            title: "Apple Presenta Xcode 26 con IA Nativa, ChatGPT y Live Translation para Desarrolladores",
            date: "Jun 10, 2025",
            excerpt: "Este artículo resume las novedades para Xcode 26, que incluyen integración nativa con IA y ChatGPT para ayudar a los desarrolladores a escribir código más rápido y con menos errores. También se destaca la función de traducción en vivo, que facilita la localización de aplicaciones para múltiples idiomas directamente desde el IDE.",
        },
        note3: {
            title: "La importancia de las arquitecturas modulares en las aplicaciones móviles",
            date: "May 14, 2024",
            excerpt: "Este artículo en español enfatiza por qué una buena arquitectura técnica es clave en proyectos móviles. Señala que a menudo se prioriza la experiencia de usuario y el diseño, descuidando la calidad del código; el resultado son apps que funcionan al inicio pero con el tiempo se vuelven difíciles de mantener y ampliar, volviéndose proyectos en los que 'nadie quiere trabajar'. ",
        },
        note4: {
            title: "iOS App Store Submission Tutorial",
            date: "Sept 8, 2025",
            excerpt: "Este vídeo tutorial en YouTube ofrece una guía paso a paso sobre cómo preparar y enviar una aplicación iOS a la App Store. Cubre aspectos clave como la configuración del proyecto en Xcode, la creación de un perfil de aprovisionamiento, la generación de un archivo IPA y el uso de App Store Connect para gestionar la publicación y distribución de la app. ",
        },
        note5: {
            title: "Patrones de diseño",
            date: "Dec 5, 2025",
            excerpt: "Esta página web ofrece una explicación muy completa de muchos patrones de diseño utilizado en el desarrollo de software, incluyendo ejemplos claros con ilustraciones y explicaciones paso a paso. Es un recurso valioso para desarrolladores que buscan entender cómo aplicar estos patrones en sus proyectos para mejorar la calidad y mantenibilidad del código. Si quieres aprender de patrones de diseño, esta es una referencia que tienes que consultar. ",
        },
        note6: {
            title: "Codewars",
            date: "Dec 5, 2025",
            excerpt: "Esta plataforma en línea ofrece una amplia variedad de desafíos de programación (katas) que permiten a los desarrolladores mejorar sus habilidades en diferentes lenguajes de programación. Los usuarios pueden resolver problemas de diversos niveles de dificultad, desde principiantes hasta expertos, y comparar sus soluciones con las de otros miembros de la comunidad. Es una excelente manera de practicar y aprender nuevas técnicas de codificación mientras se compite amistosamente con otros programadores. ",
        },
        more: {
            title: "Presiona para leer más",
        }
    },
    contact: {
        title: 'Contacto',
        ctaCV: 'Descargar CV',
        email: 'Copiar Correo',
        copied: '¡Correo copiado!',
    },
    footer: {
        title: "Desarrollador iOS & Full-Stack",
        rights: "Todos los derechos reservados.",

    },
};
