import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Akceptuję"
      declineButtonText="Odrzuć"
      enableDeclineButton
      cookieName="justcloudCookieConsent"
      style={{ 
        background: "var(--jc-bg-secondary)",
        color: "var(--jc-text-primary)",
        borderTop: "1px solid var(--ifm-color-gray-300)",
        padding: "16px 20px",
        boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.08)",
        fontSize: "15px",
        lineHeight: "1.5"
      }}
      buttonStyle={{ 
        background: "var(--jc-color-blue-primary)", 
        color: "#fff", 
        fontSize: "14px",
        fontWeight: "600",
        padding: "10px 24px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        transition: "all 0.2s ease"
      }}
      declineButtonStyle={{ 
        color: "var(--jc-text-secondary)", 
        background: "transparent", 
        fontSize: "14px",
        fontWeight: "500",
        padding: "10px 24px",
        borderRadius: "6px",
        border: "1px solid var(--ifm-color-gray-300)",
        cursor: "pointer",
        transition: "all 0.2s ease"
      }}
      expires={150}
    >
      Używamy plików cookie, aby zapewnić najlepsze doświadczenia na naszej stronie. Dowiedz się więcej w naszej <a href="/privacy-policy" style={{ color: "var(--jc-link-color)", textDecoration: "underline" }}>Polityce Prywatności</a>.
    </CookieConsent>
  );
};

export default CookieConsentBanner;