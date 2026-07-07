export type BadgeColor =
    | "blue"
    | "indigo"
    | "purple"
    | "pink"
    | "red"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "green"
    | "emerald"
    | "teal"
    | "cyan"
    | "sky"
    | "slate"
    | "gray"
    | "zinc"
    | "neutral"
    | "stone";

// Mapa de tags -> color, alineado con el TechStack
const tagColorMap: Record<string, BadgeColor> = {
    // iOS
    Swift: "orange",
    SwiftUI: "blue",
    UIKit: "indigo",
    Storyboards: "indigo",
    "Auto Layout": "indigo",
    "Stack Views": "indigo",
    MVVM: "slate",
    "Clean Architecture": "slate",
    Coordinator: "slate",
    Coordinators: "slate",
    DI: "slate",
    "Dependency Injection": "slate",
    "Async/Await": "blue",
    Combine: "blue",
    Alamofire: "red",
    "Local Persistence": "green",
    CoreData: "green",
    "Unit Tests (XCTest)": "amber",

    // Backend
    JavaScript: "yellow",
    NestJS: "red",
    "Node.js": "green",
    Prisma: "purple",
    "Drizzle ORM": "lime",
    "Serverless Framework": "red",
    PostgreSQL: "blue",
    Express: "gray",
    "REST API": "zinc",
    "REST APIs": "zinc",
    "JWT Auth": "zinc",
    "Pino Logger": "amber",
    Supabase: "green",
    Render: "gray",

    // Frontend / Web
    React: "cyan",
    "React Router": "gray",
    Redux: "purple",
    "Ant Design": "blue",
    "Responsive Design": "zinc",
    Astro: "orange",
    "Tailwind CSS": "cyan",
    TypeScript: "blue",
    i18n: "stone",
    Markdown: "neutral",
    Vercel: "gray",

    // Android
    Android: "green",
    Kotlin: "purple",
    SQLite: "blue",
    "Google Drive API": "blue",
    "Material Design": "pink",
};

export function getTagColor(tag: string): BadgeColor {
    return tagColorMap[tag] ?? "gray";
}
