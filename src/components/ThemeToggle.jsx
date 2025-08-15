import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

export const ThemeToggle = () => {
  const getInitial = () => {
    try {
      const t = localStorage.getItem('theme');
      return t ? t === 'dark' : true; // default dark
    } catch {
      return true;
    }
  };

  // No <boolean> here in .jsx
  const [isDarkMode, setIsDarkMode] = useState(getInitial());

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(v => !v);

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300',
        'focus:outline-hidden'
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
