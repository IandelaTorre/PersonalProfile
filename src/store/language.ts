import { atom } from 'nanostores';
import { defaultLang, type Lang } from '../i18n/utils';

export const currentLang = atom<Lang>(defaultLang);
