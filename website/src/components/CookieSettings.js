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
        color: 'var(--ifm-link-color)',
        cursor: 'pointer',
        padding: '4px 8px',
        textDecoration: 'underline',
        fontSize: 'inherit',
        transition: 'color 0.2s ease'
      }}
      onMouseEnter={(e) => e.target.style.color = 'var(--ifm-link-hover-color)'}
      onMouseLeave={(e) => e.target.style.color = 'var(--ifm-link-color)'}
    >
      Zmień ustawienia cookies
    </button>
  );
};

export default CookieSettings;
