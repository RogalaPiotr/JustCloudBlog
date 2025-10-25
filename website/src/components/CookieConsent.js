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
    
    // Sprawdź czy GA nie jest już załadowane
    if (window.gtag) {
      return;
    }

    // Dodanie skryptu GA dynamicznie
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-T278Y9D28E';
    document.head.appendChild(script);

    // Inicjalizacja gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-T278Y9D28E', {
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
          Czy wyrażasz zgodę? Dowiedz się więcej w naszej <a href="/privacy-policy" className={styles.link}>Polityce Prywatności</a>.
        </p>
        <div className={styles.buttons}>
          <button onClick={acceptCookies} className={styles.acceptButton}>
            Akceptuję
          </button>
          <button onClick={rejectCookies} className={styles.rejectButton}>
            Nie akceptuję
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default CookieConsentBanner;