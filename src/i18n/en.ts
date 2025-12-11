export const en = {
    nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        notes: 'Notes',
    },
    hero: {
        title: 'iOS Developer',
        subtitle: 'With Full-Stack knowledge and experience. ',
        ready: 'Available for new opportunities. ',
        ctaProjects: 'View Projects',
        ctaWeb: 'View Web Projects',
        ctaCV: 'Download CV',
    },
    techStack: {
        title: 'Tech Stack',
        ios: 'iOS Development',
        frontend: 'Frontend Web',
        backend: 'Backend',
        tooling: 'Tooling',
        databases: 'Data & Databases',
    },
    projects: {
        title: 'Featured Projects',
        viewAll: 'Most Relevant Projects',
        proj1: {
            title: 'TaskFlow',
            description: 'A task management app where users can assign tasks to each other, with a clean, modern UI and clear flows. It uses API calls with Alamofire, dependency injection, and coordinators. We use data persistence to store basic user info and temporary data for faster responses. Built with UIKit and MVVM. ',
        },
        proj2: {
            title: 'My Calculator',
            description: 'A basic calculator app with real-time expression evaluation, a simple calculator mode, and another mode for unit conversion. It has a clean, minimal design and is built using UIKit and MVVM. ',
        },
        proj3: {
            title: 'Coin Converter',
            description: 'A currency converter app that uses a public API to fetch real-time exchange rates. It includes live conversion, currency selection, and is built with UIKit and MVVM. ',
        },
        proj4: {
            title: 'Basic API',
            description: "Backend built with Prisma and Express that exposes endpoints to manage users and tasks. It includes JWT authentication, logging, data validation, and error handling. I created this project to have my own “public” API. Designed to be scalable and easy to maintain. ",
        },
        proj5: {
            title: 'Personal Website',
            description: "Personal website built with Astro and Tailwind CSS. It includes sections about me, my experience, featured projects, and a small technical notes/blog area. It's optimized for performance, SEO, and accessibility, with support for dark mode, responsive design, and multiple languages. ",
        },
        proj6: {
            title: 'Memorama App Android',
            description: 'A memory game app for Android with different difficulty levels, a timer, and a scoring system. Built with Android Studio and Kotlin, using SQLite for data persistence and Google Drive for cloud backups. ',
        },
    },
    experience: {
        title: 'Experience',
        exp1: {
            title: "Ikania",
            role: "Full-Stack Developer",
            period: "2025 - Present",
            description: "I worked as a backend developer on an audits and complaints platform, building services and modules for a web app with role-based user management and JWT authentication via AWS Cognito. I was responsible for creating and configuring Cognito User Pools and Clients, designing RESTful APIs with NestJS and Drizzle, and ensuring consistent responses through a shared mapper layer and Zod-based validations. I also containerized the project, writing scripts to automate building and running the app in Docker. ",
            more: "On a second project, focused on investments and digital-bank–style accounts, I developed backend services using Serverless Framework, integrating Cognito for role-based auth and implementing Lambda functions to handle loan calculations and payment schedules using Python and NumPy within the same serverless stack. I also contributed to the frontend, building UI screens with TypeScript, Vite, Tailwind CSS, and shadcn/ui components. Across both projects, I worked closely with the team to keep a clean architecture, well-structured endpoints, and robust authentication flows. ",
        },
        exp2: {
            title: "Wundertec",
            role: "Full-Stack Developer",
            description: "I worked as a full-stack developer on a large-scale vehicle workshop management system that tracked each car's lifecycle (check-in, in workshop, in validation, delivery), handled catalog data, and logged vehicle entries and exits. I focused on improving the vehicle intake flow by adding an “express” entry mode, redesigning the vehicle list to be more readable, responsive, and visually polished, and implementing an Excel export feature for vehicle records. On the tech side, I worked mainly with React, JavaScript, Tailwind CSS, and Ant Design on the frontend, and Express on the backend. ",
            more: "I also contributed as a full-stack developer to a medical assistance platform with user management, basic auth, and Google login. Depending on the user's role (doctor or patient), the app allowed creating and viewing prescriptions generated from PDF templates, managing appointments through a calendar, and enabling chat and video calls for consultations, along with a medication catalog. I helped build the UI and flows using React and Tailwind, and implemented backend logic and data access using Prisma and Express. In both projects, I collaborated with the team to align the UI and API design with business requirements and keep the codebase maintainable and consistent. ",
        },
        exp3: {
            title: "TelcoPS",
            role: "Android Developer",
            description: "I worked on an internal warehouse management Android app, structured around families, sub-families, and Configuration Items (CIs) to provide better inventory control. Each entity had its own CRUD, and any change went through an approval workflow before being applied. When creating a CI, the system generated a QR code that, when scanned, took the user directly to the corresponding item, both from the mobile app and the web version. ",
            more: "My work focused on migrating several screens and services to an MVVM-based Clean Architecture, improving separation of concerns and making the codebase easier to maintain. I implemented more robust error handling to prevent crashes and improve the overall user experience, and refined the QR flow so that scanning always routed the user to the correct CI. I also made visual and layout improvements to better align the UI with Material Design guidelines. ",
        },
    },
    education: {
        title: 'Education & Courses',
        ed1: {
            title: "Computational Systems Engineering",

        },
        more: {
            title: "More",
        },
    },
    about: {
        title: 'About Me',
        name: 'Ian Axel',
        description: "I'm Ian, an iOS developer with a full-stack background who enjoys turning ideas into smooth, well-structured apps using Swift, SwiftUI, and UIKit. I care a lot about clean architecture, readable code, and collaborating with teams to ship products that feel great to use. When I'm not coding, I'm probably reading about software, playing games, watching baseball or soccer. ",
        hobbies: {
            hobbie1: {
                title: "Sports",
                icon: "🏃"
            },
            hobbie2: {
                title: "Music",
                icon: "🎵"
            },
            hobbie3: {
                title: "Reading",
                icon: "📚"
            },
            hobbie4: {
                title: "Gaming",
                icon: "🎮"
            },
        },
        presentation: {
            p1: "Hello! I'm Ian Axel, an iOS and Full-Stack developer with experience building mobile apps and web solutions. I'm genuinely passionate about technology and how it can be used to solve real problems. ",
            p2: "Today I'm focused on developing iOS applications using Swift, UIKit, and SwiftUI, always looking to apply best practices, clean architectures, and design patterns that improve code quality and the overall user experience. ",
            p3: "I also enjoy working on the backend with NestJS and creating web experiences with React. ",
        },
        myPath: {
            title: "My Path to iOS",
            p1: "I began my career in mobile development working with Android, using clean architectures with MVVM and design patterns such as Repository, Dependency Injection, Singleton, among others. Later, I decided to expand my horizons and learn hybrid development with React Native. This didn't last long, as due to various circumstances I ended up in web development, where I have trained myself to date, gaining extensive knowledge in frontend and backend. ",
            p2: "Today, I've decided to specialize in iOS development, because native mobile has always been my passion. I want Apple's ecosystem to be the place where I grow professionally and bring all my experience to the creation of high-quality mobile applications. ",
        },
        howIWork: {
            title: "How I Work",
            p1: "I like to plan apps carefully from the beginning, defining a clear and scalable architecture that makes long-term maintenance and evolution easier. I start by understanding the problem, reducing complexity by breaking it into manageable parts and prioritizing the key features. In iOS I've worked with patterns like MVVM and Coordinators, applying Clean Architecture principles and combining them with Combine and async/await, alongside Alamofire. The goal is always the same: clean, modular, testable code and well-defined navigation and data flows. ",
            p2: "I come from a full-stack background, so I'm used to working closely with the backend: understanding how APIs work, reviewing API contracts, proposing changes to improve them, and thinking about performance end to end. ",
            p3: "Beyond the code itself, I value effective communication, feedback, and teamwork. I believe a good developer doesn't just write code, but also understands the business rules and knows how to collaborate with everyone involved — designers, product owners, other developers, and more — with the shared goal of creating solutions that truly deliver value. ",
        },
        beyondCode: {
            title: "Beyond the Code",
            p1: "When I'm not coding, I usually spend my time learning new technologies or exploring personal projects. I enjoy reading and watching content about software development, software architecture, design patterns, and new tools that can improve my workflow — and I try to bring many of those ideas into my projects or evaluate them as potential new products with an innovative twist. ",
            p2: "I also enjoy activities outside tech, like sports, video games, and music. These days I really like training at the gym and playing soccer with my team on weekends — it helps me clear my mind and stay disciplined in my daily routine. ",
            p3: "Another important part of my life is watching sports, especially baseball. Lately I've become a big fan of the sport, particularly of Diablos Rojos del México. It's a very strategic game that keeps me engaged, and I'm always learning something new because the rules are so rich and detailed.",
            p4: "Finally, a recently adopted activity is hiking, which has allowed me to clear my mind, appreciate the beauty of nature, and stay physically active. I climbed a mountain called 'La Malinche' in Tlaxcala, Mexico, and it was an incredible experience that motivated me to explore more hiking trails in the future. ",
            caption1: "Soccer Team",
        },
        lookingFor: {
            title: "What I'm Looking For",
            p1: "I'm currently looking for new opportunities as an iOS developer, where I can apply my skills and experience to contribute to exciting projects. I'm looking for a role where I can:",
            l1: "Keep deepening my expertise in iOS development with Swift, SwiftUI, and the platform's best practices.",
            l2: "Bring my experience in full-stack development, clean architecture, and good development practices to collaborate closely with multidisciplinary teams.",
            l3: "Work in a team where communication, clean code, feedback, and continuous learning are core values for building high-quality software.",
            p2: "If you'd like to explore my projects or learn more about how I work, feel free to check out the projects section or reach out through my social profiles.",
        }
    },
    notes: {
        note1: {
            title: "The Future of SwiftUI Development: From Architecture Choices to AI Integration",
            date: "Aug 11, 2025",
            excerpt: "This recent article summarizes trends in the iOS community, such as the evolution of architectural patterns in SwiftUI. For example, it questions the extensive use of MVVM in each view, pointing out that it can add unnecessary complexity; instead, SwiftUI allows services to be injected globally via @Environment to avoid redundant ViewModels and keep views simpler. ",
        },
        note2: {
            title: "Apple Presenta Xcode 26 con IA Nativa, ChatGPT y Live Translation para Desarrolladores",
            date: "Jun 10, 2025",
            excerpt: "This article summarizes the new features for Xcode 26, which include native integration with AI and ChatGPT to help developers write code faster and with fewer errors. It also highlights the live translation feature, which makes it easy to localize applications for multiple languages directly from the IDE. ",
        },
        note3: {
            title: "La importancia de las arquitecturas modulares en las aplicaciones móviles",
            date: "May 14, 2024",
            excerpt: "This article in Spanish emphasizes why good technical architecture is key in mobile projects. It points out that user experience and design are often prioritized, neglecting code quality; the result is apps that work at first but over time become difficult to maintain and expand, turning into projects that 'no one wants to work on'. ",
        },
        note4: {
            title: "iOS App Store Submission Tutorial",
            date: "Sept 8, 2025",
            excerpt: "This YouTube tutorial video offers a step-by-step guide on how to prepare and submit an iOS application to the App Store. It covers key aspects such as project setup in Xcode, creating a provisioning profile, generating an IPA file, and using App Store Connect to manage the app's publication and distribution. ",
        },
        note5: {
            title: "Design Patterns",
            date: "Dec 5, 2025",
            excerpt: "This webpage provides a very comprehensive explanation of many design patterns used in software development, including clear examples with illustrations and step-by-step explanations. It's a valuable resource for developers looking to understand how to apply these patterns in their projects to improve code quality and maintainability. If you want to learn about design patterns, this is a reference you have to check out. ",
        },
        note6: {
            title: "Codewars",
            date: "Dec 5, 2025",
            excerpt: "This online platform offers a wide variety of programming challenges (katas) that allow developers to improve their skills in different programming languages. Users can solve problems of various difficulty levels, from beginners to experts, and compare their solutions with those of other community members. It's an excellent way to practice and learn new coding techniques while competing friendly with other programmers. ",
        },
        more: {
            title: "Click to read more",
        }
    },
    contact: {
        title: 'Contact',
        ctaCV: 'Download CV',
        email: 'Copy Email',
        copied: 'Email copied!',
    },
    footer: {
        title: "iOS & Full-Stack Developer",
        rights: "All rights reserved.",
    }
};
