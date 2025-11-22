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
     * Monitor URL changes for SPA navigation
     * Uses MutationObserver to detect DOM changes + URL monitoring
     */
    let lastUrl = window.location.href;
    
    function checkUrlChange() {
        const currentUrl = window.location.href;
        if (currentUrl !== lastUrl) {
            console.log('[IndexNow] 🔄 URL changed:', lastUrl, '->', currentUrl);
            lastUrl = currentUrl;
            setTimeout(submitToIndexNow, INDEXNOW_CONFIG.submitDelay);
        }
    }

    /**
     * Auto-submit on page load (if enabled)
     */
    if (INDEXNOW_CONFIG.autoSubmit) {
        console.log('[IndexNow] 🚀 Auto-submit enabled, will submit in', INDEXNOW_CONFIG.submitDelay, 'ms');
        
        // Initial page load
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                setTimeout(submitToIndexNow, INDEXNOW_CONFIG.submitDelay);
            });
        } else {
            setTimeout(submitToIndexNow, INDEXNOW_CONFIG.submitDelay);
        }

        // Monitor for SPA navigation using multiple strategies:
        
        // 1. MutationObserver - detects DOM changes (Docusaurus/React Router updates)
        const observer = new MutationObserver(function() {
            checkUrlChange();
        });
        
        // Start observing the document with the configured parameters
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // 2. Popstate - browser back/forward buttons
        window.addEventListener('popstate', function() {
            console.log('[IndexNow] ⬅️ Browser navigation detected');
            checkUrlChange();
        });

        // 3. Click interceptor - catch link clicks
        document.addEventListener('click', function(e) {
            // Check if clicked element is a link or inside a link
            const link = e.target.closest('a');
            if (link && link.href && link.href.startsWith(window.location.origin)) {
                console.log('[IndexNow] 🔗 Internal link clicked');
                // Check URL after a small delay to let navigation happen
                setTimeout(checkUrlChange, 100);
            }
        }, true);

        console.log('[IndexNow] 👀 Monitoring SPA navigation (MutationObserver + popstate + clicks)');
    }

    // Expose to global scope for manual testing
    window.IndexNow = {
        submit: submitToIndexNow,
        config: INDEXNOW_CONFIG
    };

    console.log('[IndexNow] Script loaded. Auto-submit:', INDEXNOW_CONFIG.autoSubmit);

})();
