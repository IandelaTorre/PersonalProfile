import React, { useEffect, useState } from 'react';
import { useStore } from '@nanostores/react';
import { currentLang } from '../../store/language';
import { defaultLang, type Lang } from '../../i18n/utils';

export default function LanguageSwitcher({ initialLang }: { initialLang: Lang }) {
  const $lang = useStore(currentLang);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    currentLang.set(initialLang);
    setMounted(true);
  }, [initialLang]);

  const switchLang = (targetLang: Lang) => {
    if (targetLang === $lang) return;

    let newPath;
    const currentPath = window.location.pathname;
    
    // Logic to switch path
    if (initialLang === defaultLang) {
        // We are at default language (e.g. /about or /)
        // If target is 'es', prepend /es
        // If target is 'en', do nothing (already there) - but we entered iff different
        if (targetLang === 'es') {
             newPath = `/es${currentPath === '/' ? '' : currentPath}`;
        } else {
            newPath = currentPath; 
        }
    } else {
        // We are at 'es' (e.g. /es/about)
        // If target is 'en', remove /es
        if (targetLang === 'en') {
             newPath = currentPath.replace(`/${initialLang}`, '') || '/';
        } else {
            newPath = currentPath;
        }
    }

    if (newPath !== currentPath) {
        window.location.href = newPath;
    }
  };

  if (!mounted) return null;

  return (
    <div className="inline-flex items-center rounded-full bg-gray-100 p-1 dark:bg-white/5 border border-gray-200 dark:border-white/10">
      <button
        onClick={() => switchLang('es')}
        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
          $lang === 'es'
            ? 'bg-blue-500 text-white shadow-sm'
            : 'text-gray-500 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-white'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => switchLang('en')}
        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
          $lang === 'en'
            ? 'bg-blue-500 text-white shadow-sm'
            : 'text-gray-500 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
}
