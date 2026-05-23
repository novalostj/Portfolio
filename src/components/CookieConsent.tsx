"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

// TODO: Replace with your actual Google Analytics 4 Measurement ID
// Create a GA4 property at https://analytics.google.com → Admin → Data Streams
const GA_MEASUREMENT_ID = "G-RF365P5PPH";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(true);
  const [gaLoaded, setGaLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (stored === "accepted") {
      setGaLoaded(true);
      setShowBanner(false);
    } else if (stored === "declined") {
      setShowBanner(false);
    }
    // else: no decision yet → show banner
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
    setGaLoaded(true);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  return (
    <>
      {/* Google Analytics — only loads after user accepts */}
      {gaLoaded && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}

      {/* Consent Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in-up">
          <div className="mx-auto max-w-6xl px-6 py-4">
            <div className="flex flex-col items-center gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-4 shadow-lg backdrop-blur-sm sm:flex-row sm:justify-between">
              <p className="text-center text-sm text-[var(--color-muted)] sm:text-left">
                This site uses cookies to track visitor locations for analytics
                purposes. By clicking &ldquo;Accept&rdquo;, you consent to this.
              </p>
              <div className="flex shrink-0 gap-2">
                <button
                  onClick={decline}
                  className="rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-foreground)]"
                >
                  Decline
                </button>
                <button
                  onClick={accept}
                  className="rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--color-accent-hover)]"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
