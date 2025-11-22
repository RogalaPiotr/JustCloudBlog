import React, { useState, useEffect } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import styles from './CookieConsent.module.css';

const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Sprawdź czy jesteśmy w przeglądarce (nie podczas SSR)
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }

    // Sprawdź czy decyzja cookies jest już zapisana
    const consent = localStorage.getItem('cookieConsent');
    
    if (consent === 'accepted') {
      // Użytkownik wcześniej zaakceptował - załaduj GA
      loadGoogleAnalytics();
    } else if (!consent) {
      // Brak decyzji - pokaż baner
      setVisible(true);
    }
    // Jeśli consent === 'rejected', nie pokazujemy banera i nie ładujemy GA
  }, []);

  const acceptCookies = () => {
    if (!ExecutionEnvironment.canUseDOM) return;
    
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
    // Załaduj Google Analytics dopiero po akceptacji
    loadGoogleAnalytics();
  };

  const rejectCookies = () => {
    if (!ExecutionEnvironment.canUseDOM) return;
    
    localStorage.setItem('cookieConsent', 'rejected');
    setVisible(false);
    // Nie wczytujemy GA i usuwamy ewentualne cookies analityczne
    removeGoogleAnalyticsCookies();
  };

  const loadGoogleAnalytics = () => {
    if (!ExecutionEnvironment.canUseDOM) return;
    
    // Update consent mode
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
    } else {
      // Fallback if gtag is not defined yet (should be defined in head)
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      window.gtag = gtag;
      window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
    }
    
    // Sprawdź czy skrypt GA nie jest już załadowany
    // Note: window.gtag is now defined in head, so we check for the script element
    const existingScript = document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=G-T278Y9D28E"]`);
    if (existingScript) {
      return;
    }

    // Dodanie skryptu GA dynamicznie
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-T278Y9D28E';
    document.head.appendChild(script);

    // Inicjalizacja gtag (config)
    window.gtag('js', new Date());
    window.gtag('config', 'G-T278Y9D28E', {
      anonymize_ip: true
    });
  };

  const removeGoogleAnalyticsCookies = () => {
    if (!ExecutionEnvironment.canUseDOM) return;
    
    // Usuń cookies Google Analytics
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith('_ga') || cookie.startsWith('_gid')) {
        const cookieName = cookie.split('=')[0];
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      }
    }
  };

  return visible ? (
    <div className={styles.banner}>
      <div className={styles.content}>
        <p className={styles.text}>
          Używamy plików cookie do analizy ruchu (Google Analytics), aby zapewnić najlepsze doświadczenia na naszej stronie. 
          Czy wyrażasz zgodę? <a href="/privacy-policy" className={styles.link}>Polityka Prywatności</a>
        </p>
        <div className={styles.buttons}>
          <button onClick={rejectCookies} className={styles.rejectButton}>
            Odrzuć
          </button>
          <button onClick={acceptCookies} className={styles.acceptButton}>
            Akceptuję
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default CookieConsentBanner;