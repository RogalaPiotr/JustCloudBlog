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
        background: 'var(--ifm-footer-background-color)',
        color: 'var(--ifm-footer-color)',
        borderTop: '1px solid var(--ifm-footer-border-color, rgba(0, 0, 0, 0.1))',
        fontSize: '0.9rem'
      }}>
        <CookieSettings />
      </div>
    </>
  );
}
