/**
 * IndexNow API Integration for Instant Indexing
 * https://www.indexnow.org/
 * 
 * Client-side submission using GET method (CORS-friendly)
 * Submits current page URL to Bing for immediate indexing
 * Updated: 2025-10-27
 */

(function() {
    'use strict';

    // IndexNow Configuration
    const INDEXNOW_CONFIG = {
        apiKey: '792ebbd3423a4ae7856e0dfbb76d355b',
        host: 'blog.justcloud.pl',
        // Use Bing endpoint with GET method (no CORS issues)
        endpoint: 'https://www.bing.com/indexnow',
        // Auto-submit on page load
        autoSubmit: true,
        // Delay before auto-submit (milliseconds)
        submitDelay: 3000 // 3s delay to let analytics fire first
    };

    /**
     * Submit current URL to IndexNow API using GET method (CORS-friendly)
     * GET format: https://www.bing.com/indexnow?url={url}&key={key}
     */
    function submitToIndexNow() {
        const currentUrl = window.location.href;

        // Check if already submitted in this session
        const sessionKey = `indexnow_submitted_${currentUrl}`;
        if (sessionStorage.getItem(sessionKey)) {
            console.log('[IndexNow] Already submitted in this session:', currentUrl);
            return;
        }

        // Build GET request URL (CORS-friendly method)
        const params = new URLSearchParams({
            url: currentUrl,
            key: INDEXNOW_CONFIG.apiKey
        });
        
        const requestUrl = `${INDEXNOW_CONFIG.endpoint}?${params.toString()}`;
        
        console.log('[IndexNow] Submitting URL:', currentUrl);

        // Use fetch with GET (no CORS preflight)
        fetch(requestUrl, {
            method: 'GET',
            mode: 'no-cors' // Bypass CORS - we won't see response but request will be sent
        })
        .then(() => {
            console.log('[IndexNow] ✅ Submitted successfully (no-cors mode)');
            // Mark as submitted in session
            sessionStorage.setItem(sessionKey, Date.now().toString());
        })
        .catch((error) => {
            console.error('[IndexNow] ❌ Submission error:', error);
        });
    }

    /**
     * Auto-submit on page load (if enabled)
     */
    if (INDEXNOW_CONFIG.autoSubmit) {
        console.log('[IndexNow] 🚀 Auto-submit enabled, will submit in', INDEXNOW_CONFIG.submitDelay, 'ms');
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                setTimeout(submitToIndexNow, INDEXNOW_CONFIG.submitDelay);
            });
        } else {
            setTimeout(submitToIndexNow, INDEXNOW_CONFIG.submitDelay);
        }
    }

    // Expose to global scope for manual testing
    window.IndexNow = {
        submit: submitToIndexNow,
        config: INDEXNOW_CONFIG
    };

    console.log('[IndexNow] Script loaded. Auto-submit:', INDEXNOW_CONFIG.autoSubmit);

})();
