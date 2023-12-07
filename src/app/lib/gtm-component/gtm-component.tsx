"use client";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

const pageview = (url: string) => {
  if ((window as any).dataLayer instanceof Array) {
    (window as any).dataLayer.push({
      event: "pageview",
      page: url,
    });
  } else {
    console.log({
      event: "pageview",
      page: url,
    });
  }
};

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      pageview(
        `${pathname}${searchParams.toString() ? `?${searchParams}` : ""}`
      );
    }
  }, [pathname, searchParams]);

  const gtmId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production" || !gtmId) {
    return null;
  }

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
      ></Script>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${gtmId}');
          `,
        }}
      />
    </>
  );
}
