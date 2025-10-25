import React from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const CookieSettings = () => {
  const resetCookieConsent = () => {
    if (ExecutionEnvironment.canUseDOM) {
      localStorage.removeItem('cookieConsent');
      // Opcjonalnie: usuń istniejące cookies GA
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith('_ga') || cookie.startsWith('_gid')) {
          const cookieName = cookie.split('=')[0];
          document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        }
      }
      window.location.reload();
    }
  };

  return (
    <button 
      onClick={resetCookieConsent}
      style={{
        background: 'transparent',
        border: 'none',
        color: 'var(--ifm-footer-link-color, var(--ifm-color-secondary))',
        cursor: 'pointer',
        padding: '4px 8px',
        textDecoration: 'underline',
        fontSize: 'inherit',
        transition: 'opacity 0.2s ease'
      }}
      onMouseEnter={(e) => e.target.style.opacity = '0.7'}
      onMouseLeave={(e) => e.target.style.opacity = '1'}
    >
      Zmień ustawienia cookies
    </button>
  );
};

export default CookieSettings;
