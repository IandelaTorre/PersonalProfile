import { en } from './en';
import { es } from './es';

export const defaultLang = 'en';

export const ui = {
    en,
    es,
} as const;

export type Lang = keyof typeof ui;

// Union of every dot-path that leads to a string, e.g. "nav.home" | "hero.title" | ...
type DotPaths<T> = {
    [K in keyof T & string]: T[K] extends string ? K : `${K}.${DotPaths<T[K]>}`;
}[keyof T & string];

export type TranslationKey = DotPaths<typeof en>;

/** Coerce Astro.currentLocale into a supported Lang. */
export function getLang(locale: string | undefined): Lang {
    if (locale && locale in ui) return locale as Lang;
    return defaultLang;
}

export function useTranslations(lang: Lang) {
    return function t(key: TranslationKey): string {
        const value = key
            .split('.')
            .reduce<unknown>((obj, k) => (obj as Record<string, unknown>)?.[k], ui[lang]);
        return typeof value === 'string' ? value : key;
    };
}
