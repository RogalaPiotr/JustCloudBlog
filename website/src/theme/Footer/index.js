import React, { useEffect } from 'react';
import Footer from '@theme-original/Footer';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function FooterWrapper(props) {
  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      const cookieSettingsLink = document.getElementById('footer-cookie-settings');
      if (cookieSettingsLink) {
        cookieSettingsLink.addEventListener('click', () => {
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
        });
      }
    }
  }, []);

  return <Footer {...props} />;
}
