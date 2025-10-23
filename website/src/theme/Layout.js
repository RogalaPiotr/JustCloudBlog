import React from 'react';
import Layout from '@theme-original/Layout';
import CookieConsentBanner from '../components/CookieConsent';

export default function LayoutWithCookieConsent(props) {
  return (
    <>
      <Layout {...props} />
      <CookieConsentBanner />
    </>
  );
}