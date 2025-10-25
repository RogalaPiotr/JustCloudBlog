import React from 'react';
import Footer from '@theme-original/Footer';
import CookieSettings from '../../components/CookieSettings';

export default function FooterWrapper(props) {
  return (
    <>
      <Footer {...props} />
      <div style={{
        textAlign: 'center',
        padding: '12px 20px',
        background: '#303846',
        color: 'var(--ifm-footer-color)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        fontSize: '0.9rem'
      }}>
        <CookieSettings />
      </div>
    </>
  );
}
