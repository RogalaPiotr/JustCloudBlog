/**
 * IndexNow API Integration for Instant Indexing
 * https://www.indexnow.org/
 * 
 * Submits URLs to Bing, Yandex, and other search engines for immediate indexing.
 * Updated: 2025-10-27
 */

(function() {
    'use strict';

    // IndexNow Configuration
    const INDEXNOW_CONFIG = {
        // TODO: Replace with your actual IndexNow API key
        // Get your key from: https://www.bing.com/indexnow
        apiKey: '792ebbd3423a4ae7856e0dfbb76d355b',
        
        host: 'blog.justcloud.pl',
        
        // IndexNow endpoint (multiple search engines supported)
        endpoint: 'https://api.indexnow.org/indexnow',
        
        // Alternative endpoints (choose one):
        // endpoint: 'https://www.bing.com/indexnow',
        // endpoint: 'https://yandex.com/indexnow',
        
        // Auto-submit on page load (set to false for manual submission only)
        autoSubmit: false,
        
        // Delay before auto-submit (milliseconds)
        submitDelay: 2000
    };

    /**
     * Submit URL(s) to IndexNow API
     * @param {string|string[]} urls - Single URL or array of URLs to submit
     * @returns {Promise<Object>} Response from IndexNow API
     */
    async function submitToIndexNow(urls) {
        // Validate API key
        if (!INDEXNOW_CONFIG.apiKey || INDEXNOW_CONFIG.apiKey === 'YOUR_INDEXNOW_KEY_HERE') {
            console.warn('[IndexNow] API key not configured. Skipping submission.');
            return { success: false, error: 'API key not configured' };
        }

        // Normalize URLs to array
        const urlList = Array.isArray(urls) ? urls : [urls];
        
        // Validate URLs
        const validUrls = urlList.filter(url => {
            try {
                new URL(url);
                return true;
            } catch {
                console.warn('[IndexNow] Invalid URL:', url);
                return false;
            }
        });

        if (validUrls.length === 0) {
            console.warn('[IndexNow] No valid URLs to submit');
            return { success: false, error: 'No valid URLs' };
        }

        const payload = {
            host: INDEXNOW_CONFIG.host,
            key: INDEXNOW_CONFIG.apiKey,
            keyLocation: `https://${INDEXNOW_CONFIG.host}/${INDEXNOW_CONFIG.apiKey}.txt`,
            urlList: validUrls
        };

        try {
            console.log('[IndexNow] Submitting URLs:', validUrls);
            
            const response = await fetch(INDEXNOW_CONFIG.endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok || response.status === 202) {
                console.log('[IndexNow] ✅ Successfully submitted:', validUrls);
                return { success: true, urls: validUrls, status: response.status };
            } else {
                const errorText = await response.text();
                console.error('[IndexNow] ❌ Submission failed:', response.status, errorText);
                return { success: false, error: errorText, status: response.status };
            }
        } catch (error) {
            console.error('[IndexNow] ❌ Network error:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Submit current page URL to IndexNow
     */
    function submitCurrentPage() {
        const currentUrl = window.location.href;
        
        // Only submit blog post pages (not tag pages, etc.)
        if (currentUrl.includes('/tags/') || currentUrl.includes('/page/')) {
            console.log('[IndexNow] Skipping non-article page:', currentUrl);
            return;
        }

        submitToIndexNow(currentUrl);
    }

    /**
     * Auto-submit on page load (if enabled)
     */
    if (INDEXNOW_CONFIG.autoSubmit) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                setTimeout(submitCurrentPage, INDEXNOW_CONFIG.submitDelay);
            });
        } else {
            setTimeout(submitCurrentPage, INDEXNOW_CONFIG.submitDelay);
        }
    }

    // Expose to global scope for manual submission
    window.IndexNow = {
        submit: submitToIndexNow,
        submitCurrentPage: submitCurrentPage,
        config: INDEXNOW_CONFIG
    };

    console.log('[IndexNow] ✅ Integration loaded. Use window.IndexNow.submit(url) to manually submit URLs.');
})();
