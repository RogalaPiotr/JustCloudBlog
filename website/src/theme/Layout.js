import React from 'react';
import Layout from '@theme-original/Layout';
import CookieConsentBanner from '../components/CookieConsent';
import Head from '@docusaurus/Head';
import {useLocation} from '@docusaurus/router';

export default function LayoutWithCookieConsent(props) {
  const location = useLocation();
  
  // Remove query strings from canonical URL
  const canonicalUrl = `https://blog.justcloud.pl${location.pathname}`;
  const hasQueryString = location.search && location.search.length > 0;

  return (
    <>
      {hasQueryString && (
        <Head>
          <link rel="canonical" href={canonicalUrl} />
          <meta name="robots" content="noindex, nofollow" />
        </Head>
      )}
      <Layout {...props} />
      <CookieConsentBanner />
    </>
  );
}