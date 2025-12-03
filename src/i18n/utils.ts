import { en } from './en';
import { es } from './es';

export const LANGUAGES = {
    en: 'English',
    es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
    en,
    es,
} as const;

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as Lang;
    return defaultLang;
}

export function useTranslations(lang: Lang) {
    return function t(key: string) {
        const keys = key.split('.');
        let value: any = ui[lang];
        for (const k of keys) {
            value = value?.[k];
        }
        return value || key;
    }
}
