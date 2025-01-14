import { AppProps } from "next/app";
import Script from "next/script";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script
        strategy="afterInteractive" // Load script after page load
        src="https://www.googletagmanager.com/gtag/js?id=G-VPE41GKSB9"
        async
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive" // Execute inline script after page load
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VPE41GKSB9');
          `,
        }}
      />
      <meta name="apple-mobile-web-app-title" content="edemAI" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.20/dist/katex.min.css"
        integrity="sha384-sMefv1J1YJCHsg0mTa9YG+n/9KnJb9lGrJUUY5arg6bAL1qps/oZjmUwaHlX5Ugg"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
