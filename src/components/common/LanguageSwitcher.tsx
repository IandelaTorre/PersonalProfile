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

  const toggleLang = () => {
    const newLang = $lang === 'en' ? 'es' : 'en';
    
    let newPath;
    const currentPath = window.location.pathname;
    
    if (initialLang === defaultLang) {
        // Currently at default (e.g. /about), switch to /es/about
        // If root /, switch to /es/
        newPath = `/${newLang}${currentPath === '/' ? '' : currentPath}`;
    } else {
        // Currently at /es/..., switch to /...
        // Remove /es
        newPath = currentPath.replace(`/${initialLang}`, '') || '/';
    }

    window.location.href = newPath;
  };

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <button
      onClick={toggleLang}
      className="relative inline-flex items-center cursor-pointer group focus:outline-none"
      aria-label="Toggle Language"
    >
      <div className="w-14 h-7 bg-gray-200 rounded-full shadow-inner transition-colors duration-300 ease-in-out group-hover:bg-gray-300 dark:bg-neutral-700 dark:group-hover:bg-neutral-600"></div>
      <div 
        className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300 ease-in-out flex items-center justify-center text-[10px] font-bold text-gray-700 ${
          $lang === 'es' ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {$lang === 'en' ? 'EN' : 'ES'}
      </div>
    </button>
  );
}
