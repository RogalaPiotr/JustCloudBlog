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
      style={{ background: "#2B373B" }}
      buttonStyle={{ 
        background: "#00A7E4", 
        color: "#fff", 
        fontSize: "14px",
        fontWeight: "600",
        padding: "8px 20px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer"
      }}
      declineButtonStyle={{ 
        color: "#fff", 
        background: "#6B7280", 
        fontSize: "14px",
        fontWeight: "500",
        padding: "8px 20px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer"
      }}
      expires={150}
    >
      Używamy plików cookie, aby zapewnić najlepsze doświadczenia na naszej stronie. Dowiedz się więcej w naszej <a href="/privacy-policy" style={{ color: "#00A7E4", textDecoration: "underline" }}>Polityce Prywatności</a>.
    </CookieConsent>
  );
};

export default CookieConsentBanner;